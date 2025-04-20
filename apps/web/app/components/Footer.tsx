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
    <div>
      <div className="border-b border-gray-200"></div>
      <div className="container mx-auto py-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-4">
          <div className="flex flex-col items-start">
            <ListHeader>Resources</ListHeader>
            <a href="https://ai-glimpse.github.io/toyml" className="py-1">
              ToyML
            </a>
            <a href="https://ai-glimpse.github.io/toydl" className="py-1">
              ToyDL
            </a>
            <a href="https://ai-glimpse.github.io/toyllm" className="py-1">
              ToyLLM
            </a>
            <a href="https://ai-glimpse.github.io/toystat/" className="py-1">
              ToyStat
            </a>
          </div>

          <div className="flex flex-col items-start">
            <ListHeader>Project</ListHeader>
            <div className="flex items-center py-1">
              <a href="https://datahonor.com/beer/">
                Beer
              </a>
              <Badge className="ml-2 bg-red-400 dark:bg-red-800">
                Hot
              </Badge>
            </div>
            <a href="https://shenxiangzhuang.github.io/pysesd/" className="py-1">
              [Py]S-ESD
            </a>
            <a href="https://shenxiangzhuang.github.io/mppt/" className="py-1">
              MPPT
            </a>
            <a href="https://shenxiangzhuang.github.io/bleuscore/" className="py-1">
              BleuScore
            </a>
          </div>
          
          <div className="flex flex-col items-start">
            <ListHeader>Odyssey</ListHeader>
            <a href="https://datahonor.com/odyssey/aiops/" className="py-1">
              AIOps
            </a>
            <a href="https://datahonor.com/odyssey/mlsys/" className="py-1">
              MlSys
            </a>
            <a href="https://datahonor.com/odyssey/chc/" className="py-1">
              Crowdsourcing
            </a>
            <div className="flex items-center py-1">
              <a href="https://datahonor.com/odyssey/llm/">
                LLM
              </a>
              <Badge className="ml-2 bg-green-400 dark:bg-green-800">
                New
              </Badge>
            </div>
          </div>
          
          <div className="flex flex-col items-start">
            <ListHeader>Contact</ListHeader>
            <a href="https://github.com/shenxiangzhuang" className="py-1">
              Github
            </a>
            <a href="https://twitter.com/MathewShen42" className="py-1">
              Twitter
            </a>
            <a href="https://linkedin.com/in/mathewshen" className="py-1">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      
      <div className="py-10">
        <div className="flex items-center">
          <Separator className="mr-8 flex-grow" />
          <Logo />
          <Separator className="ml-8 flex-grow" />
        </div>
        <p className="pt-6 text-center text-sm">
          © 2023 ~{currentYear} Mathew Shen. All rights reserved
        </p>
      </div>
    </div>
  );
}
