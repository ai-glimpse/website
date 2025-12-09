import { loader } from 'fumadocs-core/source';
import { toFumadocsSource } from 'fumadocs-mdx/runtime/server';
import { icons } from 'lucide-react';
import { createElement } from 'react';

import { blog as blogCollection, docs as docsCollection, meta as metaCollection } from '@/.source/server';
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
  source: toFumadocsSource(docsCollection, metaCollection),
});

export const blog = loader({
  baseUrl: '/blog',
  i18n,
  source: toFumadocsSource(blogCollection, []),
});
