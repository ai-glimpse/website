import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

import { i18n } from '@/lib/i18n';

/**
 * Shared layout configurations
 *
 * you can configure layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export function baseOptions(): BaseLayoutProps {
  return {
    i18n,
    nav: {
      title: 'AI Glimpse',
      url: '/',
    },
    links: [
      {
        text: 'Docs',
        url: '/docs/ml',
        active: 'nested-url',
      },
      {
        text: 'Blog',
        url: '/blog',
      },
      {
        text: 'About',
        url: '/about',
      },
    ],
    githubUrl: 'https://github.com/ai-glimpse',
  };
}
