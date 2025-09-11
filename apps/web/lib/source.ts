import { loader } from 'fumadocs-core/source';
import { createMDXSource } from 'fumadocs-mdx';
import { icons } from 'lucide-react';
import { createElement } from 'react';

import { blog as blogPosts, docs, meta } from '@/.source';
import { i18n } from '@/lib/i18n';

export const source = loader({
  baseUrl: '/docs',
  i18n,
  icon(icon) {
    if (!icon) {
      // You may set a default icon
      return;
    }

    if (icon in icons) return createElement(icons[icon as keyof typeof icons]);
  },
  source: createMDXSource(docs, meta),
});

export const blog = loader({
  baseUrl: '/blog',
  i18n,
  source: createMDXSource(blogPosts, []),
});
