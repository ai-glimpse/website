'use client'

import Image from "next/image";
import ToyAIMember from "@/app/components/ToyAIMember";
import Typewriter from "@/app/components/text/typewriter";
import WithSpeechBubbles from './Testimonial';
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function LandingPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <section className="relative overflow-hidden py-12 md:py-20">
        {/* Background decoration */}
        <div className="absolute left-0 right-0 top-0 -z-10 h-[500px] w-full bg-gradient-to-b from-green-50/80 to-transparent dark:from-green-950/20"></div>
        
        <div className="container mx-auto max-w-5xl px-4">
          <motion.div 
            className="flex flex-col items-center space-y-6 py-8 text-center md:space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-bold text-3xl leading-tight sm:text-4xl md:text-6xl lg:text-7xl text-pretty">
              Learning <br />
              <Typewriter
                text={[
                  "Statistics",
                  "Statistical Machine Learning",
                  "Deep Learning",
                  "Reinforcement Learning",
                  "Natural Language Processing",
                  "Large Language Model",
                ]}
                speed={70}
                className="text-green-600 dark:text-green-400"
                waitTime={1500}
                deleteSpeed={40}
                cursorChar={"_"}
              />
              <span className="block text-gray-500 text-3xl sm:text-4xl md:text-6xl lg:text-7xl mt-2">
                from scratch
              </span>
            </h1>
            
            <motion.p 
              className="max-w-2xl text-gray-600 dark:text-gray-400 text-lg md:text-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Explore artificial intelligence through practical, hands-on learning resources
            </motion.p>
            
            <motion.div
              className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 mt-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <Button asChild size="lg" className="rounded-full px-8 bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600">
                <Link href="/docs/ml">
                  Explore Docs
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8 border-green-200 hover:bg-green-50 dark:border-green-800 dark:hover:bg-green-900/30">
                <Link href="/blog">
                  Read Blog
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      <ToyAIMember/>
      <WithSpeechBubbles/>
    </>
  )
}