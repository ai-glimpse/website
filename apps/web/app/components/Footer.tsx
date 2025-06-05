"use client";

import { ReactNode, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const Logo = (props: any) => {
  return (
    <Avatar className="h-12 w-12 transition-transform hover:scale-110">
      <AvatarImage src="https://avatars.githubusercontent.com/u/154221423" alt="AI Glimpse" />
      <AvatarFallback>AI</AvatarFallback>
    </Avatar>
  );
};

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <h4 className="mb-3 text-lg font-semibold text-gray-800 dark:text-gray-200">
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
      <div className={`container mx-auto max-w-6xl px-4 py-12 md:px-6 lg:py-16 ${isDocsPage ? 'lg:ml-[280px] lg:w-[calc(100vw-280px-2rem)] lg:max-w-none' : ''}`}>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="flex flex-col items-start space-y-2">
            <ListHeader>Resources</ListHeader>
            <FooterLink href="https://ai-glimpse.github.io/toystat/">ToyStat</FooterLink>
            <FooterLink href="https://ai-glimpse.github.io/toyml">ToyML</FooterLink>
            <FooterLink href="https://ai-glimpse.github.io/toydl">ToyDL</FooterLink>
            <FooterLink href="https://ai-glimpse.github.io/toynlp">ToyNLP</FooterLink>
            <FooterLink href="https://ai-glimpse.github.io/toyllm">ToyLLM</FooterLink>
            <FooterLink href="https://ai-glimpse.github.io/toyrl">ToyRL</FooterLink>
          </div>

          <div className="flex flex-col items-start space-y-2">
            <ListHeader>Project</ListHeader>
            <div className="flex items-center">
              <FooterLink href="https://datahonor.com/beer/">Beer</FooterLink>
              <Badge className="ml-2 bg-red-400 text-white dark:bg-red-600">
                Hot
              </Badge>
            </div>
            <FooterLink href="https://shenxiangzhuang.github.io/pysesd/">[Py]S-ESD</FooterLink>
            <FooterLink href="https://shenxiangzhuang.github.io/mppt/">MPPT</FooterLink>
            <FooterLink href="https://shenxiangzhuang.github.io/bleuscore/">BleuScore</FooterLink>
          </div>
          
          <div className="flex flex-col items-start space-y-2">
            <ListHeader>Odyssey</ListHeader>
            <FooterLink href="https://datahonor.com/odyssey/aiops/">AIOps</FooterLink>
            <FooterLink href="https://datahonor.com/odyssey/mlsys/">MlSys</FooterLink>
            <FooterLink href="https://datahonor.com/odyssey/chc/">Crowdsourcing</FooterLink>
            <div className="flex items-center">
              <FooterLink href="https://datahonor.com/odyssey/llm/">LLM</FooterLink>
              <Badge className="ml-2 bg-green-400 text-white dark:bg-green-600">
                New
              </Badge>
            </div>
          </div>
          
          <div className="flex flex-col items-start space-y-2">
            <ListHeader>Contact</ListHeader>
            <FooterLink href="https://github.com/shenxiangzhuang">Github</FooterLink>
            <FooterLink href="https://twitter.com/MathewShen42">Twitter</FooterLink>
            <FooterLink href="https://linkedin.com/in/mathewshen">LinkedIn</FooterLink>
          </div>
        </div>
      </div>
      
      <div className={`container mx-auto max-w-6xl px-4 pb-8 md:px-6 ${isDocsPage ? 'lg:ml-[280px] lg:w-[calc(100vw-280px-2rem)] lg:max-w-none' : ''}`}>
        <div className="flex flex-col items-center justify-center">
          <div className="mb-6 flex items-center justify-center">
            <Link href="/" aria-label="Home">
              <Logo />
            </Link>
          </div>
          <Separator className="w-full max-w-md dark:bg-gray-800" />
          <p className="pt-6 text-center text-sm text-gray-600 dark:text-gray-400">
            © 2023 ~{currentYear} Mathew Shen. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

const FooterLink = ({ href, children }: { href: string; children: ReactNode }) => {
  return (
    <a 
      href={href}
      className="py-1 text-gray-600 transition-colors hover:text-green-600 dark:text-gray-400 dark:hover:text-green-400"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};
