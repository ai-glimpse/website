"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";


const Logo = () => {
  return (
    <Avatar className="h-12 w-12 transition-transform hover:scale-110">
      <AvatarImage src="https://avatars.githubusercontent.com/u/154221423" alt="AI Glimpse" />
      <AvatarFallback>AG</AvatarFallback>
    </Avatar>
  );
};

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <h4 className="mb-3 text-base font-semibold text-gray-800 dark:text-gray-200">
      {children}
    </h4>
  );
};

function getCurrentYear(): number {
  const currentDate = new Date();
  return currentDate.getFullYear();
}

export default function LargeWithLogoCentered() {
  const currentYear = getCurrentYear();
  const pathname = usePathname();
  const [isDocsPage, setIsDocsPage] = useState(false);

  useEffect(() => {
    setIsDocsPage(pathname.startsWith('/docs'));
  }, [pathname]);

  return (
    <footer className="w-full bg-gray-50 dark:bg-gray-900">
      <div className="border-t border-gray-200 dark:border-gray-800"></div>
      
      {/* Main Footer Content */}
      <div className={`container mx-auto max-w-6xl px-4 py-8 md:px-6 ${isDocsPage ? 'lg:ml-[280px] lg:w-[calc(100vw-280px-2rem)] lg:max-w-none' : ''}`}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          
          {/* Left Side - Logo and Slogan */}
          <div className="flex flex-col items-start space-y-3">
            <div className="flex items-center space-x-3">
              <Link href="/" aria-label="Home">
                <Logo />
              </Link>
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">AI Glimpse</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs">
              Learning AI from scratch - Exploring the frontiers of artificial intelligence
            </p>
          </div>

          {/* Right Side - Resources and Contact in Rows */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex flex-col items-start space-y-2">
              <ListHeader>Resources</ListHeader>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                <FooterLink href="https://ai-glimpse.github.io/toystat/" icon={<FaGithub className="h-4 w-4" />}>
                  ToyStat
                </FooterLink>
                <FooterLink href="https://ai-glimpse.github.io/toyml" icon={<FaGithub className="h-4 w-4" />}>
                  ToyML
                </FooterLink>
                <FooterLink href="https://ai-glimpse.github.io/toydl" icon={<FaGithub className="h-4 w-4" />}>
                  ToyDL
                </FooterLink>
                <FooterLink href="https://ai-glimpse.github.io/toynlp" icon={<FaGithub className="h-4 w-4" />}>
                  ToyNLP
                </FooterLink>
                <FooterLink href="https://ai-glimpse.github.io/toyllm" icon={<FaGithub className="h-4 w-4" />}>
                  ToyLLM
                </FooterLink>
                <FooterLink href="https://ai-glimpse.github.io/toyrl" icon={<FaGithub className="h-4 w-4" />}>
                  ToyRL
                </FooterLink>
              </div>
            </div>
            
            <div className="flex flex-col items-start space-y-2">
              <ListHeader>Contact</ListHeader>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                <FooterLink href="https://github.com/shenxiangzhuang" icon={<FaGithub className="h-4 w-4" />}>
                  Github
                </FooterLink>
                <FooterLink href="https://twitter.com/MathewShen42" icon={<FaTwitter className="h-4 w-4" />}>
                  Twitter
                </FooterLink>
                <FooterLink href="https://linkedin.com/in/mathewshen" icon={<FaLinkedin className="h-4 w-4" />}>
                  LinkedIn
                </FooterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright Section */}
      <div className={`container mx-auto max-w-6xl px-4 pb-6 md:px-6 ${isDocsPage ? 'lg:ml-[280px] lg:w-[calc(100vw-280px-2rem)] lg:max-w-none' : ''}`}>
        <Separator className="w-full mb-4 dark:bg-gray-800" />
        <p className="text-center text-xs text-gray-600 dark:text-gray-400">
          © 2023 ~{currentYear} Mathew Shen. All rights reserved
        </p>
      </div>
    </footer>
  );
}

const FooterLink = ({ href, children, icon }: { href: string; children: ReactNode; icon?: ReactNode }) => {
  return (
    <a 
      href={href}
      className="py-0.5 text-sm text-gray-600 transition-colors hover:text-green-600 dark:text-gray-400 dark:hover:text-green-400 flex items-center gap-2"
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
      {children}
    </a>
  );
};
