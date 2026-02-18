'use client'

import { createClient } from '@/lib/supabase/client'
import { User } from '@supabase/supabase-js'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { LayoutDashboard, FileText, MessageSquare, Settings, Calendar, Clock, LogOut, Shield, Menu, FileCode, Receipt, FolderKanban, Plug, Sparkles, TrendingUp, CheckCircle, AlertCircle, ArrowRight, X, Home, CreditCard } from 'lucide-react'
import { useState } from 'react'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { IntegrationsView } from '@/components/portal/integrations-view'
import { AiStudioView } from '@/components/portal/ai-studio-view'

interface Project {
  id: string
  name: string
  description: string | null
  status: string
  progress: number
  endDate: Date | null
}

interface Subscription {
  plan: string
  status: string
  currentPeriodEnd: Date | null
}

interface Client {
  id: string
  name: string
  email: string
  projects: Project[]
  subscriptions: Subscription[]
}

const SIDEBAR_ITEMS = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'projects', label: 'Projects', icon: FileText },
  { id: 'schedule', label: 'Schedule', icon: Calendar },
  { id: 'messages', label: 'Messages', icon: MessageSquare },
  { id: 'integrations', label: 'Integrations', icon: Plug },
  { id: 'ai_studio', label: 'AI Studio', icon: Sparkles },
  { id: 'settings', label: 'Settings', icon: Settings },
]

const TOOL_ITEMS = [
  { id: 'documents', label: 'Documents', icon: FileCode },
  { id: 'invoices', label: 'Invoices', icon: Receipt },
  { id: 'brand_assets', label: 'Brand Assets', icon: FolderKanban },
  { id: 'support', label: 'Support', icon: MessageSquare },
]

export function PortalContent({ user, client, isAdmin, allowedTools = [] }: { user: User; client: Client; isAdmin?: boolean; allowedTools?: string[] }) {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState('dashboard')
  const [sidebarOpen, setSidebarOpen] = useState(true)

  async function handleLogout() {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push('/')
    router.refresh()
  }

  const projects = client.projects || []
  const subscription = client.subscriptions?.[0]
  const userName = user.user_metadata?.name || client.name || user.email?.split('@')[0] || 'there'

  const activeProjects = projects.filter(p => p.status === 'active' || p.status === 'review')
  const completedProjects = projects.filter(p => p.status === 'completed')
  const pendingTasks = projects.reduce((acc, p) => acc + Math.floor((100 - p.progress) / 20), 0)

  const getGreeting = () => {
    const hour = new Date().getHours()
    if (hour < 12) return 'Good morning'
    if (hour < 18) return 'Good afternoon'
    return 'Good evening'
  }

  return (
    <div className="min-h-screen bg-charcoal-black flex">
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? 'w-64' : 'w-20'} fixed left-0 top-0 h-screen bg-charcoal-gray/50 border-r border-off-white/10 flex flex-col transition-all duration-300 z-40 hidden md:flex`}>
        {/* Logo */}
        <div className="p-4 border-b border-off-white/10">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-kiiro-yellow flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-5 h-5 text-charcoal-black" />
            </div>
            {sidebarOpen && (
              <div>
                <span className="font-bold text-off-white">Kiiro</span>
                <p className="text-xs text-off-white/60">Client Portal</p>
              </div>
            )}
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
          {SIDEBAR_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all ${
                activeTab === item.id 
                  ? 'bg-kiiro-yellow/10 text-kiiro-yellow border border-kiiro-yellow/20' 
                  : 'text-off-white/70 hover:bg-off-white/5 hover:text-off-white'
              }`}
            >
              <item.icon className="w-5 h-5 flex-shrink-0" />
              {sidebarOpen && <span>{item.label}</span>}
            </button>
          ))}

          {/* Tool Items */}
          {allowedTools.length > 0 && (
            <>
              {sidebarOpen && <div className="pt-4 pb-2"><span className="text-xs text-off-white/40 uppercase tracking-wider px-3">Tools</span></div>}
              {TOOL_ITEMS.filter(item => allowedTools.includes(item.id)).map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all ${
                    activeTab === item.id 
                      ? 'bg-kiiro-yellow/10 text-kiiro-yellow border border-kiiro-yellow/20' 
                      : 'text-off-white/70 hover:bg-off-white/5 hover:text-off-white'
                  }`}
                >
                  <item.icon className="w-5 h-5 flex-shrink-0" />
                  {sidebarOpen && <span>{item.label}</span>}
                </button>
              ))}
            </>
          )}

          {/* Admin */}
          {isAdmin && (
            <Link href="/admin" className="pt-4 mt-4 border-t border-off-white/10">
              <div className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-purple-400 hover:bg-purple-400/10 transition-all`}>
                <Shield className="w-5 h-5 flex-shrink-0" />
                {sidebarOpen && <span>Admin Panel</span>}
              </div>
            </Link>
          )}
        </nav>

        {/* Subscription Card */}
        {sidebarOpen && subscription && (
          <div className="p-4 border-t border-off-white/10">
            <div className="bg-gradient-to-br from-kiiro-yellow/10 to-kiiro-yellow/5 rounded-xl border border-kiiro-yellow/20 p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-kiiro-yellow">Your Plan</span>
                <span className={`text-xs px-1.5 py-0.5 rounded ${subscription.status === 'active' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                  {subscription.status}
                </span>
              </div>
              <p className="text-lg font-bold text-off-white capitalize">{subscription.plan} Care</p>
              <Link href="/hosting" className="mt-3 flex items-center gap-1 text-xs text-kiiro-yellow hover:underline">
                Manage <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        )}

        {/* User */}
        <div className="p-4 border-t border-off-white/10">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-kiiro-yellow/20 flex items-center justify-center flex-shrink-0">
              <span className="text-kiiro-yellow text-sm font-semibold">{userName.charAt(0).toUpperCase()}</span>
            </div>
            {sidebarOpen && (
              <div className="flex-1 min-w-0">
                <p className="text-sm text-off-white font-medium truncate">{userName}</p>
                <p className="text-xs text-off-white/60 truncate">{client.email}</p>
              </div>
            )}
          </div>
          {sidebarOpen && (
            <button 
              onClick={handleLogout}
              className="mt-3 w-full flex items-center gap-2 px-3 py-2 text-sm text-off-white/60 hover:text-off-white hover:bg-off-white/5 rounded-lg transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Sign out
            </button>
          )}
        </div>

        {/* Toggle Button */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="absolute -right-3 top-20 w-6 h-6 bg-charcoal-gray border border-off-white/20 rounded-full flex items-center justify-center text-off-white/60 hover:text-off-white hover:bg-off-white/10 transition-all"
        >
          <span className={`transition-transform duration-300 ${sidebarOpen ? '' : 'rotate-180'}`}>‹</span>
        </button>
      </aside>

      {/* Mobile Header */}
      <div className="fixed top-0 left-0 right-0 h-16 bg-charcoal-gray/80 backdrop-blur-md border-b border-off-white/10 flex items-center justify-between px-4 z-30 md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="text-off-white">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="bg-charcoal-gray border-off-white/10 p-0 w-72">
            <div className="p-4 border-b border-off-white/10">
              <Link href="/" className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-kiiro-yellow flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-charcoal-black" />
                </div>
                <div>
                  <span className="font-bold text-off-white">Kiiro</span>
                  <p className="text-xs text-off-white/60">Client Portal</p>
                </div>
              </Link>
            </div>
            <div className="p-3 space-y-1">
              {SIDEBAR_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm ${
                    activeTab === item.id 
                      ? 'bg-kiiro-yellow/10 text-kiiro-yellow' 
                      : 'text-off-white/70'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  {item.label}
                </button>
              ))}
              {allowedTools.length > 0 && (
                <>
                  <div className="pt-4 pb-2"><span className="text-xs text-off-white/40 uppercase tracking-wider px-3">Tools</span></div>
                  {TOOL_ITEMS.filter(item => allowedTools.includes(item.id)).map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm ${
                        activeTab === item.id 
                          ? 'bg-kiiro-yellow/10 text-kiiro-yellow' 
                          : 'text-off-white/70'
                      }`}
                    >
                      <item.icon className="w-5 h-5" />
                      {item.label}
                    </button>
                  ))}
                </>
              )}
              {isAdmin && (
                <Link href="/admin" className="pt-4 mt-4 border-t border-off-white/10 block">
                  <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-purple-400">
                    <Shield className="w-5 h-5" />
                    Admin Panel
                  </div>
                </Link>
              )}
            </div>
          </SheetContent>
        </Sheet>
        <Link href="/" className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-kiiro-yellow" />
          <span className="font-bold text-off-white">Kiiro</span>
        </Link>
        <div className="w-9 h-9 rounded-full bg-kiiro-yellow/20 flex items-center justify-center">
          <span className="text-kiiro-yellow text-sm font-semibold">{userName.charAt(0).toUpperCase()}</span>
        </div>
      </div>

      {/* Main Content */}
      <main className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'md:ml-64' : 'md:ml-20'} pt-16 md:pt-0`}>
        <div className="min-h-screen p-6 md:p-8">
          {/* Welcome */}
          <div className="mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-off-white mb-2">
              {getGreeting()}, {userName} 👋
            </h1>
            <p className="text-off-white/60">Here&apos;s what&apos;s happening with your projects</p>
          </div>

          {/* Dashboard */}
          {activeTab === 'dashboard' && (
            <div className="space-y-6">
              {/* Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <StatCard icon={TrendingUp} label="Active Projects" value={activeProjects.length.toString()} color="yellow" />
                <StatCard icon={CheckCircle} label="Completed" value={completedProjects.length.toString()} color="green" />
                <StatCard icon={AlertCircle} label="Pending Tasks" value={pendingTasks.toString()} color="blue" />
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <QuickActionCard title="Start a New Project" description="Launch a new website or get a quote" href="/contact" icon={Sparkles} />
                <QuickActionCard title="View All Projects" description="See your complete project history" onClick={() => setActiveTab('projects')} icon={FileText} />
              </div>

              {/* Projects */}
              <section>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-off-white">Your Projects</h2>
                  {projects.length > 0 && (
                    <button onClick={() => setActiveTab('projects')} className="text-sm text-kiiro-yellow hover:underline">View all</button>
                  )}
                </div>
                {projects.length === 0 ? (
                  <EmptyState 
                    icon={FileText} 
                    title="No active projects yet" 
                    action={{ label: 'Get started', href: '/hosting' }}
                  />
                ) : (
                  <div className="grid gap-4">
                    {projects.slice(0, 3).map(project => <ProjectCard key={project.id} project={project} />)}
                  </div>
                )}
              </section>
            </div>
          )}

          {/* Projects Tab */}
          {activeTab === 'projects' && (
            <section>
              <h2 className="text-lg font-semibold text-off-white mb-4">All Projects</h2>
              {projects.length === 0 ? (
                <EmptyState icon={FileText} title="No projects yet" />
              ) : (
                <div className="grid gap-4">
                  {projects.map(project => <ProjectCard key={project.id} project={project} />)}
                </div>
              )}
            </section>
          )}

          {/* Integrations */}
          {activeTab === 'integrations' && <IntegrationsView />}

          {/* AI Studio */}
          {activeTab === 'ai_studio' && <AiStudioView />}

          {/* Coming Soon Tabs */}
          {['schedule', 'messages', 'settings', 'documents', 'invoices', 'brand_assets', 'support'].includes(activeTab) && (
            <EmptyState 
              icon={Settings} 
              title={`${activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} coming soon`} 
              description="We're working on this feature"
            />
          )}
        </div>
      </main>
    </div>
  )
}

function StatCard({ icon: Icon, label, value, color }: { icon: React.ComponentType<{ className?: string }>, label: string, value: string, color: 'yellow' | 'green' | 'blue' }) {
  const colors = { yellow: 'bg-kiiro-yellow/10 text-kiiro-yellow', green: 'bg-green-500/10 text-green-400', blue: 'bg-blue-500/10 text-blue-400' }
  return (
    <div className="bg-charcoal-gray/30 rounded-xl border border-off-white/10 p-5">
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${colors[color]}`}>
          <Icon className="w-5 h-5" />
        </div>
        <div>
          <div className="text-2xl font-bold text-off-white">{value}</div>
          <div className="text-xs text-off-white/60">{label}</div>
        </div>
      </div>
    </div>
  )
}

function QuickActionCard({ title, description, href, onClick, icon: Icon }: { title: string; description: string; href?: string; onClick?: () => void; icon: React.ComponentType<{ className?: string }> }) {
  const content = (
    <div className="bg-charcoal-gray/30 rounded-xl border border-off-white/10 p-5 hover:border-kiiro-yellow/30 transition-colors cursor-pointer group">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-lg bg-kiiro-yellow/10 flex items-center justify-center text-kiiro-yellow group-hover:bg-kiiro-yellow/20">
          <Icon className="w-5 h-5" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-off-white group-hover:text-kiiro-yellow">{title}</h3>
          <p className="text-sm text-off-white/60 mt-1">{description}</p>
        </div>
        <ArrowRight className="w-5 h-5 text-off-white/40 group-hover:text-kiiro-yellow group-hover:translate-x-1 transition-all" />
      </div>
    </div>
  )
  return href ? <Link href={href}>{content}</Link> : <div onClick={onClick}>{content}</div>
}

function ProjectCard({ project }: { project: Project }) {
  const statusColors: Record<string, string> = {
    active: 'bg-green-500/20 text-green-400 border-green-500/30',
    completed: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    review: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    planning: 'bg-off-white/10 text-off-white/60 border-off-white/20',
  }
  const status = project.status in statusColors ? project.status : 'planning'

  return (
    <div className="bg-charcoal-gray/30 rounded-xl border border-off-white/10 p-5 hover:border-kiiro-yellow/20 transition-colors">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="font-semibold text-off-white">{project.name}</h3>
          {project.description && <p className="text-sm text-off-white/60 mt-1 line-clamp-2">{project.description}</p>}
        </div>
        <span className={`text-xs px-2.5 py-1 rounded-full border ${statusColors[status]}`}>{status}</span>
      </div>
      <div className="mb-4">
        <div className="flex items-center justify-between text-sm mb-2">
          <span className="text-off-white/60">Progress</span>
          <span className="text-off-white font-medium">{project.progress}%</span>
        </div>
        <div className="h-2 bg-off-white/10 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-kiiro-yellow to-kiiro-yellow/70 rounded-full" style={{ width: `${project.progress}%` }} />
        </div>
      </div>
      {project.endDate && (
        <div className="flex items-center gap-2 text-xs text-off-white/60">
          <Clock className="w-3.5 h-3.5" />
          <span>Target: {new Date(project.endDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
        </div>
      )}
    </div>
  )
}

function EmptyState({ icon: Icon, title, description, action }: { icon: React.ComponentType<{ className?: string }>; title: string; description?: string; action?: { label: string; href: string } }) {
  return (
    <div className="bg-charcoal-gray/30 rounded-xl border border-off-white/10 p-12 text-center">
      <div className="w-16 h-16 rounded-full bg-off-white/5 flex items-center justify-center mx-auto mb-4">
        <Icon className="w-8 h-8 text-off-white/40" />
      </div>
      <h3 className="text-lg font-semibold text-off-white mb-2">{title}</h3>
      {description && <p className="text-off-white/60 mb-4">{description}</p>}
      {action && (
        <Link href={action.href} className="inline-flex items-center gap-2 px-4 py-2 bg-kiiro-yellow text-charcoal-black rounded-lg font-medium hover:bg-kiiro-yellow/90">
          {action.label} <ArrowRight className="w-4 h-4" />
        </Link>
      )}
    </div>
  )
}
