'use client'

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { ReactElement } from 'react'
import { FcBearish, FcGenealogy, FcMindMap} from "react-icons/fc";

import Link from "next/link";

interface CardProps {
  heading: string
  description: string
  icon: ReactElement
  href: string
  active: boolean
}

const Card = ({ heading, description, icon, href, active }: CardProps) => {
  return (
    <Link href={href}>
      <Box
        maxW={{ base: 'full', md: '275px', lg: '500px' }}
        w={'full'}
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        bg={active ? 'green.100' : 'gray.300' }
        _hover={{ bg: active ? 'green.200' : 'red.100' }}
        p={5}>
        <Stack align={'center'} spacing={2}>
          <Flex
            w={16}
            h={16}
            align={'center'}
            justify={'center'}
            color={'white'}
            rounded={'full'}
            bg={useColorModeValue('gray.100', 'gray.700')}>
            {icon}
          </Flex>
          <Box mt={2} alignContent={'center'} textAlign={'center'}>
            <Heading size="md">{heading}</Heading>
            <Text mt={1} fontSize={'sm'}>
              {description}
            </Text>
          </Box>
          {/*<Button variant={'link'} colorScheme={'blue'} size={'sm'}>*/}
          {/*  <Link href={href}>Get started!</Link>*/}
          {/*</Button>*/}
        </Stack>
      </Box>
    </Link>
  )
}

export default function ToyAIMember() {
  return (
    <Box p={1}>
      {/*<Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>*/}
      {/*  <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>*/}
      {/*    The Toys*/}
      {/*  </Heading>*/}
      {/*  <Text color={'gray.600'} fontSize={{ base: 'sm', sm: 'lg' }}>*/}
      {/*    The members of toy park!*/}
      {/*  </Text>*/}
      {/*</Stack>*/}

      <Container maxW={'5xl'} mt={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          <Card
            heading={'(TODO)ToyStat'}
            icon={<Icon as={FcBearish} w={10} h={10} />}
            description={'Learning Statistics Method from scratch.'}
            href={'/toystat'}
            active={false}
          />
          <Card
            heading={'(WIP)ToyML'}
            icon={<Icon as={FcGenealogy} w={10} h={10} />}
            description={'Learning Machine learning from scratch.'}
            href={'/toyml'}
            active={true}
          />
          <Card
            heading={'(Coming)ToyDL'}
            icon={<Icon as={FcMindMap} w={10} h={10} />}
            description={'Learning Deep learning from scratch.'}
            href={'/toydl'}
            active={false}
          />
        </Flex>
      </Container>
    </Box>
  )
}
