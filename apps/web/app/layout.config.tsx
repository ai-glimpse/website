import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import React from 'react';

import LanguageSwitcher from '@/app/[lang]/components/LanguageSwitcher';
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
      children: React.createElement(LanguageSwitcher),
    },
    githubUrl: 'https://github.com/ai-glimpse',
  };
}
