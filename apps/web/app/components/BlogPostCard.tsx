"use client";

import { Box, VStack, Heading, Text, Badge } from "@chakra-ui/react";
import Link from "next/link";

interface BlogPostCardProps {
  slug: string;
  title: string;
  date: string;
  excerpt?: string;
}

export default function BlogPostCard({
  slug,
  title,
  date,
  excerpt,
}: BlogPostCardProps) {
  return (
    <Link href={`/blog/${slug}`} passHref>
      <Box
        as="a"
        bg="white"
        borderRadius="xl"
        overflow="hidden"
        boxShadow="xl"
        transition="all 0.3s"
        _hover={{ transform: "translateY(-8px)", boxShadow: "2xl" }}
      >
        <Box bg="pink.400" h={3} />
        <VStack align="start" p={6} spacing={4}>
          <Heading as="h3" size="md" color="pink.600">
            {title}
          </Heading>
          <Text color="gray.500" fontSize="sm">
            {date}
          </Text>
          {excerpt && (
            <Text noOfLines={3} color="gray.600">
              {excerpt}
            </Text>
          )}
          <Badge
            colorScheme="pink"
            fontSize="sm"
            fontWeight="bold"
            px={3}
            py={1}
            borderRadius="full"
          >
            Read more
          </Badge>
        </VStack>
      </Box>
    </Link>
  );
}
