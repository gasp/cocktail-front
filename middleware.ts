import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export const config = {
  /*
   * Match all request paths except for the ones starting with:
   * - api (API routes)
   * - _next/static (static files)
   * - _next/image (image optimization files)
   * - favicon.ico (favicon files)
   * - .*\\.png$ (png file)
   */
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\.png$).*)']
}

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === '/new')
    return NextResponse.redirect(new URL('/', request.url))
}
