import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import React from 'react';

import ConditionalLanguageSwitcher from '@/app/[lang]/components/ConditionalLanguageSwitcher';
import { i18n } from '@/lib/i18n';

/**
 * Shared layout configurations
 *
 * you can configure layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export function baseOptions(lang?: string): BaseLayoutProps {
  return {
    i18n,
    nav: {
      title: 'AI Glimpse',
      url: lang ? `/${lang}` : '/',
      // Only show language switcher in fumadocs (docs pages)
      children: React.createElement(ConditionalLanguageSwitcher, {
        showOnDocs: true,
        showOnNonDocs: false,
      }),
    },
    githubUrl: 'https://github.com/ai-glimpse',
  };
}
