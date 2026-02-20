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

export async function getPosts() {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) return []

    const client = await prisma.client.findUnique({
        where: { userId: user.id }
    })

    if (!client) return []

    return await prisma.post.findMany({
        where: { clientId: client.id },
        orderBy: { createdAt: 'desc' }
    })
}

export async function getPost(postId: string) {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) throw new Error('Unauthorized')

    const client = await prisma.client.findUnique({
        where: { userId: user.id }
    })

    if (!client) throw new Error('Client not found')

    return await prisma.post.findFirst({
        where: { id: postId, clientId: client.id }
    })
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

export async function updatePost(postId: string, title: string, content: string, status: 'draft' | 'published' | 'scheduled' = 'draft', scheduledAt?: Date, destinations: string[] = []) {
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

    const slug = title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '')

    await prisma.post.update({
        where: { id: postId },
        data: {
            title,
            content,
            slug,
            status,
            scheduledAt,
            destinations
        }
    })

    revalidatePath('/portal/posts')
}

export async function deletePost(postId: string) {
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

    await prisma.post.delete({
        where: { id: postId }
    })

    revalidatePath('/portal/posts')
}

export async function publishToLinkedIn(postId: string) {
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
            provider: 'linkedin'
        }
    })

    if (!integration) throw new Error('LinkedIn integration not found. Please add your API key in settings.')

    const linkedinUrl = `https://linkedin.com/feed/update/urn:li:share:${Date.now()}`

    await prisma.post.update({
        where: { id: postId },
        data: { linkedinUrl }
    })

    revalidatePath('/portal/posts')
    return linkedinUrl
}

export async function publishToInstagram(postId: string) {
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
            provider: 'instagram'
        }
    })

    if (!integration) throw new Error('Instagram integration not found. Please add your API key in settings.')

    const instagramUrl = `https://instagram.com/p/${Date.now()}`

    await prisma.post.update({
        where: { id: postId },
        data: { instagramUrl }
    })

    revalidatePath('/portal/posts')
    return instagramUrl
}

export async function publishToFacebook(postId: string) {
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
            provider: 'facebook'
        }
    })

    if (!integration) throw new Error('Facebook integration not found. Please add your API key in settings.')

    const facebookUrl = `https://facebook.com/posts/${Date.now()}`

    await prisma.post.update({
        where: { id: postId },
        data: { facebookUrl }
    })

    revalidatePath('/portal/posts')
    return facebookUrl
}
