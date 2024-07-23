"use client";

import { useEffect, useState } from "react";
import { Box, Heading, Text, Container, VStack } from "@chakra-ui/react";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import CodeBlock from "./CodeBlock";

interface BlogPostContentProps {
  slug: string;
}

const components = {
  code: CodeBlock,
};

export default function BlogPostContent({ slug }: BlogPostContentProps) {
  const [postData, setPostData] = useState<any>(null);

  useEffect(() => {
    async function fetchPost() {
      const response = await fetch(`/api/posts/${slug}`);
      const data = await response.json();
      const mdxSource = await serialize(data.content);
      setPostData({ ...data, mdxSource });
    }
    fetchPost();
  }, [slug]);

  if (!postData) return <div>Loading...</div>;

  return (
    <Box bg="gray.50" minHeight="100vh" py={16}>
      <Container maxW="4xl" bg="white" borderRadius="xl" boxShadow="2xl" p={8}>
        <VStack spacing={6} align="stretch">
          <Box borderBottom="4px solid" borderColor="pink.400" pb={4}>
            <Heading as="h1" size="2xl" mb={4} color="pink.600">
              {postData.frontMatter.title}
            </Heading>
            <Text color="gray.500" fontSize="lg" fontStyle="italic">
              {postData.frontMatter.date}
            </Text>
          </Box>
          <Box className="prose lg:prose-xl">
            <MDXRemote {...postData.mdxSource} components={components} />
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}
