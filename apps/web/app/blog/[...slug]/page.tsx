import { getBlogPage, getBlogPages } from '@/app/source';
import type { Metadata } from 'next';
import { DocsPage, DocsBody } from 'fumadocs-ui/page';
import { notFound } from 'next/navigation';

export default async function BlogPost({
  params,
}: {
  params: { slug: string[] };
}) {
  const page = getBlogPage(params.slug);

  if (page == null) {
    notFound();
  }

  const MDX = page.data.exports.default;

  return (
    <DocsPage toc={page.data.exports.toc} full={page.data.full}>
      <DocsBody>
        <h1>{page.data.title}</h1>
        <MDX />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  const pages = getBlogPages();
  return pages.map((page) => ({
    slug: page.url.split('/').filter(Boolean),
  }));
}

export function generateMetadata({ params }: { params: { slug: string[] } }): Metadata {
  const page = getBlogPage(params.slug);

  if (page == null) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}