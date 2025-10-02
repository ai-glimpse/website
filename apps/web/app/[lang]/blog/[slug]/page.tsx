import { InlineTOC } from 'fumadocs-ui/components/inline-toc';
import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { Control } from '@/app/[lang]/blog/[slug]/page.client';
import { buttonVariants } from '@/app/[lang]/components/blog/button';
import Comments from '@/app/[lang]/components/comments';
import { createMetadata } from '@/app/[lang]/utils/metadata';
import { blog } from '@/lib/source';

export default async function Page(props: {
  params: Promise<{ slug: string; lang: string }>;
}): Promise<React.ReactElement> {
  const params = await props.params;
  const page = blog.getPage([params.slug], params.lang);

  if (!page) notFound();

  return (
    <>
      <div
        className="container rounded-xl border py-12 md:px-8"
        style={{
          backgroundColor: 'white',
          backgroundImage: [
            'linear-gradient(140deg, hsla(330, 100%, 90%, 0.8), transparent 50%)',
            'linear-gradient(to left top, hsla(300, 100%, 85%, 0.6), transparent 50%)',
            'radial-gradient(circle at 100% 100%, hsla(0, 100%, 93%, 1), hsla(0, 80%, 80%, 1) 17%, hsla(0, 80%, 80%, 0.5) 20%, transparent)',
          ].join(', '),
          backgroundBlendMode: 'multiply, multiply, normal',
        }}
      >
        <h1 className="mb-2 text-3xl font-bold text-black">
          {page.data.title}
        </h1>
        <p className="mb-4 text-black/80">{page.data.description}</p>
        <Link
          href={`/${params.lang}/blog`}
          className={buttonVariants({ size: 'sm', variant: 'secondary' })}
        >
          Back
        </Link>
      </div>
      <article className="container grid grid-cols-1 px-0 py-8 lg:grid-cols-[2fr_1fr] lg:px-4">
        <div className="prose p-4">
          <InlineTOC items={page.data.toc} />
          <page.data.body components={defaultMdxComponents} />
        </div>
        <div className="flex flex-col gap-4 border-l p-4 text-sm">
          <div>
            <p className="text-muted-foreground mb-1">Written by</p>
            <p className="font-medium">{page.data.author as string}</p>
          </div>
          <div>
            <p className="text-muted-foreground mb-1 text-sm">At</p>
            <p className="font-medium">
              {new Date(
                (page.data.date as string) ?? page.file.name
              ).toDateString()}
            </p>
          </div>
          <Control url={page.url} />
          <div style={{ borderBottom: '1px solid #E5E7EB' }}></div>
          <Comments />
        </div>
        {/* <Comments /> */}
      </article>
    </>
  );
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string; lang: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const page = blog.getPage([params.slug], params.lang);

  if (!page) notFound();

  return createMetadata({
    title: page.data.title,
    description:
      page.data.description ?? 'The library for building documentation sites',
  });
}

export function generateStaticParams(): { slug: string }[] {
  return blog.getPages().map((page) => ({
    slug: page.slugs[0],
  }));
}
