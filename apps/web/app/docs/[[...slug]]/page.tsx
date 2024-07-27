import { getPage, getPages } from '@/app/source';
import type { Metadata } from 'next';
import { DocsPage, DocsBody } from 'fumadocs-ui/page';
import { notFound } from 'next/navigation';
import { getGithubLastEdit } from 'fumadocs-core/server'
import { resolve } from 'url';

export default async function Page({
  params,
}: {
  params: { slug?: string[] };
}) {
  const page = getPage(params.slug);

  if (page == null) {
    notFound();
  }

  const MDX = page.data.exports.default;

  const lastEditDate = await getGithubLastEdit({
    owner: 'ai-glimpse',
    repo: 'website',
    // example: "content/docs/index.mdx"
    path: resolve('apps/web/content/docs/', page.file.path),
    token: `Bearer ${process.env.GIT_TOKEN}`
  });

  return (
    <DocsPage
      {...(lastEditDate ? { lastUpdate: new Date(lastEditDate) } : {})}
      toc={page.data.exports.toc}
      full={page.data.full}>
      <DocsBody>
        <h1>{page.data.title}</h1>
        <MDX />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return getPages().map((page) => ({
    slug: page.slugs,
  }));
}

export function generateMetadata({ params }: { params: { slug?: string[] } }) {
  const page = getPage(params.slug);

  if (page == null) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  } satisfies Metadata;
}
