import React from 'react';

import LargeWithLogoCentered from '@/app/[lang]/components/Footer';
import Navbar from '@/app/[lang]/components/Navbar';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="flex-grow">{children}</main>
      <LargeWithLogoCentered />
    </>
  );
}
