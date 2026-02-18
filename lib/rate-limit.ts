const rateLimitStore = new Map<string, { count: number; resetTime: number }>()

const RATE_LIMIT = 5
const WINDOW_MS = 60 * 1000 // 1 minute

export function rateLimit(ip: string): { success: boolean; remaining: number } {
  const now = Date.now()
  const record = rateLimitStore.get(ip)

  if (!record || now > record.resetTime) {
    rateLimitStore.set(ip, { count: 1, resetTime: now + WINDOW_MS })
    return { success: true, remaining: RATE_LIMIT - 1 }
  }

  if (record.count >= RATE_LIMIT) {
    return { success: false, remaining: 0 }
  }

  record.count++
  return { success: true, remaining: RATE_LIMIT - record.count }
}

export function getClientIp(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for')
  if (forwarded) {
    return forwarded.split(',')[0].trim()
  }
  return request.headers.get('x-real-ip') || 'unknown'
}
