'use client'

import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Icon,
  IconProps,
} from '@chakra-ui/react'
import Image from "next/image";
import ToyAIMember from "@/app/components/ToyAIMember";
import Typewriter from "@/app/components/text/typewriter";
import WithSpeechBubbles from './Testimonial';

export default function LandingPage() {
  return (
    <>
    <Container maxW={'5xl'}>
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 3, md: 4 }}
        py={{ base: 6, md: 8 }}>
        <Heading
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}>
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
          <Text as={'span'} color={'gray.500'} fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}>
            <br /> from scratch
          </Text>
        </Heading>
      </Stack>
    </Container>
    <ToyAIMember/>
    <WithSpeechBubbles/>
    </>
  )
}