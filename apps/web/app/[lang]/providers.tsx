// app/providers.tsx
'use client';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import { RootProvider } from 'fumadocs-ui/provider/next';
import React, { useState, useEffect } from 'react';
import { PythonProvider } from 'react-py';

const inject = `
const urlParams = new URLSearchParams(window.location.search);
const uwuParam = urlParams.get("uwu");

if (typeof uwuParam === 'string') {
    localStorage.setItem('uwu', uwuParam);
}

const item = localStorage.getItem('uwu')

if (item === 'true') {
    document.documentElement.classList.add("uwu")
}
`;

export function Providers({ children }: { children: React.ReactNode }) {
  const [isServiceWorkerSupported, setIsServiceWorkerSupported] =
    useState(false);

  useEffect(() => {
    // Check if service workers are supported
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      setIsServiceWorkerSupported(true);
    }
  }, []);

  const ProviderContent = ({ children }: { children: React.ReactNode }) => (
    <TooltipProvider>
      <script
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: inject }}
      />
      {children}
    </TooltipProvider>
  );

  return (
    <RootProvider
      theme={{
        enabled: false,
      }}
    >
      {isServiceWorkerSupported ? (
        <PythonProvider>
          <ProviderContent>{children}</ProviderContent>
        </PythonProvider>
      ) : (
        <ProviderContent>{children}</ProviderContent>
      )}
    </RootProvider>
  );
}
