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
}
