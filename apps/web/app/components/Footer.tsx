"use client";

import { ReactNode } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const Logo = (props: any) => {
  return (
    <Avatar className="h-12 w-12">
      <AvatarImage src="https://avatars.githubusercontent.com/u/154221423" alt="AI Glimpse" />
      <AvatarFallback>AI</AvatarFallback>
    </Avatar>
  );
};

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <h4 className="mb-2 text-lg font-medium">
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

  return (
    <footer className="mt-16 w-full">
      <div className="border-t border-gray-200 dark:border-gray-800"></div>
      <div className="container mx-auto max-w-5xl px-4 py-16 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-4">
          <div className="flex flex-col items-start">
            <ListHeader>Resources</ListHeader>
            <a href="https://ai-glimpse.github.io/toyml" className="py-1 hover:text-green-500 transition-colors">
              ToyML
            </a>
            <a href="https://ai-glimpse.github.io/toydl" className="py-1 hover:text-green-500 transition-colors">
              ToyDL
            </a>
            <a href="https://ai-glimpse.github.io/toyllm" className="py-1 hover:text-green-500 transition-colors">
              ToyLLM
            </a>
            <a href="https://ai-glimpse.github.io/toystat/" className="py-1 hover:text-green-500 transition-colors">
              ToyStat
            </a>
          </div>

          <div className="flex flex-col items-start">
            <ListHeader>Project</ListHeader>
            <div className="flex items-center py-1">
              <a href="https://datahonor.com/beer/" className="hover:text-green-500 transition-colors">
                Beer
              </a>
              <Badge className="ml-2 bg-red-400 dark:bg-red-800">
                Hot
              </Badge>
            </div>
            <a href="https://shenxiangzhuang.github.io/pysesd/" className="py-1 hover:text-green-500 transition-colors">
              [Py]S-ESD
            </a>
            <a href="https://shenxiangzhuang.github.io/mppt/" className="py-1 hover:text-green-500 transition-colors">
              MPPT
            </a>
            <a href="https://shenxiangzhuang.github.io/bleuscore/" className="py-1 hover:text-green-500 transition-colors">
              BleuScore
            </a>
          </div>
          
          <div className="flex flex-col items-start">
            <ListHeader>Odyssey</ListHeader>
            <a href="https://datahonor.com/odyssey/aiops/" className="py-1 hover:text-green-500 transition-colors">
              AIOps
            </a>
            <a href="https://datahonor.com/odyssey/mlsys/" className="py-1 hover:text-green-500 transition-colors">
              MlSys
            </a>
            <a href="https://datahonor.com/odyssey/chc/" className="py-1 hover:text-green-500 transition-colors">
              Crowdsourcing
            </a>
            <div className="flex items-center py-1">
              <a href="https://datahonor.com/odyssey/llm/" className="hover:text-green-500 transition-colors">
                LLM
              </a>
              <Badge className="ml-2 bg-green-400 dark:bg-green-800">
                New
              </Badge>
            </div>
          </div>
          
          <div className="flex flex-col items-start">
            <ListHeader>Contact</ListHeader>
            <a href="https://github.com/shenxiangzhuang" className="py-1 hover:text-green-500 transition-colors">
              Github
            </a>
            <a href="https://twitter.com/MathewShen42" className="py-1 hover:text-green-500 transition-colors">
              Twitter
            </a>
            <a href="https://linkedin.com/in/mathewshen" className="py-1 hover:text-green-500 transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto max-w-5xl px-4 py-10 md:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          <div className="mb-6 flex items-center justify-center">
            <Logo />
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
