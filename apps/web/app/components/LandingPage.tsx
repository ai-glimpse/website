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


export default function LandingPage() {
  return (
    <>
    <Container maxW={'5xl'}>
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}>
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
          <Text as={'span'} color={'gray.500'}>
            <br /> from scratch
          </Text>
        </Heading>
        {/*<Text color={'gray.500'} maxW={'3xl'}>*/}
        {/*  Learning statistics, machine learning and deep learning from scratch!*/}
        {/*</Text>*/}
      </Stack>
    </Container>
      <ToyAIMember/>
    </>
  )
}
