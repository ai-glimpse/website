'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaGithub, FaTwitter } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { ChevronDown, ChevronRight, Menu as MenuIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 bg-white">
      <div className="flex min-h-[50px] items-center justify-between px-2 py-1 md:px-4">
        <div className="flex md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm">
                <MenuIcon className="h-5 w-5" />
                <span className="sr-only">Toggle Navigation</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <MobileNav />
            </SheetContent>
          </Sheet>
        </div>

        <div className="flex items-center">
          <h1 className="text-center font-bold text-gray-800 md:text-left md:text-xl">
            <Link href="/">AI Glimpse</Link>
          </h1>

          <div className="ml-10 hidden md:flex">
            <DesktopNav />
          </div>
        </div>

        <div className="flex justify-end space-x-2 md:space-x-6">
          <Button
            asChild
            variant="ghost"
            size="sm"
          >
            <a
              href="https://twitter.com/MathewShen42"
              target="_blank"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
          </Button>
          <Button
            asChild
            variant="ghost"
            size="sm"
          >
            <a
              href="https://github.com/ai-glimpse"
              target="_blank"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </Button>
          <Button
            asChild
            variant="ghost"
            size="sm"
          >
            <a
              href="mailto:datahonor@gmail.com"
              aria-label="Email"
            >
              <MdEmail />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}

const DesktopNav = () => {
  return (
    <div className="flex space-x-4">
      {NAV_ITEMS.map((navItem) => (
        <div key={navItem.label}>
          <Popover>
            <PopoverTrigger asChild>
              <Link href={navItem.href ?? '#'}>
                <Button variant="link" className="text-sm font-medium text-gray-600 hover:text-gray-800">
                  {navItem.label}
                </Button>
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent className="rounded-xl p-4 shadow-xl">
                <div className="flex flex-col space-y-2">
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </div>
              </PopoverContent>
            )}
          </Popover>
        </div>
      ))}
    </div>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link href={href ?? '#'} className="group flex items-center">
      <div>
        <div className="font-medium transition-all group-hover:text-pink-400">
          {label}
        </div>
        <div className="text-sm">{subLabel}</div>
      </div>
      <div className="ml-auto flex h-full items-center opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100">
        <ChevronRight className="h-5 w-5 text-pink-400" />
      </div>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <div className="flex flex-col space-y-2 p-2">
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </div>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="space-y-2">
      <div className="flex items-center justify-between py-1">
        <Link href={href ?? '#'} className="text-sm font-semibold text-gray-600">
          {label}
        </Link>
        {children && (
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm">
              <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        )}
      </div>

      {children && (
        <CollapsibleContent>
          <div className="border-l border-solid border-gray-200 pl-4 pt-1">
            {children.map((child) => (
              <Link
                key={child.label}
                href={child.href ?? '#'}
                className="flex py-1 text-sm"
              >
                {child.label}
              </Link>
            ))}
          </div>
        </CollapsibleContent>
      )}
    </Collapsible>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Docs',
    href: '/docs/ml',
  },
  {
    label: 'Blog',
    href: '/blog',
  },
  {
    label: 'About',
    href: '/about',
  },
];
