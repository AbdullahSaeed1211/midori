import { createClient } from '@/lib/supabase/server'
import prisma from '@/lib/prisma'
import { redirect } from 'next/navigation'
import { AdminContent } from './admin-content'

const ADMIN_EMAILS = (process.env.ADMIN_EMAIL || '').split(',').map(e => e.trim()).filter(Boolean)

export default async function AdminPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login?redirect=/admin')
  }

  if (!ADMIN_EMAILS.includes(user.email || '')) {
    redirect('/')
  }

  const [clients, projects, subscriptions] = await Promise.all([
    prisma.client.findMany({ orderBy: { createdAt: 'desc' } }),
    prisma.project.findMany({ 
      include: { client: true },
      orderBy: { createdAt: 'desc' } 
    }),
    prisma.subscription.findMany({ 
      include: { client: true },
      orderBy: { createdAt: 'desc' } 
    }),
  ])

  return <AdminContent user={user} clients={clients} projects={projects} subscriptions={subscriptions} />
}
