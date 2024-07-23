"use client";

import { useEffect, useState } from "react";
import {
  Box,
  Heading,
  Text,
  Container,
  SimpleGrid,
  VStack,
  Spinner,
} from "@chakra-ui/react";
import BlogPostCard from "./BlogPostCard";

interface Post {
  slug: string;
  frontMatter: {
    title: string;
    date: string;
    excerpt?: string;
  };
}

export default function BlogContent() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        setIsLoading(true);
        const response = await fetch("/api/posts");
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError(
          "An error occurred while fetching posts. Please try again later.",
        );
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchPosts();
  }, []);

  return (
    <Box bg="gray.50" minHeight="100vh" py={16}>
      <Container maxW="6xl">
        <Heading
          as="h1"
          size="2xl"
          mb={12}
          textAlign="center"
          color="pink.500"
          fontWeight="extrabold"
          letterSpacing="tight"
        >
          Explore Our Fabulous Blog
        </Heading>
        {isLoading ? (
          <VStack>
            <Spinner size="xl" color="pink.500" />
            <Text>Loading posts...</Text>
          </VStack>
        ) : error ? (
          <Text color="red.500" textAlign="center">
            {error}
          </Text>
        ) : posts.length === 0 ? (
          <Text textAlign="center">No posts found.</Text>
        ) : (
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
            {posts.map((post) => (
              <BlogPostCard
                key={post.slug}
                slug={post.slug}
                title={post.frontMatter.title}
                date={post.frontMatter.date}
                excerpt={post.frontMatter.excerpt}
              />
            ))}
          </SimpleGrid>
        )}
      </Container>
    </Box>
  );
}
