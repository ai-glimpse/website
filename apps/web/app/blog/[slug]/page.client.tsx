'use client';
import {
  TooltipContent,
  Tooltip,
  TooltipTrigger,
} from '@radix-ui/react-tooltip';
import { Share } from 'lucide-react';
import { useState } from 'react';

import { buttonVariants } from '@/app/components/blog/button';
import { cn } from '@/app/utils/cn';

export function Control({ url }: { url: string }): React.ReactElement {
  const [open, setOpen] = useState(false);
  const onClick = (): void => {
    setOpen(true);
    void navigator.clipboard.writeText(`${window.location.origin}${url}`);
  };

  return (
    <Tooltip open={open} onOpenChange={setOpen}>
      <TooltipTrigger
        className={cn(
          buttonVariants({ className: 'gap-2', variant: 'secondary' })
        )}
        onClick={onClick}
      >
        <Share className="size-4" />
        Share Post
      </TooltipTrigger>
      <TooltipContent className="bg-popover text-popover-foreground rounded-lg border p-2 text-sm">
        Copied
      </TooltipContent>
    </Tooltip>
  );
}
