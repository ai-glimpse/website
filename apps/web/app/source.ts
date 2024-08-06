import { map } from '@/.map';
import { z } from 'zod';

import { createMDXSource, defaultSchemas } from 'fumadocs-mdx';
import { loader } from 'fumadocs-core/source';
import { languages } from '@/i18n';


export const { getPage, getPages, pageTree } = loader({
  languages,
  baseUrl: '/docs',
  rootDir: 'docs',
  source: createMDXSource(map, {
    schema: {
      frontmatter: defaultSchemas.frontmatter.extend({
        preview: z.string().optional(),
        index: z.boolean().default(false),
      }),
    },
  }),
});

export const blogLoader = loader({
  languages,
  baseUrl: '/blog',
  rootDir: 'blog',
  source: createMDXSource(map, {
    schema: {
      frontmatter: defaultSchemas.frontmatter.extend({
        author: z.string(),
        date: z.string().date().or(z.date()).optional(),
      }),
    },
  }),
});

export const {
  getPage: getBlogPage,
  getPages: getBlogPages,
  pageTree: blogPageTree,
} = blogLoader;
