"use client";

import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { github } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { Box } from "@chakra-ui/react";

interface CodeBlockProps {
  children: string;
  className?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ children, className }) => {
  const language = className ? className.replace(/language-/, "") : "";

  // Customize the GitHub theme
  const customStyle = {
    ...github,
    hljs: {
      ...github.hljs,
      background: "#f6f8fa",
      padding: "16px",
    },
    'pre[class*="language-"]': {
      ...github['pre[class*="language-"]'],
      background: "#f6f8fa",
      margin: 0,
    },
    'code[class*="language-"]': {
      ...github['code[class*="language-"]'],
      background: "transparent",
      padding: 0,
    },
    ".linenumber": {
      minWidth: "1em",
      paddingRight: "1em",
      textAlign: "right",
      userSelect: "none",
      color: "#6e7781",
      borderRight: "1px solid #d0d7de",
      marginRight: "16px",
    },
  };

  return (
    <Box
      mb={6}
      mx="auto"
      width="90%"
      maxWidth="900px"
      borderRadius="md"
      overflow="hidden"
      border="1px solid #d0d7de"
      boxShadow="0 2px 4px rgba(0,0,0,0.1)"
      position="relative"
    >
      {language && (
        <Box
          position="absolute"
          top={2}
          right={2}
          bg="#e1e4e8"
          px={2}
          py={1}
          borderRadius="md"
          fontSize="xs"
          fontWeight="bold"
          color="#57606a"
        >
          {language}
        </Box>
      )}
      <SyntaxHighlighter
        language={language}
        style={customStyle}
        customStyle={{
          margin: 0,
          padding: "16px",
          fontSize: "14px",
          lineHeight: "1.5",
          background: "#f6f8fa",
        }}
        showLineNumbers={true}
        wrapLongLines={true}
      >
        {children.trim()}
      </SyntaxHighlighter>
    </Box>
  );
};

export default CodeBlock;
