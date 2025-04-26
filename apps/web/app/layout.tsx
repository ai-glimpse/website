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
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
    <head>
      <title>AI Glimpse</title>
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon_io/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon_io/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon_io/favicon-16x16.png"/>
      <link rel="manifest" href="/favicon_io/site.webmanifest"/>
      <meta name="theme-color" content="#ffffff" />
    </head>
    <body className="min-h-screen flex flex-col">
    <Providers>
      <Navbar/>
      <main className="flex-grow">{children}</main>
      <LargeWithLogoCentered/>
    </Providers>
    </body>
    </html>
  );
}
