'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea" // Assuming this exists or using Input
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Loader2, Sparkles, Copy, AlertCircle, Save, Globe, MoreVertical, FileText, Share2 } from "lucide-react"
import { generateAiContent, getConfiguredProviders } from '@/app/actions/integrations'
import { savePost, publishToMedium } from '@/app/actions/publishing'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MultiPublishDialog } from '@/components/portal/multi-publish-dialog'



export function AiStudioView() {
  const [providers, setProviders] = useState<string[]>([])
  const [selectedProvider, setSelectedProvider] = useState<string>('')
  const [prompt, setPrompt] = useState('')
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false)
  const [generating, setGenerating] = useState(false)
  const [publishing, setPublishing] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [multiPublishOpen, setMultiPublishOpen] = useState(false)

  useEffect(() => {
    setLoading(true)
    getConfiguredProviders()
      .then(p => {
        setProviders(p)
        if (p.length > 0) setSelectedProvider(p[0])
      })
      .finally(() => setLoading(false))
  }, [])

  const handleGenerate = async () => {
    if (!selectedProvider || !prompt) return
    setGenerating(true)
    setError('')
    setResult('')
    
    try {
      const content = await generateAiContent(selectedProvider, prompt)
      setResult(content)
    } catch (err: any) {
      setError(err.message || 'Failed to generate content')
    } finally {
      setGenerating(false)
    }
  }

  const handleSaveDraft = async () => {
    if (!result) return
    setPublishing(true)
    setError('')
    setSuccess('')
    try {
      await savePost(prompt.substring(0, 50) + '...', result, 'draft')
      setSuccess('Draft saved successfully!')
    } catch (err: any) {
      setError(err.message || 'Failed to save draft')
    } finally {
      setPublishing(false)
    }
  }

  const handlePublishInternal = async () => {
    if (!result) return
    setPublishing(true)
    setError('')
    setSuccess('')
    try {
      await savePost(prompt.substring(0, 50) + '...', result, 'published')
      setSuccess('Published to internal blog!')
    } catch (err: any) {
      setError(err.message || 'Failed to publish')
    } finally {
      setPublishing(false)
    }
  }

  const handlePublishMedium = async () => {
    if (!result) return
    setPublishing(true)
    setError('')
    setSuccess('')
    try {
      const post = await savePost(prompt.substring(0, 50) + '...', result, 'draft')
      const url = await publishToMedium(post.id)
      setSuccess(`Published to Medium! View at: ${url}`)
    } catch (err: any) {
      setError(err.message || 'Failed to publish to Medium')
    } finally {
      setPublishing(false)
    }
  }

  if (loading) {
    return <div className="p-8 flex justify-center"><Loader2 className="h-8 w-8 animate-spin text-kiiro-yellow" /></div>
  }

  if (providers.length === 0) {
    return (
      <div className="text-center py-12 space-y-4">
        <div className="w-16 h-16 bg-off-white/5 rounded-full flex items-center justify-center mx-auto">
          <Sparkles className="w-8 h-8 text-off-white/40" />
        </div>
        <h2 className="text-xl font-semibold text-off-white">No AI Providers Connected</h2>
        <p className="text-off-white/60 max-w-md mx-auto">
          To use the AI Studio, you need to connect at least one AI provider (like OpenAI or Gemini) in the Integrations tab.
        </p>
        <Button variant="outline" className="text-kiiro-yellow border-kiiro-yellow/20 hover:bg-kiiro-yellow/10">
          Go to Integrations
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-off-white">AI Studio</h2>
          <p className="text-off-white/60">Generate content using your connected AI models.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-1 space-y-4">
          <Card className="bg-charcoal-gray/30 border-off-white/10 p-4 space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-off-white">Provider</label>
              <select 
                className="w-full bg-charcoal-black border border-off-white/10 rounded-md p-2 text-off-white focus:outline-none focus:border-kiiro-yellow/50"
                value={selectedProvider}
                onChange={(e) => setSelectedProvider(e.target.value)}
              >
                {providers.map(p => (
                  <option key={p} value={p}>{p.charAt(0).toUpperCase() + p.slice(1)}</option>
                ))}
              </select>
            </div>
            
            <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
              <div className="flex gap-2">
                <AlertCircle className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <p className="text-xs text-blue-300">
                  Usage is billed directly by the provider to your API key.
                </p>
              </div>
            </div>
          </Card>
        </div>

        <div className="md:col-span-2 space-y-4">
          <div className="space-y-2">
             <label className="text-sm font-medium text-off-white">Prompt</label>
             <Textarea 
                placeholder="Write a blog post about..."
                className="min-h-[150px] bg-charcoal-gray/30 border-off-white/10 text-off-white resize-none focus:border-kiiro-yellow/50"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
             />
          </div>

          <div className="flex justify-end">
             <Button 
                onClick={handleGenerate} 
                disabled={generating || !prompt}
                className="bg-kiiro-yellow text-charcoal-black hover:bg-opacity-90"
             >
                {generating ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 mr-2" />
                    Generate
                  </>
                )}
             </Button>
          </div>

          {error && (
            <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm">
              {error}
            </div>
          )}

          {success && (
            <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400 text-sm">
              {success}
            </div>
          )}

          {result && (
            <div className="space-y-2 animate-in fade-in slide-in-from-bottom-2">
               <div className="flex items-center justify-between">
                 <label className="text-sm font-medium text-off-white">Result</label>
                 <div className="flex items-center gap-2">
                   <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="sm" className="h-8 border-off-white/10 text-off-white hover:bg-off-white/10 hover:text-off-white">
                          {publishing ? <Loader2 className="w-3 h-3 animate-spin mr-1" /> : <Save className="w-3 h-3 mr-1" />}
                          Publish / Save
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="bg-charcoal-gray border-off-white/10 text-off-white">
                        <DropdownMenuItem onClick={handleSaveDraft} className="cursor-pointer hover:bg-off-white/10">
                          <FileText className="w-4 h-4 mr-2" />
                          Save as Draft
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={handlePublishInternal} className="cursor-pointer hover:bg-off-white/10">
                          <Globe className="w-4 h-4 mr-2" />
                          Publish to Blog
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={handlePublishMedium} className="cursor-pointer hover:bg-off-white/10">
                          <i className="w-4 h-4 mr-2 not-italic font-serif font-bold">M</i>
                          Publish to Medium
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setMultiPublishOpen(true)} className="cursor-pointer hover:bg-off-white/10">
                          <Share2 className="w-4 h-4 mr-2" />
                          Multi-Publish
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                   </DropdownMenu>

                   <MultiPublishDialog 
                      open={multiPublishOpen} 
                      onOpenChange={setMultiPublishOpen} 
                      initialContent={result}
                      initialTitle={prompt.substring(0, 50) + '...'}
                   />

                   <Button 
                      variant="ghost" 
                      size="sm" 
                      className="h-8 text-off-white/60 hover:text-off-white"
                      onClick={() => navigator.clipboard.writeText(result)}
                   >
                      <Copy className="w-3 h-3 mr-1" />
                      Copy
                   </Button>
                 </div>
               </div>
               <div className="p-4 bg-charcoal-gray/50 rounded-lg border border-off-white/10 text-off-white whitespace-pre-wrap leading-relaxed">
                  {result}
               </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
