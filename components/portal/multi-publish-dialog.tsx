'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2, Globe, CheckCircle, AlertTriangle, CalendarClock } from "lucide-react"
import { savePost, publishToMedium, publishToLinkedIn, publishToInstagram, publishToFacebook } from '@/app/actions/publishing'
import { getConfiguredProviders } from '@/app/actions/integrations'
import { useEffect } from 'react'

interface MultiPublishDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  initialContent: string
  initialTitle: string
}

export function MultiPublishDialog({ open, onOpenChange, initialContent, initialTitle }: MultiPublishDialogProps) {
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>(['internal'])
  const [publishing, setPublishing] = useState(false)
  const [scheduledAt, setScheduledAt] = useState('')
  const [results, setResults] = useState<Record<string, string>>({}) // platform -> status/url
  const [configuredProviders, setConfiguredProviders] = useState<string[]>([])

  useEffect(() => {
    if (open) {
      // Refresh configured providers when dialog opens
      getConfiguredProviders().then(setConfiguredProviders)
    }
  }, [open])

  const platforms = [
    { id: 'internal', label: 'Internal Blog' },
    { id: 'medium', label: 'Medium' },
    { id: 'linkedin', label: 'LinkedIn' },
    { id: 'instagram', label: 'Instagram' },
    { id: 'facebook', label: 'Facebook' },
  ]

  const handlePublish = async () => {
    setPublishing(true)
    setResults({})
    
    // Check if scheduling
    const isScheduling = !!scheduledAt
    const status = isScheduling ? 'scheduled' : 'published'

    // First, always create/save the post
    let postId: string
    try {
        const post = await savePost(
            initialTitle || initialContent.substring(0, 50) + '...', 
            initialContent, 
            status,
            isScheduling ? new Date(scheduledAt) : undefined,
            selectedPlatforms
        )
        postId = post.id

        if (isScheduling) {
           setResults({ 'schedule': 'Post scheduled successfully!' })
           setPublishing(false)
           return
        }

    } catch (error) {
        console.error("Failed to save post", error)
        setResults({ 'save': 'Failed to save post initially.' })
        setPublishing(false)
        return
    }

    const newResults: Record<string, string> = {}

    // Process platforms sequentially (could be parallel for speed but safer sequentially for error handling visibility)
    for (const platform of selectedPlatforms) {
        try {
            switch (platform) {
                case 'internal':
                    // Already handled by savePost with 'published' status mostly, 
                    // but we could have specific logic here if needed.
                    newResults['internal'] = 'Published'
                    break
                case 'medium':
                    const mediumUrl = await publishToMedium(postId)
                    newResults['medium'] = `Published: ${mediumUrl}`
                    break
                case 'linkedin':
                    const lnUrl = await publishToLinkedIn(postId)
                    newResults['linkedin'] = `Published: ${lnUrl}`
                    break
                case 'instagram':
                    const igUrl = await publishToInstagram(postId)
                    newResults['instagram'] = `Published: ${igUrl}`
                    break
                case 'facebook':
                    const fbUrl = await publishToFacebook(postId)
                    newResults['facebook'] = `Published: ${fbUrl}`
                    break
            }
        } catch (error: any) {
            newResults[platform] = `Error: ${error.message}`
        }
    }

    setResults(newResults)
    setPublishing(false)
  }

  const togglePlatform = (id: string) => {
    setSelectedPlatforms(prev => 
      prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]
    )
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-charcoal-gray border-off-white/10 text-off-white sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Multi-Platform Publishing</DialogTitle>
          <DialogDescription className="text-off-white/60">
            Select where you want to publish this content.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <div className="space-y-4">
            {platforms.map(platform => {
              const isConfigured = platform.id === 'internal' || configuredProviders.includes(platform.id)
              const isSelected = selectedPlatforms.includes(platform.id)
              
              return (
              <div key={platform.id} className="flex items-start space-x-3 space-y-0">
                <Checkbox 
                  id={`publish-${platform.id}`} 
                  checked={isSelected}
                  onCheckedChange={() => togglePlatform(platform.id)}
                  disabled={!isConfigured}
                />
                <div className="grid gap-1.5 leading-none w-full">
                  <div className="flex items-center gap-2">
                    <label 
                        htmlFor={`publish-${platform.id}`}
                        className={`text-sm font-medium leading-none ${!isConfigured ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                    >
                        {platform.label}
                    </label>
                    {!isConfigured && (
                        <span className="text-[10px] bg-yellow-500/20 text-yellow-500 px-1.5 py-0.5 rounded flex items-center gap-1">
                            <AlertTriangle className="w-3 h-3" /> Not Connected
                        </span>
                    )}
                  </div>
                  
                  {results[platform.id] && (
                    <p className={`text-xs ${results[platform.id].startsWith('Error') ? 'text-red-400' : 'text-green-400'}`}>
                      {results[platform.id]}
                    </p>
                  )}
                </div>
              </div>
            )})}

            <div className="pt-4 border-t border-off-white/10">
               <Label htmlFor="schedule-time">Schedule for later (Optional)</Label>
               <div className="flex items-center gap-2 mt-2">
                 <CalendarClock className="w-4 h-4 text-off-white/60" />
                 <Input 
                   type="datetime-local" 
                   id="schedule-time" 
                   className="bg-charcoal-black/50 border-off-white/10 text-off-white"
                   value={scheduledAt}
                   onChange={(e) => setScheduledAt(e.target.value)}
                 />
               </div>
               <p className="text-xs text-off-white/40 mt-1">Leave blank to publish immediately.</p>
            </div>
          </div>
        </div>

        <DialogFooter>
          {Object.keys(results).length > 0 && !publishing ? (
             <Button onClick={() => onOpenChange(false)} variant="outline" className="border-off-white/10 text-off-white hover:bg-off-white/10">
               Close
             </Button>
          ) : (
            <Button onClick={handlePublish} disabled={publishing || selectedPlatforms.length === 0} className="bg-kiiro-yellow text-charcoal-black hover:bg-opacity-90 w-full">
                {publishing ? (
                <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    {scheduledAt ? 'Scheduling...' : 'Publishing...'}
                </>
                ) : (
                <>
                    {scheduledAt ? <CalendarClock className="w-4 h-4 mr-2" /> : <Globe className="w-4 h-4 mr-2" />}
                    {scheduledAt ? 'Schedule Post' : `Publish to ${selectedPlatforms.length} platform${selectedPlatforms.length !== 1 ? 's' : ''}`}
                </>
                )}
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
