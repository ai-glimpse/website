'use client';

import { usePathname } from 'next/navigation';
import React from 'react';

import LargeWithLogoCentered from '@/app/[lang]/components/Footer';
import Navbar from '@/app/[lang]/components/Navbar';

interface ConditionalLayoutProps {
  children: React.ReactNode;
}

export default function ConditionalLayout({ children }: ConditionalLayoutProps) {
  const pathname = usePathname();
  const isDocsPage = pathname.includes('/docs');

  if (isDocsPage) {
    // For docs pages, don't render the custom navbar and footer
    // The DocsLayout will handle its own navigation
    return <>{children}</>;
  }

  // For non-docs pages, render with navbar and footer
  return (
    <>
      <Navbar />
      <main className="flex-grow">{children}</main>
      <LargeWithLogoCentered />
    </>
  );
}
