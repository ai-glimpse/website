import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { InlineTOC } from 'fumadocs-ui/components/inline-toc';
import { blogLoader as blog } from '@/app/source';
import { createMetadata } from '@/app/utils/metadata';
import { buttonVariants } from '@/app/components/blog/button';
import { Control } from '@/app/blog/[slug]/page.client';

interface Param {
  slug: string;
}

export const dynamicParams = false;

export default function Page({
  params,
}: {
  params: Param;
}): React.ReactElement {
  const page = blog.getPage([params.slug]);

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
          href="/blog"
          className={buttonVariants({ size: 'sm', variant: 'secondary' })}
        >
          Back
        </Link>
      </div>
      <article className="container grid grid-cols-1 px-0 py-8 lg:grid-cols-[2fr_1fr] lg:px-4">
        <div className="prose p-4">
          <InlineTOC items={page.data.exports.toc} />
          <page.data.exports.default />
        </div>
        <div className="flex flex-col gap-4 border-l p-4 text-sm">
          <div>
            <p className="mb-1 text-muted-foreground">Written by</p>
            <p className="font-medium">{page.data.author}</p>
          </div>
          <div>
            <p className="mb-1 text-sm text-muted-foreground">At</p>
            <p className="font-medium">
              {new Date(page.data.date ?? page.file.name).toDateString()}
            </p>
          </div>
          <Control url={page.url} />
        </div>
      </article>
    </>
  );
}

export function generateMetadata({ params }: { params: Param }): Metadata {
  const page = blog.getPage([params.slug]);

  if (!page) notFound();

  return createMetadata({
    title: page.data.title,
    description:
      page.data.description ?? 'The library for building documentation sites',
  });
}

export function generateStaticParams(): Param[] {
  return blog.getPages().map<Param>((page) => ({
    slug: page.slugs[0],
  }));
}
