'use client'

import Image from "next/image";
import ToyAIMember from "@/app/components/ToyAIMember";
import Typewriter from "@/app/components/text/typewriter";
import WithSpeechBubbles from './Testimonial';

export default function LandingPage() {
  return (
    <>
    <div className="container mx-auto max-w-5xl">
      <div className="flex flex-col items-center space-y-3 py-6 text-center md:space-y-4 md:py-8">
        <h1 className="font-semibold text-3xl leading-tight sm:text-4xl md:text-6xl">
          Learning <br />
          <Typewriter
            text={[
              "Statistics",
              "Machine Learning",
              "Deep Learning",
              "Large Language Model",
            ]}
            speed={70}
            className="text-green-500"
            waitTime={1500}
            deleteSpeed={40}
            cursorChar={"_"}
          />
          <span className="block text-gray-500 text-3xl sm:text-4xl md:text-6xl">
            <br /> from scratch
          </span>
        </h1>
      </div>
    </div>
    <ToyAIMember/>
    <WithSpeechBubbles/>
    </>
  )
}