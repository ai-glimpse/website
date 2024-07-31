import createMDX from 'fumadocs-mdx/config';
import rehpypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';
import rehypeCitation from 'rehype-citation';

const withMDX = createMDX({
  mdxOptions: {
    remarkPlugins: [remarkMath],
    rehypePlugins: (v) => [
      rehpypeKatex,
      [
        rehypeCitation,
        {
          bibliography: 'references/ref.bib',
          csl: 'chicago-fullnote-bibliography.csl',
        },
      ],
      ...v,
    ],
  },
});

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
};

export default withMDX(config);
