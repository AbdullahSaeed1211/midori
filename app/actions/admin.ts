'use server'

import { createClient } from '@/lib/supabase/server'
import prisma from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

const ADMIN_EMAILS = (process.env.ADMIN_EMAIL || '').split(',').map(e => e.trim()).filter(Boolean)

export async function updateClientAccess(clientId: string, tools: string[]) {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user || !ADMIN_EMAILS.includes(user.email || '')) {
        throw new Error('Unauthorized')
    }

    await prisma.client.update({
        where: { id: clientId },
        data: { allowedTools: tools }
    })

    revalidatePath('/admin')
    revalidatePath('/portal')
    revalidatePath('/admin')
}

export async function approveClient(clientId: string) {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user || !ADMIN_EMAILS.includes(user.email || '')) {
        throw new Error('Unauthorized')
    }

    await prisma.client.update({
        where: { id: clientId },
        data: { status: 'approved' }
    })

    revalidatePath('/admin')
    revalidatePath('/portal')
}

export async function rejectClient(clientId: string) {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user || !ADMIN_EMAILS.includes(user.email || '')) {
        throw new Error('Unauthorized')
    }

    await prisma.client.update({
        where: { id: clientId },
        data: { status: 'rejected' }
    })

    revalidatePath('/admin')
}

export async function deleteClient(clientId: string) {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user || !ADMIN_EMAILS.includes(user.email || '')) {
        throw new Error('Unauthorized')
    }

    // Delete related records first
    await prisma.integration.deleteMany({ where: { clientId } })
    await prisma.post.deleteMany({ where: { clientId } })
    await prisma.subscription.deleteMany({ where: { clientId } })
    await prisma.project.deleteMany({ where: { clientId } })
    
    // Delete the client
    await prisma.client.delete({
        where: { id: clientId }
    })

    revalidatePath('/admin')
}

// Project CRUD operations
export async function createProject(name: string, description?: string, clientId?: string) {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) throw new Error('Unauthorized')

    // Get client - either specified or the current user's client
    let targetClientId = clientId
    
    if (!targetClientId) {
        const client = await prisma.client.findUnique({
            where: { userId: user.id }
        })
        if (!client) throw new Error('Client not found')
        targetClientId = client.id
    }

    // Check if admin
    const isAdmin = ADMIN_EMAILS.includes(user.email || '')

    if (!isAdmin && clientId) {
        throw new Error('Unauthorized - only admins can create projects for other clients')
    }

    const project = await prisma.project.create({
        data: {
            clientId: targetClientId,
            name,
            description,
            status: 'planning',
            progress: 0,
        }
    })

    revalidatePath('/portal')
    revalidatePath('/admin')
    return project
}

export async function updateProject(projectId: string, data: { name?: string, description?: string, status?: string, progress?: number, endDate?: Date }) {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) throw new Error('Unauthorized')

    const isAdmin = ADMIN_EMAILS.includes(user.email || '')
    
    if (!isAdmin) {
        // Verify ownership
        const client = await prisma.client.findUnique({
            where: { userId: user.id }
        })
        
        if (!client) throw new Error('Client not found')
        
        const project = await prisma.project.findFirst({
            where: { id: projectId, clientId: client.id }
        })
        
        if (!project) throw new Error('Project not found')
    }

    await prisma.project.update({
        where: { id: projectId },
        data
    })

    revalidatePath('/portal')
    revalidatePath('/admin')
}

export async function deleteProject(projectId: string) {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) throw new Error('Unauthorized')

    const isAdmin = ADMIN_EMAILS.includes(user.email || '')
    
    if (!isAdmin) {
        const client = await prisma.client.findUnique({
            where: { userId: user.id }
        })
        
        if (!client) throw new Error('Client not found')
        
        const project = await prisma.project.findFirst({
            where: { id: projectId, clientId: client.id }
        })
        
        if (!project) throw new Error('Project not found')
    }

    await prisma.project.delete({
        where: { id: projectId }
    })

    revalidatePath('/portal')
    revalidatePath('/admin')
}
