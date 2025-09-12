'use client';

import { usePathname } from 'next/navigation';
import React from 'react';

import LargeWithLogoCentered from '@/app/[lang]/components/Footer';
import Navbar from '@/app/[lang]/components/Navbar';

interface ConditionalLayoutProps {
  children: React.ReactNode;
}

export default function ConditionalLayout({
  children,
}: ConditionalLayoutProps) {
  const pathname = usePathname();
  const isDocsPage = pathname.includes('/docs');
  const isHomePage = pathname === '/' || pathname === '/en' || pathname === '/zh';

  if (isDocsPage) {
    // For docs pages, don't render the custom navbar and footer
    // The DocsLayout will handle its own navigation
    return <>{children}</>;
  }

  if (isHomePage) {
    // For home page, only render the navbar since landing page has its own footer
    return (
      <>
        <Navbar />
        <main className="flex-grow">{children}</main>
      </>
    );
  }

  // For other pages, render with navbar and footer
  return (
    <>
      <Navbar />
      <main className="flex-grow">{children}</main>
      <LargeWithLogoCentered />
    </>
  );
}
