import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';

import { baseOptions } from '@/app/layout.config';
import { source } from '@/lib/source';

export default async function Layout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  // Get the page tree for the current language
  const tree = source.getPageTree(lang);

  return (
    <DocsLayout tree={tree} {...baseOptions(lang)}>
      {children}
    </DocsLayout>
  );
}
