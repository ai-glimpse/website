import "./global.css";
import "./styles/prism.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";
import { Providers } from "./providers";

import Navbar from "@/app/components/Navbar";
import LargeWithLogoCentered from "@/app/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Glimpse",
  description: "Learning AI from scratch",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar />
          {children}
          <LargeWithLogoCentered />
        </Providers>
      </body>
    </html>
  );
}
