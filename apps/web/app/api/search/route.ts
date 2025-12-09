import { createTokenizer } from '@orama/tokenizers/mandarin';
import { createFromSource } from 'fumadocs-core/search/server';

import { source } from '@/lib/source';

export const { GET } = createFromSource(source, {
  buildIndex: (page) => ({
    id: page.url,
    title: page.data.title ?? '',
    description: page.data.description,
    structuredData: page.data.structuredData ?? { headings: [], contents: [] },
    url: page.url,
  }),
  localeMap: {
    // Configure Chinese language support with mandarin tokenizer
    zh: {
      components: {
        tokenizer: createTokenizer(),
      },
      search: {
        threshold: 0,
        tolerance: 0,
      },
    },
    // English language configuration
    en: {
      language: 'english',
    },
  },
});
