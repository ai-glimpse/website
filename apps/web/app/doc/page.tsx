// ref: https://github.com/fuma-nama/fumadocs/blob/dev/apps/docs/app/(home)/docs/page.tsx

import { LayoutIcon, LibraryIcon } from 'lucide-react';
import Link, { type LinkProps } from 'next/link';
import { buttonVariants } from '@/app/components/blog/button';
import { cn } from '@/app/utils/cn';

export default function DocsPage(): React.ReactElement {
  return (
    <main className="container flex flex-col items-center py-16 text-center">
      <div className="absolute inset-0 z-[-1] overflow-hidden duration-1000 animate-in fade-in [perspective:2000px]">
        <div className="absolute bottom-[20%] left-1/2 size-[1200px] origin-bottom bg-fd-primary/30 opacity-30" />
      </div>
      <h1 className="mb-4 text-4xl font-semibold md:text-5xl">
        Getting Started
      </h1>
      <p className="text-fd-muted-foreground">Now we have ML and DL!</p>
      <div className="mt-16 grid grid-cols-1 gap-4 text-left md:grid-cols-2">
        <Item href="/docs/ml">
          <Icon>
            <LayoutIcon className="size-full" />
          </Icon>
          <h2 className="mb-2 text-lg font-semibold">Machine Learning</h2>
          <p className="text-sm text-fd-muted-foreground">
            Learning machine learning from scratch by toyml.
          </p>
        </Item>
        <Item href="/docs/dl">
          <Icon>
            <LibraryIcon className="size-full" />
          </Icon>
          <h2 className="mb-2 text-lg font-semibold">Deep Learning</h2>
          <p className="text-sm text-fd-muted-foreground">
            Learning deep learning from scratch by toydl.
          </p>
        </Item>
      </div>
    </main>
  );
}

function Icon({ children }: { children: React.ReactNode }): React.ReactElement {
  return (
    <div
      className="mb-2 size-9 rounded-lg border p-1.5 shadow-fd-primary/30"
      style={{
        boxShadow: 'inset 0px 8px 8px 0px var(--tw-shadow-color)',
      }}
    >
      {children}
    </div>
  );
}

function Item(
  props: LinkProps & { children: React.ReactNode }
): React.ReactElement {
  return (
    <Link
      {...props}
      className="rounded-2xl border border-transparent p-6 shadow-lg transition-all hover:shadow-fd-primary/20"
      style={{
        backgroundImage:
          'linear-gradient(to right bottom, hsl(var(--background)) 10%, hsl(var(--fd-accent)), hsl(var(--background)) 60%),' +
          'linear-gradient(to right bottom, rgb(40,40,40) 10%, rgb(180,180,180), rgb(30,30,30) 60%)',
        backgroundOrigin: 'border-box',
        backgroundClip: 'padding-box, border-box',
      }}
    >
      {props.children}
    </Link>
  );
}
