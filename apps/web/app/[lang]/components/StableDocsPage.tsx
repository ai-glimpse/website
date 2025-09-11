'use client';

import type { DocsPageProps } from 'fumadocs-ui/page';
import { DocsPage } from 'fumadocs-ui/page';

export function StableDocsPage({ children, ...props }: DocsPageProps) {
  return (
    <div suppressHydrationWarning>
      <DocsPage {...props}>
        {children}
      </DocsPage>
    </div>
  );
}
