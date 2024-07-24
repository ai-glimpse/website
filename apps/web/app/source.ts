import { map } from '@/.map';
import { createMDXSource } from 'fumadocs-mdx';
import { loader } from 'fumadocs-core/source';

export const { getPage, getPages, pageTree } = loader({
  baseUrl: '/docs',
  rootDir: 'docs',
  source: createMDXSource(map),
});

const blogLoader = loader({
  baseUrl: '/blog',
  rootDir: 'blog',
  source: createMDXSource(map),
});

export const {
  getPage: getBlogPage,
  getPages: getBlogPages,
  pageTree: blogPageTree
} = blogLoader;
