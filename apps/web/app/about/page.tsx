"use client";

import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  Link,  // Import Link from Chakra UI
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { Avatar } from "@/components/ui/avatar"
import { Tag } from "@/components/ui/tag"

const Logo = (props: any) => {
  return (
    <Avatar
      size="lg"
      name="AI Glimpse"
      src="https://avatars.githubusercontent.com/u/154221423"
    />
  );
};

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

function getCurrentYear(): number {
  const currentDate = new Date();
  return currentDate.getFullYear();
}

export default function LargeWithLogoCentered() {
  const currentYear = getCurrentYear();

  return (
    <Box asChild>
      <div style={{ borderBottom: "1px solid #E5E7EB" }}></div>
      <Container as={Stack} py={20} centerContent>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }}>
          <Stack align={"flex-start"}>
            <ListHeader>Resources</ListHeader>
            <Link href={"https://ai-glimpse.github.io/toyml"}>
              ToyML
            </Link>
            <Link href={"https://ai-glimpse.github.io/toydl"}>
              ToyDL
            </Link>
            <Link href={"https://ai-glimpse.github.io/toyllm"}>
              ToyLLM
            </Link>
            <Link href={"https://ai-glimpse.github.io/toystat/"}>
              ToyStat
            </Link>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Project</ListHeader>
            <Stack direction="row" align="center">
              <Link href={"https://datahonor.com/beer/"}>
                Beer
              </Link>
              <Tag
                size={"sm"}
                bg={"red.300"}
                ml={2}
                color={"white"}
              >
                Hot
              </Tag>
            </Stack>
            <Link href={"https://shenxiangzhuang.github.io/pysesd/"}>
              [Py]S-ESD
            </Link>
            <Link href={'https://shenxiangzhuang.github.io/mppt/'}>
              MPPT
            </Link>
            <Link href={'https://shenxiangzhuang.github.io/bleuscore/'}>
              BleuScore
            </Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Odyssey</ListHeader>
            <Link href={"https://datahonor.com/odyssey/aiops/"}>
              AIOps
            </Link>
            <Link href={"https://datahonor.com/odyssey/mlsys/"}>
              MlSys
            </Link>
            <Link href={"https://datahonor.com/odyssey/chc/"}>
              Crowdsourcing
            </Link>
            <Stack direction={"row"} align={"center"}>
              <Link href={"https://datahonor.com/odyssey/llm/"}>
                LLM
              </Link>
              <Tag
                size={"sm"}
                bg={"green.300"}
                ml={2}
                color={"white"}
              >
                New
              </Tag>
            </Stack>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Contact</ListHeader>
            <Link href={"https://github.com/shenxiangzhuang"}>
              Github
            </Link>
            <Link href={"https://twitter.com/MathewShen42"}>
              Twitter
            </Link>
            <Link href={"https://linkedin.com/in/mathewshen"}>
              LinkedIn
            </Link>
          </Stack>
        </SimpleGrid>
      </Container>
      <Box py={10}>
        <Flex
          align={"center"}
          _before={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: "gray.200",
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: "gray.200",
            flexGrow: 1,
            ml: 8,
          }}
        >
          <Logo />
        </Flex>
        <Text pt={6} fontSize={"sm"} textAlign={"center"}>
          © 2023~{currentYear} Mathew Shen. All rights reserved
        </Text>
      </Box>
    </Box>
  );
}