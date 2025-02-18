'use client'

import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react'

import {cosBase} from "@/app/components/Util";

interface Props {
  children: React.ReactNode
}

const Testimonial = (props: Props) => {
  const { children } = props

  return <Box>{children}</Box>
}

const TestimonialContent = (props: Props) => {
  const { children } = props

  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'lg'}
      p={8}
      rounded={'xl'}
      align={'center'}
      pos={'relative'}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: useColorModeValue('white', 'gray.800'),
        pos: 'absolute',
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}>
      {children}
    </Stack>
  )
}

const TestimonialHeading = (props: Props) => {
  const { children } = props

  return (
    <Heading as={'h3'} fontSize={{ base: 'xl', md: '2xl' }}>
      {children}
    </Heading>
  )
}

const TestimonialText = (props: Props) => {
  const { children } = props

  return (
    <Text
      textAlign={'center'}
      color={useColorModeValue('gray.600', 'gray.400')}
      fontSize={{ base: 'sm', md: 'md' }}>
      {children}
    </Text>
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
    <Flex align={'center'} mt={8} direction={'column'}>
      <Avatar src={src} mb={2} />
      <Stack spacing={-1} align={'center'}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
          {title}
        </Text>
      </Stack>
    </Flex>
  )
}

export default function WithSpeechBubbles() {
  return (
    <Box 
    // bg={useColorModeValue('gray.100', 'gray.700')}
    >
      <Container maxW={'7xl'} py={8} as={Stack} spacing={4} centerContent>
        <Stack spacing={1} align={'center'}>
          <Heading>Standing on the shoulders of giants</Heading>
          {/* <Text>What they are saying</Text> */}
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Understand by Create</TestimonialHeading>
              <TestimonialText>
                What I cannot create I do not understand.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                `${cosBase}/Richard_Feynman_Nobel.jpg`
              }
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
              src={
                `${cosBase}/Albert_Einstein.jpeg`
              }
              name={'Albert Einstein'}
              title={'Computer programmer'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>You just don't know it</TestimonialHeading>
              <TestimonialText>
              Not knowing something doesn't mean you're dumb — it just means you don't know it.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                `${cosBase}/Jamie_Zawinski.png`
              }
              name={'Jamie Zawinski'}
              title={'Computer programmer'}
            />
          </Testimonial>
          {/* <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>终身学习</TestimonialHeading>
              <TestimonialText>
                学习，创造，分享，学习，…
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://avatars.githubusercontent.com/u/17157965?v=4'
              }
              name={'Mathew Shen'}
              title={'Machine Learning Engineer'}
            />
          </Testimonial> */}
        </Stack>
      </Container>
    </Box>
  )
}