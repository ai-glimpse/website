'use client';

import { ChevronDown, ChevronRight, Menu as MenuIcon } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaGithub, FaTwitter } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

import { Button } from '@/components/ui/button';
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from '@/components/ui/collapsible';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from '@/components/ui/sheet';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <div className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      isScrolled 
        ? 'border-b border-gray-200 bg-white/80 backdrop-blur-md dark:bg-gray-900/80 dark:border-gray-800' 
        : 'bg-white dark:bg-gray-900'
    }`}>
      <div className="flex min-h-[60px] items-center justify-between px-3 py-2 md:px-6">
        <div className="flex md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="rounded-full">
                <MenuIcon className="h-5 w-5" />
                <span className="sr-only">Toggle Navigation</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[280px] sm:w-[350px]">
              <MobileNav />
            </SheetContent>
          </Sheet>
        </div>

        <div className="flex items-center">
          <h1 className="text-center font-bold text-gray-800 transition-all duration-300 hover:text-green-600 md:text-left md:text-xl dark:text-white dark:hover:text-green-400">
            <Link href="/">AI Glimpse</Link>
          </h1>

          <div className="ml-10 hidden md:flex">
            <DesktopNav />
          </div>
        </div>

        <div className="flex justify-end space-x-1 md:space-x-4">
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <a
              href="https://twitter.com/MathewShen42"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="flex h-9 w-9 items-center justify-center"
            >
              <FaTwitter className="h-4 w-4 md:h-5 md:w-5" />
            </a>
          </Button>
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <a
              href="https://github.com/ai-glimpse"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-9 w-9 items-center justify-center"
            >
              <FaGithub className="h-4 w-4 md:h-5 md:w-5" />
            </a>
          </Button>
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <a
              href="mailto:datahonor@gmail.com"
              aria-label="Email"
              className="flex h-9 w-9 items-center justify-center"
            >
              <MdEmail className="h-4 w-4 md:h-5 md:w-5" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}

const DesktopNav = () => {
  return (
    <div className="flex space-x-1 md:space-x-2 lg:space-x-4">
      {NAV_ITEMS.map((navItem) => (
        <div key={navItem.label}>
          <Popover>
            <PopoverTrigger asChild>
              <Link href={navItem.href ?? '#'}>
                <Button variant="link" className="text-sm font-medium text-gray-600 hover:text-green-600 transition-colors dark:text-gray-300 dark:hover:text-green-400">
                  {navItem.label}
                </Button>
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent className="w-56 rounded-xl p-4 shadow-xl">
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
    <Link href={href ?? '#'} className="group flex items-center rounded-lg p-2 hover:bg-gray-50 dark:hover:bg-gray-800">
      <div>
        <div className="font-medium transition-all group-hover:text-green-600 dark:group-hover:text-green-400">
          {label}
        </div>
        <div className="text-xs text-gray-500 dark:text-gray-400">{subLabel}</div>
      </div>
      <div className="ml-auto flex h-full items-center opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100">
        <ChevronRight className="h-4 w-4 text-green-600 dark:text-green-400" />
      </div>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <div className="flex flex-col space-y-4 p-4">
      <div className="mb-4 font-bold text-xl text-gray-800 dark:text-white">
        <Link href="/">AI Glimpse</Link>
      </div>
      <div className="space-y-2">
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </div>
    </div>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="space-y-2">
      <div className="flex items-center justify-between py-2">
        <Link href={href ?? '#'} className="text-sm font-semibold text-gray-700 hover:text-green-600 transition-colors dark:text-gray-300 dark:hover:text-green-400">
          {label}
        </Link>
        {children && (
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className="p-1 h-8 w-8 rounded-full">
              <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        )}
      </div>

      {children && (
        <CollapsibleContent>
          <div className="border-l-2 border-gray-200 dark:border-gray-700 pl-4 py-1 space-y-2">
            {children.map((child) => (
              <Link
                key={child.label}
                href={child.href ?? '#'}
                className="flex py-2 text-sm text-gray-600 hover:text-green-600 transition-colors dark:text-gray-400 dark:hover:text-green-400"
              >
                {child.label}
                {child.subLabel && (
                  <span className="ml-2 text-xs text-gray-500">{child.subLabel}</span>
                )}
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
