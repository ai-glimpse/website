'use client'

import {
  Box,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react'
import { ReactElement } from 'react'
import { RiBarChartBoxLine, RiMindMap, RiBrainLine } from "react-icons/ri";
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
        maxW={{ base: 'full', md: '275px', lg: '320px' }}
        w={'full'}
        borderWidth="1px"
        borderRadius="xl"
        overflow="hidden"
        bg={active ? 'green.50' : 'white'}
        boxShadow={'md'}
        _hover={{
          transform: 'translateY(-5px)',
          transition: 'all 0.3s ease',
          boxShadow: 'lg',
        }}
        p={6}>
        <VStack spacing={4} align={'center'}>
          <Flex
            w={16}
            h={16}
            align={'center'}
            justify={'center'}
            color={active ? 'white' : 'gray.600'}
            rounded={'full'}
            bg={active ? 'green.400' : 'gray.100'}>
            {icon}
          </Flex>
          <VStack spacing={2} align={'center'} textAlign={'center'}>
            <Heading size="md" color={active ? 'green.600' : 'gray.700'}>
              {heading}
            </Heading>
            <Text fontSize={'sm'} color={'gray.500'}>
              {description}
            </Text>
          </VStack>
          <Text
            fontSize={'xs'}
            fontWeight={'bold'}
            color={active ? 'green.500' : 'gray.400'}
            textTransform={'uppercase'}
          >
            {active ? 'Active' : 'Coming Soon'}
          </Text>
        </VStack>
      </Box>
    </Link>
  )
}

export default function ToyAIMember() {
  return (
    <Box py={16} borderTop="1px" borderBottom="1px" borderColor="gray.200">
      <Container maxW={'6xl'}>
        <VStack spacing={8} as={Container} maxW={'3xl'} textAlign={'center'} mb={12}>
          <Heading fontSize={{ base: '3xl', sm: '4xl' }} fontWeight={'bold'} color={'gray.800'}>
            Explore Our AI Learning Toys
          </Heading>
          <Text color={'gray.600'} fontSize={{ base: 'sm', sm: 'lg' }}>
            Dive into the world of AI with our interactive learning paths. From statistics to deep learning, we've got you covered.
          </Text>
        </VStack>
        <Flex flexWrap="wrap" gridGap={8} justify="center">
          <Card
            heading={'ToyStat'}
            icon={<Icon as={RiBarChartBoxLine} w={8} h={8} />}
            description={'Master statistical methods from the ground up.'}
            href={'/toys/toystat'}
            active={false}
          />
          <Card
            heading={'ToyML'}
            icon={<Icon as={RiMindMap} w={8} h={8} />}
            description={'Explore machine learning algorithms hands-on.'}
            href={'/toys/toyml'}
            active={true}
          />
          <Card
            heading={'ToyDL'}
            icon={<Icon as={RiBrainLine} w={8} h={8} />}
            description={'Unravel the mysteries of deep learning.'}
            href={'/toys/toydl'}
            active={false}
          />
        </Flex>
      </Container>
    </Box>
  )
}