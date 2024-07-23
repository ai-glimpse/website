"use client";

import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Box } from "@chakra-ui/react";

interface CodeBlockProps {
  children: string;
  className?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ children, className }) => {
  const language = className ? className.replace(/language-/, "") : "";

  // Customize the nightOwl theme
  const customStyle = {
    ...nightOwl,
    'pre[class*="language-"]': {
      ...nightOwl['pre[class*="language-"]'],
      background: "#011627",
      margin: 0,
      padding: 0,
    },
    'code[class*="language-"]': {
      ...nightOwl['code[class*="language-"]'],
      background: "transparent",
      padding: 0,
    },
    'pre[class*="language-"] > code': {
      border: "none",
    },
    ':not(pre) > code[class*="language-"]': {
      border: "none",
      padding: 0,
    },
    // Reset table styles
    'pre[class*="language-"] table': {
      margin: 0,
      padding: 0,
      borderCollapse: "collapse",
      borderSpacing: 0,
    },
    'pre[class*="language-"] tbody': {
      margin: 0,
      padding: 0,
      border: "none",
    },
    'pre[class*="language-"] tr': {
      margin: 0,
      padding: 0,
      border: "none",
    },
    'pre[class*="language-"] td': {
      margin: 0,
      padding: 0,
      border: "none",
    },
    // Ensure line numbers don't have a different background
    ".linenumber": {
      minWidth: "1em",
      paddingRight: "1em",
      textAlign: "right",
      userSelect: "none",
      background: "transparent !important",
    },
  };

  return (
    <Box mb={4} borderRadius="md" overflow="hidden">
      <SyntaxHighlighter
        language={language}
        style={customStyle}
        customStyle={{
          margin: 0,
          padding: "20px",
          fontSize: "14px",
          lineHeight: "1.5",
          background: "#011627",
        }}
        showLineNumbers={true}
        wrapLines={true}
        lineProps={{
          style: {
            wordBreak: "break-all",
            whiteSpace: "pre-wrap",
            border: "none",
            margin: 0,
            padding: 0,
          },
        }}
        codeTagProps={{
          style: {
            display: "block",
            background: "transparent",
          },
        }}
      >
        {children.trim()}
      </SyntaxHighlighter>
    </Box>
  );
};

export default CodeBlock;
