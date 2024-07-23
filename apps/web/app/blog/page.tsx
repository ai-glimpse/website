import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import {
  Box,
  Heading,
  VStack,
  Text,
  Container,
  SimpleGrid,
  Badge,
} from "@chakra-ui/react";

async function getPostsData() {
  const blogDir = path.join(process.cwd(), "app/content/blog");
  const files = fs.readdirSync(blogDir);

  const posts = files.map((filename) => {
    const slug = filename.replace(".mdx", "");
    const fullPath = path.join(blogDir, filename);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data: frontMatter } = matter(fileContents);

    return {
      slug,
      frontMatter,
    };
  });

  return posts;
}

export default async function BlogIndex() {
  const posts = await getPostsData();

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
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} passHref>
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
                    {post.frontMatter.title}
                  </Heading>
                  <Text color="gray.500" fontSize="sm">
                    {post.frontMatter.date}
                  </Text>
                  {post.frontMatter.excerpt && (
                    <Text noOfLines={3} color="gray.600">
                      {post.frontMatter.excerpt}
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
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
