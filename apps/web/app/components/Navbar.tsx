"use client";

import Link from "next/link";

import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  ButtonGroup,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import {
  EmailIcon,
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import { FaDiscord, FaGithub, FaTwitter, FaNewspaper } from "react-icons/fa";
import FlyoutNavbar from "./FlyoutNavbar";

export default function Navbar() {
  const listDisplay = useBreakpointValue({ base: "none", lg: "flex" });
  const navItems = [
    {
      label: "Twitter",
      icon: <FaTwitter />,
      link: "https://twitter.com/MathewShen42",
    },
    {
      label: "Github",
      icon: <FaGithub />,
      link: "https://github.com/ai-glimpse",
    },
    {
      label: "Email",
      icon: <EmailIcon />,
      link: "mailto:datahonor@gmail.com",
    },
  ];
  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Link href={"/"}>
            <Button
              textAlign={useBreakpointValue({ base: "center", md: "left" })}
              fontFamily={"heading"}
              color={useColorModeValue("gray.800", "white")}
              fontSize={{ base: "sm", sm: "sm", md: "lg" }}
              _hover={{
                bg: useColorModeValue("gray.100", "white"),
              }}
            >
              AI Glimpse
            </Button>
          </Link>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Flex ml={10}>
          <ButtonGroup variant="link" display={listDisplay}>
            {navItems.map((item) => (
              <IconButton
                key={item.label}
                as="a"
                href={item.link}
                target="_blank"
                icon={item.icon}
                variant="ghost"
                aria-label={item.label}
                px={2}
              />
            ))}
          </ButtonGroup>
        </Flex>

        {/* disable signin and signup */}
        {/* <SignInUp /> */}
      </Flex>
    </Box>
  );
}

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const SignInUp = () => {
  return (
    <Stack
      flex={{ base: 5, md: 7 }}
      justify={"flex-end"}
      direction={"row"}
      spacing={6}
    >
      <Button
        as={"a"}
        size={"sm"}
        fontSize={"sm"}
        fontWeight={400}
        color={"black"}
        bg={"gray.100"}
        href={"#"}
        _hover={{
          bg: "gray.400",
        }}
        // variant={'link'}
      >
        Sign In
      </Button>
      <Button
        as={"a"}
        // display={{ base: 'none', md: 'inline-flex' }}
        size={"sm"}
        fontSize={"sm"}
        fontWeight={400}
        color={"black"}
        bg={"gray.100"}
        href={"#"}
        _hover={{
          bg: "gray.400",
        }}
      >
        Sign Up
      </Button>
    </Stack>
  );
};

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");
  const navItems: Array<NavItem> = [
    // {
    //   label: "Toys",
    //   href: "#",
    //   children: [
    //     {
    //       label: "ToyML",
    //       subLabel: "Machine Learning Algorithms",
    //       href: "/toys/toyml",
    //     },
    //     {
    //       label: "ToyDL",
    //       subLabel: "Neural Networks in Deep Learning",
    //       href: "/toys/toydl",
    //     },
    //     {
    //       label: "ToyStat",
    //       subLabel: "Methods in Statistics",
    //       href: "/toys/toystat",
    //     },
    //   ],
    // },
    {
      label: "Docs",
      href: "/docs",
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
  return (
    <Stack direction={"row"} spacing={4}>
      {navItems.map((navItem) => (
        <Box key={navItem.label} alignSelf={"center"}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Button
                as="a"
                p={2}
                href={navItem.href ?? "#"}
                fontSize={{ base: "sm", sm: "sm", md: "lg" }}
                fontWeight={500}
                color={linkColor}
                bgColor={"white"}
                _hover={{
                  bg: "gray.100",
                }}
              >
                {navItem.label}
              </Button>
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
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Box
      as="a"
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
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
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Box>
  );
};
