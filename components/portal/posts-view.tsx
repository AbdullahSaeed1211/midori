'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Loader2, Plus, FileText, Edit, Trash2, ExternalLink, Send, Check, Linkedin, Instagram, Facebook } from 'lucide-react'
import { savePost, getPosts, updatePost, deletePost, publishToMedium, publishToLinkedIn, publishToInstagram, publishToFacebook } from '@/app/actions/publishing'
import { getConfiguredProviders } from '@/app/actions/integrations'

interface Post {
  id: string
  title: string
  content: string
  slug: string | null
  status: string
  mediumUrl: string | null
  linkedinUrl: string | null
  instagramUrl: string | null
  facebookUrl: string | null
  createdAt: Date
}

export function PostsView() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [deleteLoading, setDeleteLoading] = useState<string | null>(null)
  const [publishing, setPublishing] = useState<string | null>(null)
  const [integrations, setIntegrations] = useState<string[]>([])
  const [open, setOpen] = useState(false)
  const [editPost, setEditPost] = useState<Post | null>(null)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [status, setStatus] = useState<'draft' | 'published'>('draft')

  useEffect(() => {
    loadPosts()
    loadIntegrations()
  }, [])

  const loadPosts = async () => {
    const data = await getPosts()
    setPosts(data)
    setLoading(false)
  }

  const loadIntegrations = async () => {
    const data = await getConfiguredProviders()
    setIntegrations(data)
  }

  const handleSave = async () => {
    setSaving(true)
    try {
      if (editPost) {
        await updatePost(editPost.id, title, content, status)
      } else {
        await savePost(title, content, status)
      }
      setOpen(false)
      setEditPost(null)
      setTitle('')
      setContent('')
      setStatus('draft')
      loadPosts()
    } catch (error) {
      console.error('Error saving post:', error)
    } finally {
      setSaving(false)
    }
  }

  const handleEdit = (post: Post) => {
    setEditPost(post)
    setTitle(post.title)
    setContent(post.content)
    setStatus(post.status as 'draft' | 'published')
    setOpen(true)
  }

  const handleDelete = async (postId: string) => {
    if (!confirm('Are you sure you want to delete this post?')) return
    setDeleteLoading(postId)
    try {
      await deletePost(postId)
      loadPosts()
    } catch (error) {
      console.error('Error deleting post:', error)
    } finally {
      setDeleteLoading(null)
    }
  }

  const handlePublish = async (postId: string, platform: 'medium' | 'linkedin' | 'instagram' | 'facebook') => {
    setPublishing(`${postId}-${platform}`)
    try {
      let url = ''
      switch (platform) {
        case 'medium':
          url = await publishToMedium(postId)
          break
        case 'linkedin':
          url = await publishToLinkedIn(postId)
          break
        case 'instagram':
          url = await publishToInstagram(postId)
          break
        case 'facebook':
          url = await publishToFacebook(postId)
          break
      }
      alert(`Published successfully! URL: ${url}`)
      loadPosts()
    } catch (error: any) {
      alert(error.message || 'Error publishing')
    } finally {
      setPublishing(null)
    }
  }

  const openNewDialog = () => {
    setEditPost(null)
    setTitle('')
    setContent('')
    setStatus('draft')
    setOpen(true)
  }

  if (loading) {
    return <div className="p-8 flex justify-center"><Loader2 className="h-8 w-8 animate-spin text-kiiro-yellow" /></div>
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-off-white">Blog Posts</h2>
          <p className="text-off-white/60">Create and manage your blog content</p>
        </div>
        <Button onClick={openNewDialog} className="bg-kiiro-yellow text-charcoal-black hover:bg-kiiro-yellow/90">
          <Plus className="w-4 h-4 mr-2" />
          New Post
        </Button>
      </div>

      {posts.length === 0 ? (
        <div className="bg-charcoal-gray/30 rounded-xl border border-off-white/10 p-12 text-center">
          <FileText className="w-12 h-12 text-off-white/40 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-off-white mb-2">No posts yet</h3>
          <p className="text-off-white/60 mb-4">Create your first blog post to get started</p>
          <Button onClick={openNewDialog} className="bg-kiiro-yellow text-charcoal-black hover:bg-kiiro-yellow/90">
            Create Post
          </Button>
        </div>
      ) : (
        <div className="grid gap-4">
          {posts.map(post => (
            <Card key={post.id} className="bg-charcoal-gray/30 border-off-white/10">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-off-white text-lg">{post.title}</CardTitle>
                    <CardDescription className="text-off-white/60">
                      {post.status === 'published' ? (
                        <span className="text-green-400">Published</span>
                      ) : (
                        <span className="text-yellow-400">Draft</span>
                      )}
                      {' • '}
                      {new Date(post.createdAt).toLocaleDateString()}
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" onClick={() => handleEdit(post)} className="text-off-white/60 hover:text-off-white">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      onClick={() => handleDelete(post.id)} 
                      disabled={deleteLoading === post.id}
                      className="text-off-white/60 hover:text-red-400"
                    >
                      {deleteLoading === post.id ? <Loader2 className="w-4 h-4 animate-spin" /> : <Trash2 className="w-4 h-4" />}
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-off-white/70 text-sm line-clamp-2 mb-4">{post.content.substring(0, 200)}...</p>
                
                {/* Social Publishing Buttons */}
                <div className="flex flex-wrap gap-2">
                  {integrations.includes('medium') && (
                    <Button
                      size="sm"
                      variant="outline"
                      disabled={!!publishing || !!post.mediumUrl}
                      onClick={() => handlePublish(post.id, 'medium')}
                      className="border-off-white/20 text-off-white hover:bg-off-white/10"
                    >
                      {publishing ? (
                        <Loader2 className="w-4 h-4 mr-1 animate-spin" />
                      ) : post.mediumUrl ? (
                        <Check className="w-4 h-4 mr-1 text-green-400" />
                      ) : (
                        <Send className="w-4 h-4 mr-1" />
                      )}
                      Medium
                    </Button>
                  )}
                  {integrations.includes('linkedin') && (
                    <Button
                      size="sm"
                      variant="outline"
                      disabled={!!publishing || !!post.linkedinUrl}
                      onClick={() => handlePublish(post.id, 'linkedin')}
                      className="border-off-white/20 text-off-white hover:bg-off-white/10"
                    >
                      {publishing ? (
                        <Loader2 className="w-4 h-4 mr-1 animate-spin" />
                      ) : post.linkedinUrl ? (
                        <Check className="w-4 h-4 mr-1 text-green-400" />
                      ) : (
                        <Linkedin className="w-4 h-4 mr-1" />
                      )}
                      LinkedIn
                    </Button>
                  )}
                  {integrations.includes('instagram') && (
                    <Button
                      size="sm"
                      variant="outline"
                      disabled={!!publishing || !!post.instagramUrl}
                      onClick={() => handlePublish(post.id, 'instagram')}
                      className="border-off-white/20 text-off-white hover:bg-off-white/10"
                    >
                      {publishing ? (
                        <Loader2 className="w-4 h-4 mr-1 animate-spin" />
                      ) : post.instagramUrl ? (
                        <Check className="w-4 h-4 mr-1 text-green-400" />
                      ) : (
                        <Instagram className="w-4 h-4 mr-1" />
                      )}
                      Instagram
                    </Button>
                  )}
                  {integrations.includes('facebook') && (
                    <Button
                      size="sm"
                      variant="outline"
                      disabled={!!publishing || !!post.facebookUrl}
                      onClick={() => handlePublish(post.id, 'facebook')}
                      className="border-off-white/20 text-off-white hover:bg-off-white/10"
                    >
                      {publishing ? (
                        <Loader2 className="w-4 h-4 mr-1 animate-spin" />
                      ) : post.facebookUrl ? (
                        <Check className="w-4 h-4 mr-1 text-green-400" />
                      ) : (
                        <Facebook className="w-4 h-4 mr-1" />
                      )}
                      Facebook
                    </Button>
                  )}
                </div>

                {/* Published URLs */}
                {(post.mediumUrl || post.linkedinUrl || post.instagramUrl || post.facebookUrl) && (
                  <div className="mt-3 pt-3 border-t border-off-white/10">
                    <p className="text-xs text-off-white/40 mb-2">Published to:</p>
                    <div className="flex flex-wrap gap-2">
                      {post.mediumUrl && (
                        <a href={post.mediumUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-kiiro-yellow hover:underline flex items-center gap-1">
                          Medium <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                      {post.linkedinUrl && (
                        <a href={post.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-kiiro-yellow hover:underline flex items-center gap-1">
                          LinkedIn <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                      {post.instagramUrl && (
                        <a href={post.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-kiiro-yellow hover:underline flex items-center gap-1">
                          Instagram <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                      {post.facebookUrl && (
                        <a href={post.facebookUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-kiiro-yellow hover:underline flex items-center gap-1">
                          Facebook <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Create/Edit Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-charcoal-gray border-off-white/20 text-off-white max-w-2xl">
          <DialogHeader>
            <DialogTitle>{editPost ? 'Edit Post' : 'Create New Post'}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter post title..."
                className="bg-charcoal-black/50 border-off-white/20 text-off-white"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="content">Content</Label>
              <Textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Write your post content here..."
                className="min-h-[200px] bg-charcoal-black/50 border-off-white/20 text-off-white"
              />
            </div>
            <div className="space-y-2">
              <Label>Status</Label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="status"
                    checked={status === 'draft'}
                    onChange={() => setStatus('draft')}
                    className="accent-kiiro-yellow"
                  />
                  <span className="text-off-white">Draft</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="status"
                    checked={status === 'published'}
                    onChange={() => setStatus('published')}
                    className="accent-kiiro-yellow"
                  />
                  <span className="text-off-white">Published</span>
                </label>
              </div>
            </div>
            <div className="flex justify-end gap-2 pt-4">
              <Button variant="outline" onClick={() => setOpen(false)} className="border-off-white/20 text-off-white hover:bg-off-white/10">
                Cancel
              </Button>
              <Button onClick={handleSave} disabled={saving || !title || !content} className="bg-kiiro-yellow text-charcoal-black hover:bg-kiiro-yellow/90">
                {saving ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : null}
                {editPost ? 'Update' : 'Create'} Post
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
