import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === '/docs') {
    return NextResponse.redirect(new URL('/docs/ml', request.url));
  }
}

export const config = {
  matcher: ['/docs'],
};
