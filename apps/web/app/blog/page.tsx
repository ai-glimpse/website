import Link from 'next/link';
import { blog } from '@/lib/source';

export default function Page(): React.ReactElement {
  const posts = [...blog.getPages()].sort(
    (a, b) =>
      new Date(b.data.date ?? b.file.name).getTime() -
      new Date(a.data.date ?? a.file.name).getTime()
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
        <h1 className="mb-4 border-b-4 border-foreground pb-2 text-4xl font-bold md:text-5xl">
          AI Glimpse Blog
        </h1>
        <p className="text-sm md:text-base">
          Let's break the game rule by the way
        </p>
      </div>
      <div className="grid grid-cols-1 border md:grid-cols-3 lg:grid-cols-4">
        {posts.map((post) => (
          <Link
            key={post.url}
            href={post.url}
            className="flex flex-col bg-card p-4 transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            <p className="font-medium">{post.data.title}</p>
            <p className="text-sm text-muted-foreground">
              {post.data.description}
            </p>

            <p className="mt-auto pt-4 text-xs text-muted-foreground">
              {new Date(post.data.date ?? post.file.name).toDateString()}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}
