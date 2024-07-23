// app/providers.tsx
"use client";
import { RootProvider } from "fumadocs-ui/provider";
import { PythonProvider } from "react-py";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider>
        <RootProvider>{children} </RootProvider>
      </ChakraProvider>
    </CacheProvider>
  );
}
