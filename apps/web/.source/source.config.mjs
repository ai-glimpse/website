// source.config.ts
import {
  defineConfig,
  defineDocs,
  defineCollections,
  frontmatterSchema
} from "fumadocs-mdx/config";
import { rehypeCodeDefaultOptions } from "fumadocs-core/mdx-plugins";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeCitation from "rehype-citation";
import { z } from "zod";
var { docs, meta } = defineDocs({
  dir: "content/docs"
});
var blog = defineCollections({
  dir: "content/blog",
  schema: frontmatterSchema.extend({
    author: z.string(),
    date: z.string().date().or(z.date()).optional()
  }),
  type: "doc"
});
var source_config_default = defineConfig({
  lastModifiedTime: "git",
  mdxOptions: {
    rehypeCodeOptions: {
      inline: "tailing-curly-colon",
      themes: {
        light: "catppuccin-latte",
        dark: "catppuccin-mocha"
      },
      transformers: [
        ...rehypeCodeDefaultOptions.transformers ?? [],
        {
          name: "transformers:remove-notation-escape",
          code(hast) {
            for (const line of hast.children) {
              if (line.type !== "element") continue;
              const lastSpan = line.children.findLast(
                (v) => v.type === "element"
              );
              const head = lastSpan?.children[0];
              if (head?.type !== "text") return;
              head.value = head.value.replace(/\[\\!code/g, "[!code");
            }
          }
        }
      ]
    },
    remarkPlugins: [
      remarkMath
    ],
    rehypePlugins: (v) => [
      rehypeKatex,
      [
        rehypeCitation,
        {
          bibliography: "references/ref.bib",
          csl: "references/chicago-fullnote-bibliography.csl"
        }
      ],
      ...v
    ]
  }
});
export {
  blog,
  source_config_default as default,
  docs,
  meta
};
