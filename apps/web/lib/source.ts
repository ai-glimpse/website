import { loader } from 'fumadocs-core/source';
import { createMDXSource } from 'fumadocs-mdx';
import { icons } from 'lucide-react';
import { createElement } from 'react';

import { docs, meta, blog as blogPosts } from '@/.source';


export const source = loader({
  baseUrl: '/docs',
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
  source: createMDXSource(blogPosts, []),
});