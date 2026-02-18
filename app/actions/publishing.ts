'use server'

import { createClient } from '@/lib/supabase/server'
import prisma from '@/lib/prisma'
import { revalidatePath } from 'next/cache'
import { decrypt } from '@/lib/encryption'

export async function savePost(title: string, content: string, status: 'draft' | 'published' | 'scheduled' = 'draft', scheduledAt?: Date, destinations: string[] = []) {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) throw new Error('Unauthorized')

    const client = await prisma.client.findUnique({
        where: { userId: user.id }
    })

    if (!client) throw new Error('Client not found')

    const slug = title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '')

    const post = await prisma.post.create({
        data: {
            clientId: client.id,
            title,
            content,
            slug,
            status,
            scheduledAt,
            destinations
        }
    })

    revalidatePath('/portal/posts')
    return post
}

export async function publishToMedium(postId: string) {
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

    // Find Medium Integration
    const integration = await prisma.integration.findFirst({
        where: {
            clientId: client.id,
            provider: 'medium'
        }
    })

    if (!integration) throw new Error('Medium integration not found. Please add your integration token.')

    // Simulating Medium API call
    const apiKey = decrypt(integration.key)


    // Mock success response
    const mediumUrl = `https://medium.com/@user/${post.slug}`

    await prisma.post.update({
        where: { id: postId },
        data: { mediumUrl }
    })

    return mediumUrl
}
