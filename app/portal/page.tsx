import { createClient } from '@/lib/supabase/server'
import prisma from '@/lib/prisma'
import { redirect } from 'next/navigation'
import { PortalContent } from './portal-content'

const ADMIN_EMAILS = (process.env.ADMIN_EMAIL || '').split(',').map(e => e.trim()).filter(Boolean)

export default async function PortalPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  // Get or create client
  let client = await prisma.client.findUnique({
    where: { userId: user.id },
    include: {
      projects: {
        orderBy: { createdAt: 'desc' }
      },
      subscriptions: true,
      integrations: true,
      posts: true
    }
  }).catch((error: Error) => {
    console.error('Error fetching client:', error)
    return null
  })

  if (!client) {
    client = await prisma.client.create({
      data: {
        userId: user.id,
        email: user.email!,
        name: user.user_metadata?.name || user.email!.split('@')[0],
      },
      include: {
        projects: true,
        subscriptions: true,
        integrations: true,
        posts: true
      }
    }).catch((error: Error) => {
      console.error('Error creating client:', error)
      redirect('/login')
    })
  }

  const isAdmin = ADMIN_EMAILS.includes(user.email || '')
  const allowedTools = client?.allowedTools || []

  return <PortalContent user={user} client={client} isAdmin={isAdmin} allowedTools={allowedTools} />
}
