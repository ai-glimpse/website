'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import Typewriter from '@/app/components/text/typewriter';
import ToyAIMember from '@/app/components/ToyAIMember';
import { Button } from '@/components/ui/button';

import WithSpeechBubbles from './Testimonial';

export default function LandingPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex w-full flex-col">
      <section className="relative overflow-hidden bg-white py-16 md:py-24 dark:bg-gray-900">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 left-0 -z-10 h-[500px] w-full bg-gradient-to-b from-green-50/80 to-transparent dark:from-green-950/20"></div>

        <div className="container mx-auto max-w-5xl px-4">
          <motion.div
            className="flex flex-col items-center space-y-6 py-8 text-center md:space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl leading-tight font-bold text-pretty sm:text-4xl md:text-6xl lg:text-7xl">
              Learning <br />
              <Typewriter
                text={[
                  'Statistics',
                  'Statistical Machine Learning',
                  'Deep Learning',
                  'Reinforcement Learning',
                  'Natural Language Processing',
                  'Large Language Model',
                ]}
                speed={70}
                className="text-green-600 dark:text-green-400"
                waitTime={1500}
                deleteSpeed={40}
                cursorChar={'_'}
              />
              <span className="mt-2 block text-3xl text-gray-500 sm:text-4xl md:text-6xl lg:text-7xl">
                from scratch
              </span>
            </h1>

            <motion.p
              className="max-w-2xl text-lg text-gray-600 md:text-xl dark:text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Explore artificial intelligence through practical, hands-on
              learning resources
            </motion.p>

            <motion.div
              className="mt-4 flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <Button
                asChild
                size="lg"
                className="rounded-full bg-green-600 px-8 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600"
              >
                <Link href="/docs/ml">
                  Explore Docs
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full border-green-200 px-8 hover:bg-green-50 dark:border-green-800 dark:hover:bg-green-900/30"
              >
                <Link href="/blog">Read Blog</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <ToyAIMember />
      <WithSpeechBubbles />
    </div>
  );
}
