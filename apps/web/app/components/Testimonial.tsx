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
  keyframes,
} from '@chakra-ui/react'

import {cosBase} from "@/app/components/Util";

// Subtle floating animation
const float = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`

interface Props {
  children: React.ReactNode
}

const Testimonial = (props: Props) => {
  const { children } = props

  return (
    <Box 
      width="100%"
      transition="all 0.3s ease"
      _hover={{
        transform: 'translateY(-5px)'
      }}
    >
      {children}
    </Box>
  )
}

const TestimonialContent = (props: Props) => {
  const { children } = props

  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'xl'}
      p={6} // Reduced padding
      rounded={'2xl'}
      align={'center'}
      pos={'relative'}
      height="200px" // Reduced height
      width="100%"
      justifyContent="center"
      transition="all 0.3s ease"
      background={useColorModeValue(
        'linear-gradient(to bottom right, white, #f7fafc)',
        'linear-gradient(to bottom right, gray.800, gray.900)'
      )}
      borderWidth="1px"
      borderColor={useColorModeValue('gray.200', 'gray.700')}
      _hover={{
        boxShadow: '2xl',
      }}
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
        borderTopColor: useColorModeValue('#f7fafc', 'gray.900'),
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
    <Heading 
      as={'h3'} 
      fontSize={{ base: 'lg', md: 'xl' }} // Slightly reduced font size
      mb={2} // Reduced margin
      textAlign="center"
      bgGradient="linear(to-r, blue.400, purple.500)"
      bgClip="text"
      fontWeight="bold"
    >
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
      fontSize={{ base: 'sm', md: 'md' }} // Slightly reduced font size
      height="60px" // Reduced height
      display="flex"
      alignItems="center"
      justifyContent="center"
      fontStyle="italic"
      px={4}
    >
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
    <Flex 
      align={'center'} 
      mt={6} // Reduced margin
      direction={'column'}
      animation={`${float} 6s ease-in-out infinite`}
    >
      <Avatar 
        src={src} 
        mb={2} 
        size="lg" // Slightly reduced size
        boxShadow="lg"
        border="4px solid"
        borderColor={useColorModeValue('white', 'gray.800')}
      />
      <Stack spacing={0} align={'center'}>
        <Text 
          fontWeight={700}
          fontSize="md" // Reduced font size
          bgGradient="linear(to-r, blue.400, purple.500)"
          bgClip="text"
        >
          {name}
        </Text>
        <Text 
          fontSize={'sm'} // Reduced font size
          color={useColorModeValue('gray.600', 'gray.400')}
          fontWeight="medium"
        >
          {title}
        </Text>
      </Stack>
    </Flex>
  )
}

export default function WithSpeechBubbles() {
  return (
    <Box>
      <Container maxW={'7xl'} py={12} as={Stack} spacing={8}> {/* Reduced padding */}
        <Stack spacing={4} align={'center'}>
          <Heading
            fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }} // Reduced font sizes
            bgGradient="linear(to-r, blue.400, purple.500)"
            bgClip="text"
            fontWeight="bold"
            textAlign="center"
            mb={2} // Reduced margin
          >
            Standing on the shoulders of giants
          </Heading>
          <Box 
            w={16} 
            h={1} 
            bgGradient="linear(to-r, blue.400, purple.500)" 
            rounded="full"
          />
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 8, md: 4, lg: 8 }} // Adjusted spacing
          align="stretch"
          justify="center"
          px={{ base: 4, md: 6 }}
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
        </Stack>
      </Container>
    </Box>
  )
}