import defaultMdxComponents from 'fumadocs-ui/mdx';
import {
  DocsPage,
  DocsBody,
  DocsDescription,
  DocsTitle,
} from 'fumadocs-ui/page';
import { Edit } from 'lucide-react';
import { notFound } from 'next/navigation';

import { buttonVariants } from '@/app/components/blog/button';
import Comments from '@/app/components/comments';
import { cn } from '@/app/utils/cn';
import { source } from '@/lib/source';

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const path = `apps/web/content/docs/${page.file.path}`;
  const footer = (
    <a
      href={`https://github.com/ai-glimpse/website/blob/main/${path}`}
      target="_blank"
      rel="noreferrer noopener"
      className={cn(
        buttonVariants({
          variant: 'secondary',
          size: 'sm',
          className: 'gap-1.5 text-xs',
        })
      )}
    >
      <Edit className="size-3" />
      Edit on Github
    </a>
  );

  const MDX = page.data.body;

  // Use the last modified time from fumadocs built-in git support
  const lastEditDate = page.data.lastModified;

  return (
    <DocsPage
      {...(lastEditDate ? { lastUpdate: new Date(lastEditDate) } : {})}
      toc={page.data.toc}
      full={page.data.full}
      tableOfContent={{
        footer,
      }}
      tableOfContentPopover={{ footer }}
    >
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDX components={{ ...defaultMdxComponents }} />
      </DocsBody>
      <Comments />
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}
