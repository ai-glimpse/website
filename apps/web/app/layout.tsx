import './global.css';
import 'katex/dist/katex.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import React from 'react';
import { Providers } from './providers';

import Navbar from '@/app/components/Navbar';
import LargeWithLogoCentered from '@/app/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AI Glimpse',
  description: 'Learning AI from scratch',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
    <head>
      <title>AI Glimpse</title>
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon_io/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon_io/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon_io/favicon-16x16.png"/>
      <link rel="manifest" href="/favicon_io/site.webmanifest"/>
    </head>
    <body>
    <Providers>
      <Navbar/>
      {children}
      <LargeWithLogoCentered/>
    </Providers>
    </body>
    </html>
  );
}
