'use client'

import { createClient } from '@/lib/supabase/client'
import { User } from '@supabase/supabase-js'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Users, FolderKanban, CreditCard, LogOut, Plus, Search, Shield, LayoutDashboard, BarChart3, Sparkles, ArrowRight, Menu, Home, Check, X, Trash2, Loader2 } from 'lucide-react'
import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Checkbox } from "@/components/ui/checkbox"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { updateClientAccess, approveClient, rejectClient, deleteClient } from '@/app/actions/admin'

interface Client {
  id: string
  name: string
  email: string
  createdAt: Date
  allowedTools: string[]
  status: string
}

interface Project {
  id: string
  name: string
  status: string
  progress: number
  client: { name: string } | null
}

interface Subscription {
  id: string
  plan: string
  status: string
  currentPeriodEnd: Date | null
  client: { name: string; email: string } | null
}

const SIDEBAR_ITEMS = [
  { id: 'overview', label: 'Overview', icon: LayoutDashboard },
  { id: 'clients', label: 'Clients', icon: Users },
  { id: 'projects', label: 'Projects', icon: FolderKanban },
  { id: 'subscriptions', label: 'Subscriptions', icon: CreditCard },
]

export function AdminContent({ 
  user, 
  clients, 
  projects, 
  subscriptions 
}: { 
  user: User
  clients: Client[]
  projects: Project[]
  subscriptions: Subscription[]
}) {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState<'overview' | 'clients' | 'projects' | 'subscriptions'>('overview')
  const [searchQuery, setSearchQuery] = useState('')
  const [sidebarOpen, setSidebarOpen] = useState(true)

  async function handleLogout() {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push('/')
    router.refresh()
  }

  const stats = {
    totalClients: clients.length,
    activeProjects: projects.filter(p => p.status === 'active').length,
    mrr: subscriptions
      .filter(s => s.status === 'active')
      .reduce((acc, s) => {
        const prices: Record<string, number> = { starter: 29, pro: 49, premium: 99 }
        return acc + (prices[s.plan] || 0)
      }, 0),
    activeSubscriptions: subscriptions.filter(s => s.status === 'active').length,
  }

  const filteredClients = clients.filter(c => 
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.email.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-charcoal-black flex">
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? 'w-64' : 'w-20'} fixed left-0 top-0 h-screen bg-charcoal-gray/50 border-r border-off-white/10 flex flex-col transition-all duration-300 z-40 hidden md:flex`}>
        {/* Logo */}
        <div className="p-4 border-b border-off-white/10">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center flex-shrink-0">
              <Shield className="w-5 h-5 text-purple-400" />
            </div>
            {sidebarOpen && (
              <div>
                <span className="font-bold text-off-white">Admin</span>
                <p className="text-xs text-off-white/60">Kiiro Dashboard</p>
              </div>
            )}
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
          {SIDEBAR_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id as typeof activeTab)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all ${
                activeTab === item.id 
                  ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20' 
                  : 'text-off-white/70 hover:bg-off-white/5 hover:text-off-white'
              }`}
            >
              <item.icon className="w-5 h-5 flex-shrink-0" />
              {sidebarOpen && <span>{item.label}</span>}
            </button>
          ))}
        </nav>

        {/* User */}
        <div className="p-4 border-t border-off-white/10">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
              <span className="text-purple-400 text-sm font-semibold">{user.email?.charAt(0).toUpperCase()}</span>
            </div>
            {sidebarOpen && (
              <div className="flex-1 min-w-0">
                <p className="text-sm text-off-white font-medium truncate">Admin</p>
                <p className="text-xs text-off-white/60 truncate">{user.email}</p>
              </div>
            )}
          </div>
          {sidebarOpen && (
            <div className="mt-3 flex gap-2">
              <Link 
                href="/" 
                className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-sm text-off-white/60 hover:text-off-white hover:bg-off-white/5 rounded-lg transition-colors"
              >
                <Sparkles className="w-4 h-4" />
                Site
              </Link>
              <button 
                onClick={handleLogout}
                className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-sm text-off-white/60 hover:text-off-white hover:bg-off-white/5 rounded-lg transition-colors"
              >
                <LogOut className="w-4 h-4" />
                Out
              </button>
            </div>
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
          <SheetContent side="left" className="bg-charcoal-gray border-off-white/10 p-0 w-72 [&>button]:hidden">
            <div className="h-full flex flex-col bg-charcoal-gray/95 backdrop-blur-xl">
              <div className="p-4 border-b border-off-white/10">
                <Link href="/" className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <span className="font-bold text-off-white">Admin</span>
                    <p className="text-xs text-off-white/60">Kiiro Dashboard</p>
                  </div>
                </Link>
              </div>
              <div className="p-3 space-y-1 flex-1">
                {SIDEBAR_ITEMS.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id as typeof activeTab)}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm ${
                      activeTab === item.id 
                        ? 'bg-purple-500/10 text-purple-400' 
                        : 'text-off-white/70'
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    {item.label}
                  </button>
                ))}
              </div>
              <div className="p-4 border-t border-off-white/10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-full bg-purple-500/20 flex items-center justify-center">
                    <span className="text-purple-400 text-sm font-semibold">{user.email?.charAt(0).toUpperCase()}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-off-white font-medium truncate">Admin</p>
                    <p className="text-xs text-off-white/60 truncate">{user.email}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Link href="/" className="flex-1">
                    <Button variant="outline" size="sm" className="w-full border-off-white/20 text-off-white">
                      <Home className="w-4 h-4 mr-1" /> Site
                    </Button>
                  </Link>
                  <Button variant="outline" size="sm" onClick={handleLogout} className="border-off-white/20 text-off-white">
                    <LogOut className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
        <Link href="/" className="flex items-center gap-2">
          <Shield className="w-5 h-5 text-purple-400" />
          <span className="font-bold text-off-white">Admin</span>
        </Link>
        <div className="w-9 h-9 rounded-full bg-purple-500/20 flex items-center justify-center">
          <span className="text-purple-400 text-sm font-semibold">{user.email?.charAt(0).toUpperCase()}</span>
        </div>
      </div>

      {/* Main Content */}
      <main className={`flex-1 transition-all duration-300 ${sidebarOpen ? 'md:ml-64' : 'md:ml-20'} pt-16 md:pt-0`}>
        <div className="p-6 md:p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-off-white">
                {activeTab === 'overview' && 'Dashboard Overview'}
                {activeTab === 'clients' && 'Clients'}
                {activeTab === 'projects' && 'Projects'}
                {activeTab === 'subscriptions' && 'Subscriptions'}
              </h1>
              <p className="text-off-white/60 mt-1">
                {activeTab === 'overview' && 'Monitor your business at a glance'}
                {activeTab === 'clients' && `${clients.length} total clients`}
                {activeTab === 'projects' && `${projects.length} total projects`}
                {activeTab === 'subscriptions' && `${subscriptions.length} total subscriptions`}
              </p>
            </div>
          </div>

          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <StatCard icon={Users} label="Total Clients" value={stats.totalClients.toString()} color="blue" />
                <StatCard icon={FolderKanban} label="Active Projects" value={stats.activeProjects.toString()} color="yellow" />
                <StatCard icon={CreditCard} label="MRR" value={`$${stats.mrr}`} color="green" />
                <StatCard icon={BarChart3} label="Active Subscriptions" value={stats.activeSubscriptions.toString()} color="purple" />
              </div>

              {/* Recent Activity */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-charcoal-gray/30 rounded-xl border border-off-white/10 p-6">
                  <h3 className="font-semibold text-off-white mb-4">Recent Clients</h3>
                  <div className="space-y-3">
                    {clients.slice(0, 5).map(client => (
                      <div key={client.id} className="flex items-center justify-between py-2 border-b border-off-white/5 last:border-0">
                        <div>
                          <p className="text-sm text-off-white font-medium">{client.name}</p>
                          <p className="text-xs text-off-white/60">{client.email}</p>
                        </div>
                        <span className="text-xs text-off-white/40">
                          {new Date(client.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-charcoal-gray/30 rounded-xl border border-off-white/10 p-6">
                  <h3 className="font-semibold text-off-white mb-4">Recent Projects</h3>
                  <div className="space-y-3">
                    {projects.slice(0, 5).map(project => (
                      <div key={project.id} className="flex items-center justify-between py-2 border-b border-off-white/5 last:border-0">
                        <div>
                          <p className="text-sm text-off-white font-medium">{project.name}</p>
                          <p className="text-xs text-off-white/60">{project.client?.name}</p>
                        </div>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          project.status === 'active' ? 'bg-green-500/20 text-green-400' :
                          project.status === 'completed' ? 'bg-blue-500/20 text-blue-400' :
                          'bg-off-white/10 text-off-white/60'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Clients Tab */}
          {activeTab === 'clients' && (
            <div className="space-y-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-off-white/40" />
                <input
                  type="text"
                  placeholder="Search clients..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-charcoal-gray/30 border border-off-white/10 rounded-xl text-off-white placeholder:text-off-white/40 focus:outline-none focus:border-purple-500/50"
                />
              </div>

              {/* Clients Table */}
              <div className="bg-charcoal-gray/30 rounded-xl border border-off-white/10 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-off-white/10">
                        <th className="text-left p-4 text-sm font-medium text-off-white/60">Client</th>
                        <th className="text-left p-4 text-sm font-medium text-off-white/60">Email</th>
                        <th className="text-left p-4 text-sm font-medium text-off-white/60">Status</th>
                        <th className="text-left p-4 text-sm font-medium text-off-white/60">Access</th>
                        <th className="text-left p-4 text-sm font-medium text-off-white/60">Joined</th>
                        <th className="text-left p-4 text-sm font-medium text-off-white/60">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredClients.map(client => (
                        <tr key={client.id} className="border-b border-off-white/5 hover:bg-off-white/5">
                          <td className="p-4">
                            <p className="text-off-white font-medium">{client.name}</p>
                          </td>
                          <td className="p-4 text-off-white/60 text-sm">{client.email}</td>
                          <td className="p-4">
                            <span className={`text-xs px-2 py-1 rounded-full ${
                              client.status === 'approved' ? 'bg-green-500/20 text-green-400' :
                              client.status === 'rejected' ? 'bg-red-500/20 text-red-400' :
                              'bg-yellow-500/20 text-yellow-400'
                            }`}>
                              {client.status || 'pending'}
                            </span>
                          </td>
                          <td className="p-4">
                            <ManageAccessDialog client={client} />
                          </td>
                          <td className="p-4 text-off-white/60 text-sm">
                            {new Date(client.createdAt).toLocaleDateString()}
                          </td>
                          <td className="p-4">
                            <ClientActions client={client} />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Projects Tab */}
          {activeTab === 'projects' && (
            <div className="space-y-4">
              <div className="bg-charcoal-gray/30 rounded-xl border border-off-white/10 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-off-white/10">
                        <th className="text-left p-4 text-sm font-medium text-off-white/60">Project</th>
                        <th className="text-left p-4 text-sm font-medium text-off-white/60">Client</th>
                        <th className="text-left p-4 text-sm font-medium text-off-white/60">Status</th>
                        <th className="text-left p-4 text-sm font-medium text-off-white/60">Progress</th>
                      </tr>
                    </thead>
                    <tbody>
                      {projects.map(project => (
                        <tr key={project.id} className="border-b border-off-white/5 hover:bg-off-white/5">
                          <td className="p-4">
                            <p className="text-off-white font-medium">{project.name}</p>
                          </td>
                          <td className="p-4 text-off-white/60 text-sm">{project.client?.name}</td>
                          <td className="p-4">
                            <span className={`text-xs px-2 py-1 rounded-full ${
                              project.status === 'active' ? 'bg-green-500/20 text-green-400' :
                              project.status === 'completed' ? 'bg-blue-500/20 text-blue-400' :
                              'bg-off-white/10 text-off-white/60'
                            }`}>
                              {project.status}
                            </span>
                          </td>
                          <td className="p-4">
                            <div className="flex items-center gap-2">
                              <div className="w-24 h-2 bg-off-white/10 rounded-full overflow-hidden">
                                <div className="h-full bg-purple-500 rounded-full" style={{ width: `${project.progress}%` }} />
                              </div>
                              <span className="text-xs text-off-white/60">{project.progress}%</span>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Subscriptions Tab */}
          {activeTab === 'subscriptions' && (
            <div className="space-y-4">
              <div className="bg-charcoal-gray/30 rounded-xl border border-off-white/10 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-off-white/10">
                        <th className="text-left p-4 text-sm font-medium text-off-white/60">Client</th>
                        <th className="text-left p-4 text-sm font-medium text-off-white/60">Plan</th>
                        <th className="text-left p-4 text-sm font-medium text-off-white/60">Status</th>
                        <th className="text-left p-4 text-sm font-medium text-off-white/60">Renewal</th>
                      </tr>
                    </thead>
                    <tbody>
                      {subscriptions.map(sub => (
                        <tr key={sub.id} className="border-b border-off-white/5 hover:bg-off-white/5">
                          <td className="p-4">
                            <p className="text-off-white font-medium">{sub.client?.name}</p>
                            <p className="text-xs text-off-white/60">{sub.client?.email}</p>
                          </td>
                          <td className="p-4">
                            <span className="text-off-white capitalize">{sub.plan} Care</span>
                          </td>
                          <td className="p-4">
                            <span className={`text-xs px-2 py-1 rounded-full ${
                              sub.status === 'active' ? 'bg-green-500/20 text-green-400' :
                              sub.status === 'canceled' ? 'bg-red-500/20 text-red-400' :
                              'bg-off-white/10 text-off-white/60'
                            }`}>
                              {sub.status}
                            </span>
                          </td>
                          <td className="p-4 text-off-white/60 text-sm">
                            {sub.currentPeriodEnd ? new Date(sub.currentPeriodEnd).toLocaleDateString() : '-'}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

function StatCard({ icon: Icon, label, value, color }: { icon: React.ComponentType<{ className?: string }>, label: string, value: string, color: 'yellow' | 'green' | 'blue' | 'purple' }) {
  const colors: Record<string, string> = { 
    yellow: 'bg-kiiro-yellow/10 text-kiiro-yellow', 
    green: 'bg-green-500/10 text-green-400', 
    blue: 'bg-blue-500/10 text-blue-400',
    purple: 'bg-purple-500/10 text-purple-400'
  }
  
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

const AVAILABLE_TOOLS = [
  { id: 'projects', label: 'Projects' },
  { id: 'blog', label: 'Blog Publishing' },
  { id: 'analytics', label: 'Analytics' },
  { id: 'integrations', label: 'Integrations' },
  { id: 'hosting', label: 'Hosting Management' },
]

function ManageAccessDialog({ client }: { client: Client }) {
  const [open, setOpen] = useState(false)
  const [selectedTools, setSelectedTools] = useState<string[]>(client.allowedTools || [])
  const [saving, setSaving] = useState(false)

  const handleToggle = async (toolId: string) => {
    setSaving(true)
    try {
      const newTools = selectedTools.includes(toolId)
        ? selectedTools.filter(t => t !== toolId)
        : [...selectedTools, toolId]
      
      setSelectedTools(newTools)
      await updateClientAccess(client.id, newTools)
    } catch (error) {
      console.error('Failed to update access:', error)
      setSelectedTools(client.allowedTools || [])
    } finally {
      setSaving(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="text-sm text-purple-400 hover:text-purple-300 flex items-center gap-1">
          <Shield className="w-4 h-4" />
          {selectedTools.length > 0 ? `${selectedTools.length} tools` : 'Manage'}
        </button>
      </DialogTrigger>
      <DialogContent className="bg-charcoal-gray border-off-white/20 text-off-white">
        <DialogHeader>
          <DialogTitle>Manage Access - {client.name}</DialogTitle>
        </DialogHeader>
        <div className="space-y-3 py-4">
          {AVAILABLE_TOOLS.map(tool => (
            <label key={tool.id} className="flex items-center gap-3 cursor-pointer">
              <Checkbox
                checked={selectedTools.includes(tool.id)}
                onCheckedChange={() => handleToggle(tool.id)}
                disabled={saving}
              />
              <span>{tool.label}</span>
            </label>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}

function ClientActions({ client }: { client: Client }) {
  const [loading, setLoading] = useState<string | null>(null)

  const handleApprove = async () => {
    setLoading('approve')
    try {
      await approveClient(client.id)
      window.location.reload()
    } catch (error) {
      console.error('Failed to approve client:', error)
      alert('Failed to approve client')
    } finally {
      setLoading(null)
    }
  }

  const handleReject = async () => {
    if (!confirm('Are you sure you want to reject this client?')) return
    setLoading('reject')
    try {
      await rejectClient(client.id)
      window.location.reload()
    } catch (error) {
      console.error('Failed to reject client:', error)
      alert('Failed to reject client')
    } finally {
      setLoading(null)
    }
  }

  const handleDelete = async () => {
    if (!confirm('Are you sure you want to delete this client? This cannot be undone.')) return
    setLoading('delete')
    try {
      await deleteClient(client.id)
      window.location.reload()
    } catch (error) {
      console.error('Failed to delete client:', error)
      alert('Failed to delete client')
    } finally {
      setLoading(null)
    }
  }

  const isPending = !client.status || client.status === 'pending'

  return (
    <div className="flex items-center gap-1">
      {isPending && (
        <>
          <Button
            size="sm"
            variant="ghost"
            onClick={handleApprove}
            disabled={!!loading}
            className="text-green-400 hover:text-green-300 hover:bg-green-400/10 h-8 px-2"
          >
            {loading === 'approve' ? <Loader2 className="w-4 h-4 animate-spin" /> : <Check className="w-4 h-4" />}
          </Button>
          <Button
            size="sm"
            variant="ghost"
            onClick={handleReject}
            disabled={!!loading}
            className="text-yellow-400 hover:text-yellow-300 hover:bg-yellow-400/10 h-8 px-2"
          >
            {loading === 'reject' ? <Loader2 className="w-4 h-4 animate-spin" /> : <X className="w-4 h-4" />}
          </Button>
        </>
      )}
      <Button
        size="sm"
        variant="ghost"
        onClick={handleDelete}
        disabled={!!loading}
        className="text-red-400 hover:text-red-300 hover:bg-red-400/10 h-8 px-2"
      >
        {loading === 'delete' ? <Loader2 className="w-4 h-4 animate-spin" /> : <Trash2 className="w-4 h-4" />}
      </Button>
    </div>
  )
}
