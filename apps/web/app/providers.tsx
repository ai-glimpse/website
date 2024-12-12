// app/providers.tsx
"use client";
import { RootProvider } from "fumadocs-ui/provider";
import { PythonProvider } from "react-py";
import { TooltipProvider } from "@radix-ui/react-tooltip";

import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import React from "react";

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
  return (
    <ChakraProvider value={defaultSystem}>
      <RootProvider>
        <PythonProvider>
          <TooltipProvider>
            <script
              suppressHydrationWarning
              dangerouslySetInnerHTML={{ __html: inject }}
            />
            {children}
          </TooltipProvider>
        </PythonProvider>
      </RootProvider>
    </ChakraProvider>
  );
}
