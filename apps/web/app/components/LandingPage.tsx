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
          Learning <strong className="underline decoration-pink-300/[.99]">A</strong>rtificial <strong className="underline decoration-pink-300/[.99]">I</strong>ntelligence <br />
          <Text as={'span'} color={'pink.300'}>
           from scratch
          </Text>
        </Heading>
        <Text color={'gray.500'} maxW={'3xl'}>
          Learning statistics, machine learning and deep learning from scratch!
        </Text>
      </Stack>
    </Container>
    <ToyAIMember />
    </>
  )
}
