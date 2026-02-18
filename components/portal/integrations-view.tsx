'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Check, Key, Loader2, Plus, Shield } from "lucide-react"
import { saveIntegration, getConfiguredProviders } from '@/app/actions/integrations'
import { useRouter } from 'next/navigation'

const PROVIDERS = [
  { id: 'openai', name: 'OpenAI', description: 'Connect to GPT-4 and other OpenAI models.', link: 'https://platform.openai.com/api-keys' },
  { id: 'gemini', name: 'Google Gemini', description: 'Access Gemini 1.5 Pro and Flash models.', link: 'https://aistudio.google.com/app/apikey' },
  { id: 'minimax', name: 'Minimax', description: 'High-performance models from Minimax.', link: 'https://platform.minimaxi.com/' },
  { id: 'glm', name: 'Zhipu GLM', description: 'Leading models from Zhipu AI.', link: 'https://open.bigmodel.cn/' },
  { id: 'medium', name: 'Medium', description: 'Publish directly to your Medium publication.', link: 'https://medium.com/me/settings/security' },
  { id: 'linkedin', name: 'LinkedIn', description: 'Post updates to your LinkedIn profile or page.', link: 'https://www.linkedin.com/developers/' },
  { id: 'instagram', name: 'Instagram', description: 'Share posts to your Instagram Business account.', link: 'https://developers.facebook.com/' },
  { id: 'facebook', name: 'Facebook', description: 'Publish to your Facebook Page.', link: 'https://developers.facebook.com/' },
  { id: 'custom', name: 'Custom / OpenRouter', description: 'Connect any OpenAI-compatible API (e.g. OpenRouter, Modal).', link: 'https://openrouter.ai/keys' },
]

export function IntegrationsView() {
  const [configured, setConfigured] = useState<string[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getConfiguredProviders()
      .then(setConfigured)
      .finally(() => setLoading(false))
  }, [])

  const handleSaved = (provider: string) => {
    if (!configured.includes(provider)) {
      setConfigured([...configured, provider])
    }
  }

  if (loading) {
    return <div className="p-8 flex justify-center"><Loader2 className="h-8 w-8 animate-spin text-kiiro-yellow" /></div>
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-off-white">Integrations</h2>
          <p className="text-off-white/60">Connect your own API keys to access premium AI tools.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROVIDERS.map(provider => (
          <IntegrationCard 
            key={provider.id} 
            provider={provider} 
            isConnected={configured.includes(provider.id)}
            onSaved={() => handleSaved(provider.id)}
          />
        ))}
      </div>
    </div>
  )
}

function IntegrationCard({ provider, isConnected, onSaved }: { provider: { id: string, name: string, description: string, link: string }, isConnected: boolean, onSaved: () => void }) {
  const [open, setOpen] = useState(false)
  const [key, setKey] = useState('')
  const [config, setConfig] = useState<any>({})
  const [saving, setSaving] = useState(false)

  const handleSave = async () => {
    if (!key) return
    setSaving(true)
    try {
      await saveIntegration(provider.id, key, config)
      onSaved()
      setOpen(false)
      setKey('')
      setConfig({})
    } catch (error) {
      console.error(error)
      // Basic alert for now
      alert('Failed to save key. Please try again.')
    } finally {
      setSaving(false)
    }
  }

  return (
    <Card className="bg-charcoal-gray/30 border-off-white/10">
      <CardHeader>
        <CardTitle className="flex items-center justify-between text-off-white">
          {provider.name}
          {isConnected && <span className="bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded-full flex items-center gap-1"><Check className="w-3 h-3" /> Connected</span>}
        </CardTitle>
        <CardDescription className="text-off-white/60">{provider.description}</CardDescription>
      </CardHeader>
      <CardContent>

      </CardContent>
      <CardFooter>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" className="w-full border-off-white/10 text-off-white hover:bg-off-white/10 hover:text-off-white">
              {isConnected ? 'Update Key' : 'Connect'}
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-charcoal-gray border-off-white/10 text-off-white">
            <DialogHeader>
              <DialogTitle>Connect {provider.name}</DialogTitle>
              <DialogDescription className="text-off-white/60">
                Enter your API key below. keys are stored securely. <br />
                <a href={provider.link} target="_blank" rel="noopener noreferrer" className="text-kiiro-yellow hover:underline">
                  Get your key here &rarr;
                </a>
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="api-key">API Key</Label>
                <div className="relative">
                  <Key className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-off-white/40" />
                  <Input 
                    id="api-key" 
                    type="password" 
                    placeholder="sk-..." 
                    className="pl-10 bg-charcoal-black/50 border-off-white/10 text-off-white"
                    value={key}
                    onChange={(e) => setKey(e.target.value)}
                  />
                </div>
              </div>

              {(provider.id === 'custom') && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="base-url">Base URL</Label>
                    <Input 
                        id="base-url" 
                        placeholder="https://openrouter.ai/api/v1" 
                        className="bg-charcoal-black/50 border-off-white/10 text-off-white"
                        value={config.baseUrl || ''}
                        onChange={(e) => setConfig({...config, baseUrl: e.target.value})}
                    />
                    <p className="text-xs text-off-white/40">Enter the API endpoint (must be OpenAI compatible).</p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="model-name">Model Name</Label>
                    <Input 
                        id="model-name" 
                        placeholder="meta-llama/llama-3-70b-instruct" 
                        className="bg-charcoal-black/50 border-off-white/10 text-off-white"
                        value={config.modelName || ''}
                        onChange={(e) => setConfig({...config, modelName: e.target.value})}
                    />
                  </div>
                </>
              )}

              {provider.id === 'linkedin' && (
                  <div className="space-y-2">
                    <Label htmlFor="urn">Author URN (Person or Organization)</Label>
                    <Input 
                        id="urn" 
                        placeholder="urn:li:person:12345 or urn:li:organization:67890" 
                        className="bg-charcoal-black/50 border-off-white/10 text-off-white"
                        value={config.urn || ''}
                        onChange={(e) => setConfig({...config, urn: e.target.value})}
                    />
                    <p className="text-xs text-off-white/40">Required for API v2. Find this in your LinkedIn profile URL or API response.</p>
                  </div>
              )}

              {(provider.id === 'facebook' || provider.id === 'instagram') && (
                  <div className="space-y-2">
                    <Label htmlFor="page-id">Page / Account ID</Label>
                    <Input 
                        id="page-id" 
                        placeholder="1234567890" 
                        className="bg-charcoal-black/50 border-off-white/10 text-off-white"
                        value={config.pageId || ''}
                        onChange={(e) => setConfig({...config, pageId: e.target.value})}
                    />
                    <p className="text-xs text-off-white/40">The ID of the Facebook Page or Instagram Business Account.</p>
                  </div>
              )}
            </div>
            <DialogFooter>
              <Button variant="ghost" onClick={() => setOpen(false)} className="text-off-white/60 hover:text-off-white">Cancel</Button>
              <Button onClick={handleSave} disabled={saving || !key} className="bg-kiiro-yellow text-charcoal-black hover:bg-opacity-90">
                {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Save Key'}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  )
}
