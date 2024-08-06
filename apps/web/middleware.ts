import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { defaultLanguage, languages } from '@/i18n';
import { createI18nMiddleware } from 'fumadocs-core/middleware';
 
export default createI18nMiddleware({
  languages,
  defaultLanguage,
});


export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === '/docs') {
    return NextResponse.redirect(new URL('/docs/ml', request.url))
  }
}

export const config = {
  matcher: ['/docs'],
}