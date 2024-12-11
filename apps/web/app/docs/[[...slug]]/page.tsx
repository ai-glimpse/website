import { source } from '@/lib/source';
import {
  DocsPage,
  DocsBody,
  DocsDescription,
  DocsTitle,
} from 'fumadocs-ui/page';
import { notFound } from 'next/navigation';
import defaultMdxComponents from 'fumadocs-ui/mdx';
import { getGithubLastEdit } from 'fumadocs-core/server'
import { resolve } from 'url';
import Comments from '@/app/components/comments';
import { cn } from '@/app/utils/cn';
import { buttonVariants } from '@/app/components/blog/button';
import { Edit } from 'lucide-react';


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
          className: 'text-xs gap-1.5',
        })
      )}
    >
      <Edit className="size-3" />
      Edit on Github
    </a>
  );


  const MDX = page.data.body;

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
