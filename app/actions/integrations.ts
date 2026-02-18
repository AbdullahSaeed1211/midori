'use server'

import { createClient } from '@/lib/supabase/server'
import prisma from '@/lib/prisma'
import { revalidatePath } from 'next/cache'
import { encrypt, decrypt } from '@/lib/encryption'


export async function saveIntegration(provider: string, key: string, config: any = {}) {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) throw new Error('Unauthorized')

    // Find the client associated with this user
    const client = await prisma.client.findUnique({
        where: { userId: user.id }
    })

    if (!client) throw new Error('Client not found')

    // check if integration exists
    const existing = await prisma.integration.findFirst({
        where: {
            clientId: client.id,
            provider
        }
    })

    const encryptedKey = encrypt(key)

    if (existing) {
        await prisma.integration.update({
            where: { id: existing.id },
            data: {
                key: encryptedKey,
                config, // Store entire config object
                baseUrl: config.baseUrl, // Keep these for backward compat if needed or just rely on config
                modelName: config.modelName
            }
        })
    } else {
        await prisma.integration.create({
            data: {
                clientId: client.id,
                provider,
                key: encryptedKey,
                config,
                baseUrl: config.baseUrl,
                modelName: config.modelName
            }
        })
    }

    revalidatePath('/portal')
}

export async function getConfiguredProviders() {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) return []

    const client = await prisma.client.findUnique({
        where: { userId: user.id }
    })

    if (!client) return []

    const integrations = await prisma.integration.findMany({
        where: { clientId: client.id },
        select: { provider: true }
    })

    return integrations.map((i: { provider: string }) => i.provider)
}

export async function generateAiContent(provider: string, prompt: string) {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) throw new Error('Unauthorized')

    const client = await prisma.client.findUnique({
        where: { userId: user.id }
    })

    if (!client) throw new Error('Client not found')

    const integration = await prisma.integration.findFirst({
        where: {
            clientId: client.id,
            provider
        }
    })

    if (!integration) throw new Error(`Integration for ${provider} not found. Please add your API key in settings.`)

    const apiKey = decrypt(integration.key)

    try {
        switch (provider) {
            case 'openai':
                return await callOpenAI(apiKey, prompt)
            case 'gemini':
                return await callGemini(apiKey, prompt)
            case 'minimax':
                return await callMinimax(apiKey, prompt)
            case 'glm':
                return await callGLM(apiKey, prompt)
            case 'custom':
                return await callCustom(apiKey, prompt, integration.baseUrl, integration.modelName)
            default:
                throw new Error(`Provider ${provider} not supported yet`)
        }
    } catch (error: any) {
        console.error(`Error calling ${provider}:`, error)
        return `Error generating content: ${error.message || 'Unknown error'}`
    }
}

async function callOpenAI(apiKey: string, prompt: string) {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model: 'gpt-4', // Default to GPT-4
            messages: [{ role: 'user', content: prompt }],
            temperature: 0.7
        })
    })

    const data = await response.json()
    if (!response.ok) throw new Error(data.error?.message || 'OpenAI API error')
    return data.choices?.[0]?.message?.content || 'No response details'
}

async function callGemini(apiKey: string, prompt: string) {
    // Simplistic implementation for Gemini via REST
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            contents: [{
                parts: [{ text: prompt }]
            }]
        })
    })

    const data = await response.json()
    if (!response.ok) throw new Error(data.error?.message || 'Gemini API error')
    return data.candidates?.[0]?.content?.parts?.[0]?.text || 'No response details'
}

async function callMinimax(apiKey: string, prompt: string) {
    const response = await fetch('https://api.minimax.chat/v1/text/chatcompletion_pro', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model: 'abab6.5s-chat',
            messages: [{ role: 'user', content: prompt }],
            temperature: 0.7
        })
    })

    const data = await response.json()
    if (!response.ok) throw new Error(data.base_resp?.status_msg || 'Minimax API error')
    return data.choices?.[0]?.message?.content || 'No response from Minimax'
}

async function callGLM(apiKey: string, prompt: string) {
    const response = await fetch('https://open.bigmodel.cn/api/paas/v4/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model: 'glm-4',
            messages: [{ role: 'user', content: prompt }],
            temperature: 0.7
        })
    })

    const data = await response.json()
    if (!response.ok) throw new Error(data.error?.message || 'GLM API error')
    return data.choices?.[0]?.message?.content || 'No response from GLM'
}

async function callCustom(apiKey: string, prompt: string, baseUrl?: string | null, modelName?: string | null) {
    if (!baseUrl) throw new Error('Base URL is required for custom providers')

    // Ensure baseUrl ends with /v1 or similar if needed, but usually user provides full path or base
    // OpenRouter example: https://openrouter.ai/api/v1

    // Append /chat/completions if not present, or assume user gave base
    let endpoint = baseUrl
    if (!endpoint.endsWith('/chat/completions')) {
        endpoint = endpoint.replace(/\/$/, '') + '/chat/completions'
    }

    const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model: modelName || 'gpt-3.5-turbo', // Fallback if not specified
            messages: [{ role: 'user', content: prompt }],
            temperature: 0.7
        })
    })

    const data = await response.json()
    if (!response.ok) throw new Error(data.error?.message || 'Custom Provider API error')
    return data.choices?.[0]?.message?.content || 'No response details'
}
