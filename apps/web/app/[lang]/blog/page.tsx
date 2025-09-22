import Link from 'next/link';

import { blog } from '@/lib/source';

export default function Page(): React.ReactElement {
  const posts = [...blog.getPages()].sort(
    (a, b) =>
      new Date((b.data.date as string) ?? b.file.name).getTime() -
      new Date((a.data.date as string) ?? a.file.name).getTime()
  );

  const svg = `<svg viewBox='0 0 500 500' xmlns='http://www.w3.org/2000/svg'>
  <filter id='noiseFilter'>
    <feTurbulence
      type='fractalNoise'
      baseFrequency='0.65'
      numOctaves='3'
      stitchTiles='stitch'/>
  </filter>

  <rect width='100%' height='100%' filter='url(#noiseFilter)'/>
</svg>`;

  return (
    <main className="container max-sm:px-0 md:py-12">
      <div
        className="h-[300px] p-8 md:h-[400px] md:p-12"
        style={{
          backgroundColor: 'white',
          backgroundImage: [
            'radial-gradient(circle at 70% 10%, rgba(255, 200, 200, 0.7), transparent)',
            'radial-gradient(circle at 0% 80%, rgba(255, 200, 255, 0.7), transparent)',
            'radial-gradient(circle at 50% 50%, rgba(200, 200, 255, 0.5), transparent)',
            `url("data:image/svg+xml,${encodeURIComponent(svg)}")`,
          ].join(', '),
          backgroundBlendMode: 'multiply, screen, overlay, normal',
        }}
      >
        <h1 className="border-foreground mb-4 border-b-4 pb-2 text-4xl font-bold md:text-5xl">
          AI Glimpse Blog
        </h1>
        <p className="text-sm md:text-base">
          Let&apos;s break the game rule by the way
        </p>
      </div>
      <div className="grid grid-cols-1 border md:grid-cols-3 lg:grid-cols-4">
        {posts.map((post) => (
          <Link
            key={post.url}
            href={post.url}
            className="bg-card hover:bg-accent hover:text-accent-foreground flex flex-col p-4 transition-colors"
          >
            <p className="font-medium">{post.data.title}</p>
            <p className="text-muted-foreground text-sm">
              {post.data.description}
            </p>

            <p className="text-muted-foreground mt-auto pt-4 text-xs">
              {new Date(
                (post.data.date as string) ?? post.file.name
              ).toDateString()}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}
