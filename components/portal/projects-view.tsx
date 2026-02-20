'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Loader2, Plus, Edit, Trash2, Calendar, FolderKanban } from 'lucide-react'
import { createProject, updateProject, deleteProject } from '@/app/actions/admin'

interface Project {
  id: string
  name: string
  description: string | null
  status: string
  progress: number
  endDate: Date | null
  createdAt: Date
}

interface ProjectsViewProps {
  initialProjects?: Project[]
  isAdmin?: boolean
}

export function ProjectsView({ initialProjects = [], isAdmin = false }: ProjectsViewProps) {
  const [projects, setProjects] = useState<Project[]>(initialProjects)
  const [loading, setLoading] = useState(!initialProjects.length)
  const [saving, setSaving] = useState(false)
  const [deleteLoading, setDeleteLoading] = useState<string | null>(null)
  const [open, setOpen] = useState(false)
  const [editProject, setEditProject] = useState<Project | null>(null)
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [status, setStatus] = useState('planning')
  const [progress, setProgress] = useState(0)

  const loadProjects = async () => {
    setLoading(false)
  }

  const handleSave = async () => {
    if (!name) return
    setSaving(true)
    try {
      if (editProject) {
        await updateProject(editProject.id, { name, description, status, progress })
      } else {
        await createProject(name, description)
      }
      setOpen(false)
      resetForm()
      window.location.reload()
    } catch (error) {
      console.error('Error saving project:', error)
      alert(error instanceof Error ? error.message : 'Failed to save project')
    } finally {
      setSaving(false)
    }
  }

  const handleEdit = (project: Project) => {
    setEditProject(project)
    setName(project.name)
    setDescription(project.description || '')
    setStatus(project.status)
    setProgress(project.progress)
    setOpen(true)
  }

  const handleDelete = async (projectId: string) => {
    if (!confirm('Are you sure you want to delete this project?')) return
    setDeleteLoading(projectId)
    try {
      await deleteProject(projectId)
      setProjects(projects.filter(p => p.id !== projectId))
    } catch (error) {
      console.error('Error deleting project:', error)
      alert(error instanceof Error ? error.message : 'Failed to delete project')
    } finally {
      setDeleteLoading(null)
    }
  }

  const resetForm = () => {
    setEditProject(null)
    setName('')
    setDescription('')
    setStatus('planning')
    setProgress(0)
  }

  const openNewDialog = () => {
    resetForm()
    setOpen(true)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500/20 text-green-400 border-green-500/30'
      case 'completed': return 'bg-blue-500/20 text-blue-400 border-blue-500/30'
      case 'review': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
      default: return 'bg-off-white/10 text-off-white/60 border-off-white/20'
    }
  }

  if (loading) {
    return <div className="p-8 flex justify-center"><Loader2 className="h-8 w-8 animate-spin text-kiiro-yellow" /></div>
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-off-white">Projects</h2>
          <p className="text-off-white/60">Manage your projects</p>
        </div>
        <Button onClick={openNewDialog} className="bg-kiiro-yellow text-charcoal-black hover:bg-kiiro-yellow/90">
          <Plus className="w-4 h-4 mr-2" />
          New Project
        </Button>
      </div>

      {projects.length === 0 ? (
        <div className="bg-charcoal-gray/30 rounded-xl border border-off-white/10 p-12 text-center">
          <FolderKanban className="w-12 h-12 text-off-white/40 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-off-white mb-2">No projects yet</h3>
          <p className="text-off-white/60 mb-4">Create your first project to get started</p>
          <Button onClick={openNewDialog} className="bg-kiiro-yellow text-charcoal-black hover:bg-kiiro-yellow/90">
            Create Project
          </Button>
        </div>
      ) : (
        <div className="grid gap-4">
          {projects.map(project => (
            <Card key={project.id} className="bg-charcoal-gray/30 border-off-white/10">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-off-white text-lg">{project.name}</CardTitle>
                    <CardDescription className="text-off-white/60">
                      {project.description || 'No description'}
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" onClick={() => handleEdit(project)} className="text-off-white/60 hover:text-off-white">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      onClick={() => handleDelete(project.id)} 
                      disabled={deleteLoading === project.id}
                      className="text-off-white/60 hover:text-red-400"
                    >
                      {deleteLoading === project.id ? <Loader2 className="w-4 h-4 animate-spin" /> : <Trash2 className="w-4 h-4" />}
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4">
                  <span className={`text-xs px-2.5 py-1 rounded-full border ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span className="text-off-white/60">Progress</span>
                      <span className="text-off-white font-medium">{project.progress}%</span>
                    </div>
                    <div className="h-2 bg-off-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-kiiro-yellow rounded-full" style={{ width: `${project.progress}%` }} />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-charcoal-gray border-off-white/20 text-off-white">
          <DialogHeader>
            <DialogTitle>{editProject ? 'Edit Project' : 'Create New Project'}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="name">Project Name</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="My Awesome Project"
                className="bg-charcoal-black/50 border-off-white/20 text-off-white"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Project description..."
                className="bg-charcoal-black/50 border-off-white/20 text-off-white min-h-[100px]"
              />
            </div>
            {editProject && (
              <>
                <div className="space-y-2">
                  <Label>Status</Label>
                  <div className="flex gap-4">
                    {['planning', 'active', 'review', 'completed'].map(s => (
                      <label key={s} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="status"
                          checked={status === s}
                          onChange={() => setStatus(s)}
                          className="accent-kiiro-yellow"
                        />
                        <span className="text-off-white capitalize">{s}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Progress: {progress}%</Label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={progress}
                    onChange={(e) => setProgress(parseInt(e.target.value))}
                    className="w-full accent-kiiro-yellow"
                  />
                </div>
              </>
            )}
            <div className="flex justify-end gap-2 pt-4">
              <Button variant="outline" onClick={() => setOpen(false)} className="border-off-white/20 text-off-white hover:bg-off-white/10">
                Cancel
              </Button>
              <Button onClick={handleSave} disabled={saving || !name} className="bg-kiiro-yellow text-charcoal-black hover:bg-kiiro-yellow/90">
                {saving ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : null}
                {editProject ? 'Update' : 'Create'} Project
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
