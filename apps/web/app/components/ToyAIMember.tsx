'use client';

import { ReactElement, useEffect, useState } from 'react';
import {
  BrainCircuit,
  Network,
  CandlestickChart,
  MessageSquare,
  Bot,
  Gamepad2,
  type LucideIcon,
} from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

interface CardProps {
  heading: string;
  description?: string;
  icon: ReactElement;
  href: string;
  active: boolean;
  index: number;
}

const FeatureCard = ({ heading, description, icon, href, active, index }: CardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.1)" 
      }}
      className="w-full sm:w-auto"
    >
      <Link href={href} className="block h-full">
        <Card 
          className={`h-full min-h-[260px] w-full sm:w-[260px] md:w-[280px] overflow-hidden rounded-xl p-5 md:p-6 shadow-md transition-all duration-300 ${
            active 
              ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800' 
              : 'bg-white dark:bg-gray-800'
          }`}
        >
          <CardContent className="flex h-full flex-col items-center justify-between space-y-4 p-0">
            <motion.div
              className={`flex h-14 w-14 items-center justify-center rounded-full ${
                active 
                  ? 'bg-green-500 text-white dark:bg-green-600' 
                  : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300'
              }`}
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.7 }}
            >
              <motion.div
                animate={active ? { 
                  scale: [1, 1.1, 1],
                } : {}}
                transition={{ 
                  repeat: Infinity, 
                  duration: 2,
                  ease: "easeInOut"
                }}
              >
                {icon}
              </motion.div>
            </motion.div>
            <div className="flex flex-col items-center space-y-2 text-center">
              <motion.h3 
                className={`text-lg font-bold ${
                  active 
                    ? 'text-green-600 dark:text-green-400' 
                    : 'text-gray-800 dark:text-gray-200'
                }`}
                whileHover={{ scale: 1.05 }}
              >
                {heading}
              </motion.h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {description || ''}
              </p>
            </div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Badge variant={active ? "default" : "secondary"} className={`text-xs font-bold uppercase ${
                active 
                  ? 'bg-green-500 dark:bg-green-600' 
                  : 'bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-300'
              }`}>
                {active ? 'Active' : 'Coming Soon'}
              </Badge>
            </motion.div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
};

export default function ToyAIMember() {
  // State to control staggered animation
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  return (
    <section className="border-t-0 border-b-0 py-16 md:py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <motion.div 
          className="mb-12 flex flex-col items-center space-y-4 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white sm:text-4xl">
            Explore Our AI Learning Toys
          </h2>
          <p className="max-w-2xl text-gray-600 dark:text-gray-400">
            Interactive tools to help you understand AI concepts through hands-on experience
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          <FeatureCard
            heading={'ToyStat'}
            icon={<CandlestickChart className="h-7 w-7" />}
            description={'Master statistical concepts from fundamentals to advanced methods'}
            href={'/docs/stat'}
            active={false}
            index={0}
          />
          <FeatureCard
            heading={'ToyML'}
            icon={<BrainCircuit className="h-7 w-7" />}
            description={'Build machine learning algorithms from scratch'}
            href={'/docs/ml'}
            active={true}
            index={1}
          />
          <FeatureCard
            heading={'ToyDL'}
            icon={<Network className="h-7 w-7" />}
            description={'Explore neural networks and deep learning principles'}
            href={'/docs/dl'}
            active={false}
            index={2}
          />
          <FeatureCard
            heading={'ToyNLP'}
            icon={<MessageSquare className="h-7 w-7" />}
            description={'Learn natural language processing techniques'}
            href={'/docs/nlp'}
            active={false}
            index={3}
          />
          <FeatureCard
            heading={'ToyLLM'}
            icon={<Bot className="h-7 w-7" />}
            description={'Understand large language models and their applications'}
            href={'/docs/llm'}
            active={false}
            index={4}
          />
          <FeatureCard
            heading={'ToyRL'}
            icon={<Gamepad2 className="h-7 w-7" />}
            description={'Implement reinforcement learning algorithms'}
            href={'/docs/rl'}
            active={false}
            index={5}
          />
        </div>
      </div>
    </section>
  );
}
