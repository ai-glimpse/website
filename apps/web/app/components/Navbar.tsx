"use client";

import Link from "next/link";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapsible,
  Icon,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";

import {
  PopoverContent,
  PopoverRoot,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  ChevronDownIcon,
  ChevronRightIcon,
  HamburgerIcon,
} from "@chakra-ui/icons";
import { FaGithub, FaTwitter } from "react-icons/fa";

export default function Navbar() {
  const { open, onToggle } = useDisclosure();

  return (
    <Box asChild>
      <Flex
        bg={"white"}
        color={"gray.600"}
        minH={"50px"}
        py={{ base: 1 }}
        px={{ base: 2, md: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={"gray.200"}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={<HamburgerIcon w={5} h={5} />}
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
            size="sm"
          />
        </Flex>
        <Flex
          flex={{ base: 1 }}
          justify={{ base: "center", md: "start" }}
          align={"center"}
        >
          <Text
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"heading"}
            color={"gray.800"}
            fontWeight="bold"
            fontSize={{ base: "md", md: "xl" }}
          >
            <Link href="/">AI Glimpse</Link>
          </Text>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
        >
          <IconButton
            as="a"
            // href="https://twitter.com/MathewShen42"
            target="_blank"
            icon={<FaTwitter />}
            variant="ghost"
            aria-label="Twitter"
            size="sm"
          />
          <IconButton
            as="a"
            // href="https://github.com/ai-glimpse"
            target="_blank"
            icon={<FaGithub />}
            variant="ghost"
            aria-label="GitHub"
            size="sm"
          />
          <IconButton
            as="a"
            href="mailto:datahonor@gmail.com"
            icon={<MdEmail />}
            variant="ghost"
            aria-label="Email"
            size="sm"
          />
        </Stack>
      </Flex>

      <Collapsible.Root open={open}>
        <MobileNav />
      </Collapsible.Root>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = "gray.600";
  const linkHoverColor = "gray.800";
  const popoverContentBgColor = "white";

  return (
    <Stack direction={"row"} >
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <PopoverRoot >
            <PopoverTrigger >
              <Link href={navItem.href ?? "#"}>
                <Text
                  p={2}
                  fontSize={"sm"}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: "none",
                    color: linkHoverColor,
                  }}
                >
                  {navItem.label}
                </Text>
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </PopoverRoot>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link href={href ?? "#"}>
      <Stack direction={"row"} align={"center"} role={"group"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: 1, transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack bg={"white"} p={2} display={{ md: "none" }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { open, onToggle } = useDisclosure();

  return (
    <Stack onClick={children && onToggle}>
      <Link href={href ?? "#"}>
        <Flex
          py={1}
          justify={"space-between"}
          align={"center"}
          _hover={{
            textDecoration: "none",
          }}
        >
          <Text fontWeight={600} color={"gray.600"} fontSize="sm">
            {label}
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={"all .25s ease-in-out"}
              transform={open ? "rotate(180deg)" : ""}
              w={4}
              h={4}
            />
          )}
        </Flex>
      </Link>

      <Collapsible.Root
        open={open}
        style={{ marginTop: "0!important" }}
      >
        <Stack
          mt={1}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={"gray.200"}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} href={child.href ?? "#"}>
                <Text py={1} fontSize="sm">
                  {child.label}
                </Text>
              </Link>
            ))}
        </Stack>
      </Collapsible.Root>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Docs",
    href: "/docs/ml",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "About",
    href: "/about",
  },
];
