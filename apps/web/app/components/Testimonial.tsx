'use client'

import { cosBase } from "@/app/components/Util";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

const floatAnimation = "animate-[float_6s_ease-in-out_infinite]";

interface Props {
  children: React.ReactNode
}

const Testimonial = (props: Props) => {
  const { children } = props

  return (
    <div 
      className="w-full transition-all duration-300 hover:-translate-y-1"
    >
      {children}
    </div>
  )
}

const TestimonialContent = (props: Props) => {
  const { children } = props

  return (
    <Card 
      className="relative flex h-[200px] w-full items-center justify-center rounded-2xl bg-gradient-to-br from-white to-gray-50 p-6 text-center shadow-xl transition-all duration-300 hover:shadow-2xl dark:from-gray-800 dark:to-gray-900 dark:border-gray-700 after:absolute after:bottom-[-16px] after:left-1/2 after:h-0 after:w-0 after:-translate-x-1/2 after:border-l-[16px] after:border-r-[16px] after:border-t-[16px] after:border-l-transparent after:border-r-transparent after:border-t-gray-50 dark:after:border-t-gray-900"
    >
      {children}
    </Card>
  )
}

const TestimonialHeading = (props: Props) => {
  const { children } = props

  return (
    <h3 
      className="mb-2 text-center text-lg font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent md:text-xl dark:from-teal-200 dark:to-cyan-200"
    >
      {children}
    </h3>
  )
}

const TestimonialText = (props: Props) => {
  const { children } = props

  return (
    <p
      className="flex h-[60px] items-center justify-center px-4 text-center text-sm italic text-gray-600 md:text-md dark:text-gray-400"
    >
      {children}
    </p>
  )
}

const TestimonialAvatar = ({
  src,
  name,
  title,
}: {
  src: string
  name: string
  title: string
}) => {
  return (
    <div 
      className={`mt-6 flex flex-col items-center ${floatAnimation}`}
    >
      <Avatar className="mb-2 h-14 w-14 border-4 border-white shadow-lg dark:border-gray-800">
        <AvatarImage 
          src={src} 
          alt={name} 
          className="object-cover object-center"
          onError={(e) => {
            // Handle image load error
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
          }}
        />
        <AvatarFallback className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-bold text-lg">
          {name.charAt(0)}{name.split(' ')[1]?.charAt(0) || ''}
        </AvatarFallback>
      </Avatar>
      <div className="flex flex-col items-center space-y-0">
        <span 
          className="text-md font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent dark:from-teal-200 dark:to-cyan-200"
        >
          {name}
        </span>
        <span 
          className="text-sm font-medium text-gray-600 dark:text-gray-400"
        >
          {title}
        </span>
      </div>
    </div>
  )
}

export default function WithSpeechBubbles() {
  return (
    <div>
      <div className="container mx-auto max-w-7xl py-12 space-y-8">
        <div className="flex flex-col items-center space-y-4">
          <h2
            className="mb-2 text-center text-2xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent md:text-3xl lg:text-4xl dark:from-teal-200 dark:to-cyan-200"
          >
            Standing on the shoulders of giants
          </h2>
          <Separator className="h-1 w-16 rounded-full bg-gradient-to-r from-teal-600 to-cyan-600 opacity-80 dark:from-teal-200 dark:to-cyan-200" />
        </div>
        <div
          className="flex flex-col space-y-8 px-4 md:flex-row md:space-x-4 md:space-y-0 md:px-6 lg:space-x-8"
        >
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Understand by Create</TestimonialHeading>
              <TestimonialText>
                What I cannot create I do not understand.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={`${cosBase}/Richard_Feynman_Nobel.jpg`}
              name={'Richard Feynman'}
              title={'Theoretical physicist'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Explain it simply</TestimonialHeading>
              <TestimonialText>
                If you can't explain it simply, you don't understand it well enough.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={`${cosBase}/Albert_Einstein.jpeg`}
              name={'Albert Einstein'}
              title={'Theoretical physicist'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>You just don't know it</TestimonialHeading>
              <TestimonialText>
                Not knowing something doesn't mean you're dumb
                — it just means you don't know it.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={`${cosBase}/Jamie_Zawinski.png`}
              name={'Jamie Zawinski'}
              title={'Computer programmer'}
            />
          </Testimonial>
        </div>
      </div>
    </div>
  )
}