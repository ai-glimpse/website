'use client';

import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Icon,
  SimpleGrid,
  Button,
} from '@chakra-ui/react';
import { LightbulbIcon, UsersIcon, RocketIcon, HeartHandshakeIcon } from 'lucide-react';
import Link from 'next/link';

interface FeatureProps {
  title: string;
  text: string;
  iconName: 'LightbulbIcon' | 'UsersIcon' | 'RocketIcon' | 'HeartHandshakeIcon';
}

const Feature = ({ title, text, iconName }: FeatureProps): React.ReactElement => {
  const IconComponent =
    iconName === 'LightbulbIcon' ? LightbulbIcon :
    iconName === 'UsersIcon' ? UsersIcon :
    iconName === 'RocketIcon' ? RocketIcon :
    HeartHandshakeIcon;

  return (
    <VStack
      bg="white"
      p={6}
      borderRadius="lg"
      boxShadow="md"
      transition="all 0.3s"
      _hover={{ transform: 'translateY(-5px)', boxShadow: 'lg' }}
    >
      <Icon as={IconComponent} boxSize={12} color="pink.400" mb={4} />
      <Text fontWeight={700} fontSize="xl" mb={2} color="gray.700">{title}</Text>
      <Text color="gray.600" textAlign="center">{text}</Text>
    </VStack>
  );
};

export default function Page(): React.ReactElement {
  return (
    <Box bg="pink.50" py={20}>
      <Container maxW="6xl">
        <VStack spacing={16}>
          <VStack spacing={4} as={Container} maxW="3xl" textAlign="center">
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} fontWeight="bold" color="pink.600">
              Empowering AI Education
            </Heading>
            <Text color="gray.700" fontSize={{ base: 'lg', md: 'xl' }}>
              We're on a mission to democratize AI education, making it accessible,
              engaging, and practical for learners of all levels.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10} width="full">
            <Feature
              iconName="LightbulbIcon"
              title="Innovative Learning"
              text="Our unique 'toy' approach breaks down complex AI concepts into digestible, interactive modules."
            />
            <Feature
              iconName="UsersIcon"
              title="Community-Driven"
              text="Foster collaboration and growth in our vibrant learning community."
            />
            <Feature
              iconName="RocketIcon"
              title="Future-Ready Skills"
              text="Equip yourself with the skills needed for the AI-driven future."
            />
            <Feature
              iconName="HeartHandshakeIcon"
              title="Open Contribution"
              text="Join us in shaping the future of AI education through open collaboration."
            />
          </SimpleGrid>

          <Box
            bg="pink.100"
            p={8}
            borderRadius="xl"
            textAlign="center"
            boxShadow="xl"
            maxW="3xl"
            width="full"
          >
            <Heading as="h3" size="lg" mb={4} color="pink.700">
              Your Journey in AI Starts Here
            </Heading>
            <Text fontSize="lg" mb={6} color="gray.700">
              Whether you're taking your first steps in AI or looking to deepen your expertise,
              our platform offers the tools and community to support your growth. Dive in,
              experiment with our 'toys', and don't hesitate to share your insights or contribute to our project.
            </Text>
            <Button
              as={Link}
              href="/docs"
              bg="pink.500"
              color="white"
              size="lg"
              fontWeight="bold"
              _hover={{ bg: 'pink.600' }}
            >
              Start Learning
            </Button>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}