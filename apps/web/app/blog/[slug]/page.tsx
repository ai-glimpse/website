import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Box, Heading, Text, Container, VStack } from "@chakra-ui/react";

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join(process.cwd(), "app/content/blog"));

  return files.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }));
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), "app/content/blog", `${slug}.mdx`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { content, data: frontMatter } = matter(fileContents);

  return (
    <Box bg="gray.50" minHeight="100vh" py={16}>
      <Container maxW="4xl" bg="white" borderRadius="xl" boxShadow="2xl" p={8}>
        <VStack spacing={6} align="stretch">
          <Box borderBottom="4px solid" borderColor="pink.400" pb={4}>
            <Heading as="h1" size="2xl" mb={4} color="pink.600">
              {frontMatter.title}
            </Heading>
            <Text color="gray.500" fontSize="lg" fontStyle="italic">
              {frontMatter.date}
            </Text>
          </Box>
          <Box className="prose lg:prose-xl">
            <MDXRemote source={content} />
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}
