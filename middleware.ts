import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const host = request.headers.get('host')
  
  // Redirect www to non-www (both production and local testing)
  if (host === 'www.codetokloud.com' || host === 'www.localhost:3000') {
    const url = request.nextUrl.clone()
    
    if (host === 'www.codetokloud.com') {
      url.hostname = 'codetokloud.com'
    } else if (host === 'www.localhost:3000') {
      url.hostname = 'localhost'
    }
    
    return NextResponse.redirect(url, 301)
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}