import { defineI18nUI } from 'fumadocs-ui/i18n';
import { RootProvider } from 'fumadocs-ui/provider';
import React from 'react';

import ConditionalLayout from '@/app/[lang]/components/ConditionalLayout';
import { i18n } from '@/lib/i18n';

import { Providers } from './providers';

const { provider } = defineI18nUI(i18n, {
  translations: {
    en: {
      displayName: 'English',
    },
    zh: {
      displayName: '中文',
      search: '搜索文档',
      toc: '目录',
      searchNoResult: '未找到结果',
      lastUpdate: '最后更新',
      chooseLanguage: '选择语言',
      nextPage: '下一页',
      previousPage: '上一页',
    },
  },
});

export async function generateStaticParams() {
  return i18n.languages.map((lang) => ({ lang }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <RootProvider i18n={provider(lang)}>
      <Providers>
        <ConditionalLayout>{children}</ConditionalLayout>
      </Providers>
    </RootProvider>
  );
}
