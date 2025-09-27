import { createI18nMiddleware } from 'fumadocs-core/i18n/middleware';

import { i18n } from '@/lib/i18n';

export default createI18nMiddleware(i18n);

export const config = {
  // Matcher ignoring `/_next/`, `/api/`, and favicon assets
  // Exclude all favicon-related files and public assets from i18n routing
  matcher: ['/((?!api|_next/static|_next/image|favicon|favicon_io).*)'],
};
