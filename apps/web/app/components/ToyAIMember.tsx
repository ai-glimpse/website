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
    >
      <Link href={href}>
        <Card 
          className={`h-[280px] w-[280px] overflow-hidden rounded-xl p-6 shadow-md transition-all duration-300 ${active ? 'bg-green-50' : 'bg-white'}`}
        >
          <CardContent className="flex h-full flex-col items-center justify-between space-y-4 p-0">
            <motion.div
              className={`flex h-16 w-16 items-center justify-center rounded-full ${
                active ? 'bg-green-400 text-white' : 'bg-gray-100 text-gray-600'
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
                className={`text-md font-bold ${active ? 'text-green-600' : 'text-gray-700'}`}
                whileHover={{ scale: 1.05 }}
              >
                {heading}
              </motion.h3>
              <p className="text-sm text-gray-500">
                {description || ''}
              </p>
            </div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Badge variant={active ? "default" : "secondary"} className={`text-xs font-bold uppercase ${active ? 'bg-green-500' : 'bg-gray-200 text-gray-600'}`}>
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
    <div className="border-y border-gray-200 py-8">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          className="mb-12 flex flex-col items-center space-y-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl">
            Explore Our AI Learning Toys
          </h2>
        </motion.div>
        
        <div className="flex flex-wrap justify-center gap-6">
          <FeatureCard
            heading={'ToyStat'}
            icon={<CandlestickChart className="h-8 w-8" />}
            description={'Master statistical concepts from fundamentals to advanced methods'}
            href={'/docs/stat'}
            active={false}
            index={0}
          />
          <FeatureCard
            heading={'ToyML'}
            icon={<BrainCircuit className="h-8 w-8" />}
            description={'Build machine learning algorithms from scratch'}
            href={'/docs/ml'}
            active={true}
            index={1}
          />
          <FeatureCard
            heading={'ToyDL'}
            icon={<Network className="h-8 w-8" />}
            description={'Explore neural networks and deep learning principles'}
            href={'/docs/dl'}
            active={false}
            index={2}
          />
          <FeatureCard
            heading={'ToyNLP'}
            icon={<MessageSquare className="h-8 w-8" />}
            description={'Learn natural language processing techniques'}
            href={'/docs/nlp'}
            active={false}
            index={3}
          />
          <FeatureCard
            heading={'ToyLLM'}
            icon={<Bot className="h-8 w-8" />}
            description={'Understand large language models and their applications'}
            href={'/docs/llm'}
            active={false}
            index={4}
          />
          <FeatureCard
            heading={'ToyRL'}
            icon={<Gamepad2 className="h-8 w-8" />}
            description={'Implement reinforcement learning algorithms'}
            href={'/docs/rl'}
            active={false}
            index={5}
          />
        </div>
      </div>
    </div>
  );
}
