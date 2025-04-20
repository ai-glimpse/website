'use client';

import { ReactElement } from 'react';
import {
  BrainCircuit,
  Network,
  CandlestickChart,
  BotMessageSquareIcon,
  type LucideIcon,
} from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface CardProps {
  heading: string;
  description: string;
  icon: ReactElement;
  href: string;
  active: boolean;
}

const FeatureCard = ({ heading, description, icon, href, active }: CardProps) => {
  return (
    <Link href={href}>
      <Card 
        className={`w-full overflow-hidden rounded-xl p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:max-w-[275px] lg:max-w-[320px] ${active ? 'bg-green-50' : 'bg-white'}`}
      >
        <CardContent className="flex flex-col items-center space-y-4 p-0">
          <div
            className={`flex h-16 w-16 items-center justify-center rounded-full ${
              active ? 'bg-green-400 text-white' : 'bg-gray-100 text-gray-600'
            }`}
          >
            {icon}
          </div>
          <div className="flex flex-col items-center space-y-2 text-center">
            <h3 className={`text-md font-bold ${active ? 'text-green-600' : 'text-gray-700'}`}>
              {heading}
            </h3>
            <p className="text-sm text-gray-500">
              {description}
            </p>
          </div>
          <Badge variant={active ? "default" : "secondary"} className={`text-xs font-bold uppercase ${active ? 'bg-green-500' : 'bg-gray-200 text-gray-600'}`}>
            {active ? 'Active' : 'Coming Soon'}
          </Badge>
        </CardContent>
      </Card>
    </Link>
  );
};

export default function ToyAIMember() {
  return (
    <div className="border-y border-gray-200 py-8">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col items-center space-y-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl">
            Explore Our AI Learning Toys
          </h2>
        </div>
        <div className="flex flex-col items-stretch justify-center space-y-8 lg:flex-row lg:space-x-8 lg:space-y-0">
          <div className="flex flex-col items-stretch justify-center space-y-8 md:flex-row md:space-x-8 md:space-y-0">
            <FeatureCard
              heading={'ToyStat'}
              icon={<CandlestickChart className="h-8 w-8" />}
              description={'Master statistical methods from the ground up.'}
              href={'/docs/stat'}
              active={false}
            />
            <FeatureCard
              heading={'ToyML'}
              icon={<BrainCircuit className="h-8 w-8" />}
              description={'Explore machine learning algorithms hands-on.'}
              href={'/docs/ml'}
              active={true}
            />
          </div>
          <div className="flex flex-col items-stretch justify-center space-y-8 md:flex-row md:space-x-8 md:space-y-0">
            <FeatureCard
              heading={'ToyDL'}
              icon={<Network className="h-8 w-8" />}
              description={
                'Unravel the mysteries of deep learning from scratch.'
              }
              href={'/docs/dl'}
              active={false}
            />
            <FeatureCard
              heading={'ToyLLM'}
              icon={<BotMessageSquareIcon className="h-8 w-8" />}
              description={'Unravel the mysteries of LLM from scratch.'}
              href={'/docs/llm'}
              active={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
