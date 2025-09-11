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
    // nav: {
    //   title: 'My App',
    // },
    // links: [
    //   {
    //     text: 'Documentation',
    //     url: '/docs',
    //     active: 'nested-url',
    //   },
    // ],
  };
}
