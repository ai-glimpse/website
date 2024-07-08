import type { MDXComponents } from "mdx/types";
import {
  Box,
  Code,
  Heading,
  Image,
  ListItem,
  OrderedList,
  Text,
  UnorderedList,
  chakra,
  useColorModeValue,
} from "@chakra-ui/react";

export const PageHeading = ({ children, ...rest }) => (
  <Heading
    textAlign={"center"}
    fontSize={{ base: "6xl", sm: "8xl", md: "9xl", "2xl": "10xl" }}
    color={"pink.500"}
    fontWeight="medium"
    letterSpacing={{ base: -3, md: -5 }}
    lineHeight={1}
    ml={{ base: 0, md: -2 }}
    {...rest}
  >
    {children}
  </Heading>
);

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // h1: ({ children, ...props }) => (
    //   <h1 className="text-5xl text-center" {...props}>
    //     {children}
    //   </h1>
    // ),
    // https://github.com/ryanhefner/ryanhefner/blob/85bcf79f3b7ee0626f76cd8cb12b0310cdfaee6b/apps/site/src/mdx-components.tsx#L13
    h1: ({ children }) => (
      <PageHeading
        fontSize={{ base: "6xl", md: "10xl" }}
        // maxW="container.xl"
        mt={{ base: 12, md: 16 }}
        mb={{ base: 16, md: 24 }}
        ml="auto"
        mx="auto"
        w="full"
      >
        {children}
      </PageHeading>
    ),
    h2: ({ children }) => (
      <PageHeading
        as="h2"
        fontSize={{ base: "3xl", md: "4xl" }}
        fontWeight="medium"
        // lineHeight="1.1"
        // maxW="container.md"
        mt={{ base: 8, md: 16 }}
        mb={4}
        mx="auto"
        w="full"
      >
        {children}
      </PageHeading>
    ),
    h3: ({ children }) => (
      <PageHeading
        as="h3"
        fontSize={{ base: "2xl", md: "3xl" }}
        fontWeight="medium"
        letterSpacing={-1}
        lineHeight="1.1"
        // maxW="container.md"
        mt={{ base: 8, md: 12 }}
        mb={4}
        mx="auto"
        w="full"
        align="center"
      >
        {children}
      </PageHeading>
    ),
    h4: ({ children }) => (
      <PageHeading
        as="h4"
        color="gray.500"
        fontSize={{ base: "xl", md: "2xl" }}
        fontWeight="medium"
        letterSpacing={-0.5}
        maxW="container.md"
        mt={{ base: 8, md: 12 }}
        mb={4}
        mx="auto"
        w="full"
        align="center"
      >
        {children}
      </PageHeading>
    ),
    h5: ({ children }) => (
      <PageHeading
        as="h5"
        color="gray.500"
        fontSize={{ base: "lg", md: "xl" }}
        fontWeight="medium"
        letterSpacing={-0.5}
        maxW="container.md"
        mt={{ base: 6, md: 10 }}
        mb={4}
        mx="auto"
        w="full"
        align="center"
      >
        {children}
      </PageHeading>
    ),
    p: ({ children, ...props }) => (
      <p className="ml-72 mr-72" {...props}>
        {children}
      </p>
    ),
    ul: ({ children, ...props }) => (
      <ul className="list-disc pl-8" {...props}>
        {children}
      </ul>
    ),
    li: ({ children, ...props }) => (
      <li
        className="mb-1.5 text-sm text-foreground-muted md:text-base"
        {...props}
      >
        {children}
      </li>
    ),
    strong: ({ children, ...props }) => (
      <strong className="text-foreground" {...props}>
        {children}
      </strong>
    ),
    ...components,
  };
}
