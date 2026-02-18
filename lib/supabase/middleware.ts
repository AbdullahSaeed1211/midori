import { createServerClient } from '@supabase/ssr'
import { type NextRequest, NextResponse } from 'next/server'

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value))
          supabaseResponse = NextResponse.next({
            request,
          })
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          )
        },
      },
    }
  )

  // Do not run code between createServerClient and
  // supabaseResponse.cookies.setAll otherwise cookies may not be set properly

  const { data: { user }, error } = await supabase.auth.getUser()

  console.log('[Middleware] Path:', request.nextUrl.pathname)
  console.log('[Middleware] User found:', !!user)
  if (error) console.error('[Middleware] Auth error:', error)

  // Protected routes
  const isAuthPage = request.nextUrl.pathname.startsWith('/auth')
  const isPortal = request.nextUrl.pathname.startsWith('/portal')
  const isAdmin = request.nextUrl.pathname.startsWith('/admin')
  const isApi = request.nextUrl.pathname.startsWith('/api')

  // Skip for API routes (they handle their own auth)
  if (isApi) {
    return supabaseResponse
  }

  // Redirect unauthenticated users to login
  if (!user && (isPortal || isAdmin)) {
    console.log('[Middleware] Redirecting unauthenticated user to login')
    const url = request.nextUrl.clone()
    url.pathname = '/login'
    url.searchParams.set('redirect', request.nextUrl.pathname)
    return NextResponse.redirect(url)
  }

  // Redirect authenticated users away from auth pages
  if (user && isAuthPage && !request.nextUrl.pathname.includes('callback')) {
    console.log('[Middleware] Redirecting authenticated user to portal')
    return NextResponse.redirect(new URL('/portal', request.url))
  }

  return supabaseResponse
}
