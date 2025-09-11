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
  
  // Use the same page tree for all languages to ensure consistent navigation
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const pageTreeRecord = source.pageTree as Record<string, any>;
  const tree = pageTreeRecord.en || pageTreeRecord;
  
  return (
    <DocsLayout tree={tree} {...baseOptions()}>
      {children}
    </DocsLayout>
  );
}
