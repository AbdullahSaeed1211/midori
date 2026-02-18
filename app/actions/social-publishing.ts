'use server'

import { createClient } from '@/lib/supabase/server'
import prisma from '@/lib/prisma'
import { decrypt } from '@/lib/encryption'

// Helper to check auth and get integration
async function getIntegrationAndPost(postId: string, provider: string) {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) throw new Error('Unauthorized')

    const client = await prisma.client.findUnique({
        where: { userId: user.id }
    })

    if (!client) throw new Error('Client not found')

    const post = await prisma.post.findUnique({
        where: { id: postId, clientId: client.id }
    })

    if (!post) throw new Error('Post not found')

    const integration = await prisma.integration.findFirst({
        where: {
            clientId: client.id,
            provider
        }
    })

    if (!integration) throw new Error(`${provider} integration not found. Please add your integration token or connect the account.`)

    return { post, integration }
}

export async function publishToLinkedIn(postId: string) {
    const { post, integration } = await getIntegrationAndPost(postId, 'linkedin')

    const apiKey = decrypt(integration.key)
    const urn = (integration.config as any)?.urn

    if (!urn) throw new Error('LinkedIn URN not configured. Please update integration.')



    const payload = {
        author: urn,
        lifecycleState: "PUBLISHED",
        specificContent: {
            "com.linkedin.ugc.ShareContent": {
                shareCommentary: {
                    text: post.content // or post.title + \n + post.content
                },
                shareMediaCategory: "NONE"
            }
        },
        visibility: {
            "com.linkedin.ugc.MemberNetworkVisibility": "PUBLIC"
        }
    }

    const response = await fetch('https://api.linkedin.com/v2/ugcPosts', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
            'X-Restli-Protocol-Version': '2.0.0'
        },
        body: JSON.stringify(payload)
    })

    const data = await response.json()
    if (!response.ok) {
        throw new Error(data.message || JSON.stringify(data))
    }

    const url = `https://www.linkedin.com/feed/update/${data.id}`

    await prisma.post.update({
        where: { id: postId },
        data: { linkedinUrl: url }
    })

    return url
}

export async function publishToInstagram(postId: string) {
    const { post, integration } = await getIntegrationAndPost(postId, 'instagram')

    const apiKey = decrypt(integration.key)
    const pageId = (integration.config as any)?.pageId

    if (!pageId) throw new Error('Instagram Account ID not configured.')



    // Note: IG requires an image. If no image, we fail for now as this is Text-to-Post.
    // Ideally we'd have an image generation step before this or check for image URL in content.
    throw new Error('Instagram publishing requires an image. Text-only posts are not supported via API yet.')

    /* 
       To implement IG Pblishing:
       1. Create Container: POST /{ig-user-id}/media?image_url={url}&caption={text}&access_token={token}
       2. Publish Container: POST /{ig-user-id}/media_publish?creation_id={id}&access_token={token}
    */
}

export async function publishToFacebook(postId: string) {
    const { post, integration } = await getIntegrationAndPost(postId, 'facebook')

    const apiKey = decrypt(integration.key)
    const pageId = (integration.config as any)?.pageId

    if (!pageId) throw new Error('Facebook Page ID not configured.')



    const response = await fetch(`https://graph.facebook.com/v19.0/${pageId}/feed`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            message: post.content,
            access_token: apiKey
        })
    })

    const data = await response.json()
    if (!response.ok || data.error) {
        throw new Error(data.error?.message || 'Facebook API Error')
    }

    // data.id is usually PAGEID_POSTID
    const url = `https://facebook.com/${data.id}`

    await prisma.post.update({
        where: { id: postId },
        data: { facebookUrl: url }
    })

    return url
}
