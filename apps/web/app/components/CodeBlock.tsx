"use client";

import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { Box } from "@chakra-ui/react";

interface CodeBlockProps {
  children: string;
  className?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ children, className }) => {
  const language = className ? className.replace(/language-/, "") : "";

  // Custom theme with light background and contrasting colors
  const customStyle = {
    'code[class*="language-"]': {
      color: "#24292e",
      background: "none",
      fontFamily: "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
      textAlign: "left",
      whiteSpace: "pre",
      wordSpacing: "normal",
      wordBreak: "normal",
      wordWrap: "normal",
      lineHeight: "1.5",
      tabSize: "4",
      hyphens: "none",
    },
    'pre[class*="language-"]': {
      color: "#24292e",
      background: "#f6f8fa",
      fontFamily: "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
      textAlign: "left",
      whiteSpace: "pre",
      wordSpacing: "normal",
      wordBreak: "normal",
      wordWrap: "normal",
      lineHeight: "1.5",
      tabSize: "4",
      hyphens: "none",
      padding: "1em",
      margin: "0.5em 0",
      overflow: "auto",
      borderRadius: "0.3em",
    },
    ':not(pre) > code[class*="language-"]': {
      background: "#f6f8fa",
      padding: "0.1em 0.3em",
      borderRadius: "0.3em",
      whiteSpace: "normal",
    },
    comment: { color: "#6a737d" },
    punctuation: { color: "#24292e" },
    property: { color: "#005cc5" },
    selector: { color: "#005cc5" },
    "attr-name": { color: "#6f42c1" },
    string: { color: "#032f62" },
    char: { color: "#032f62" },
    builtin: { color: "#e36209" },
    inserted: { color: "#22863a" },
    operator: { color: "#d73a49" },
    entity: { color: "#d73a49", cursor: "help" },
    url: { color: "#005cc5" },
    ".language-css .token.string": { color: "#032f62" },
    ".style .token.string": { color: "#032f62" },
    variable: { color: "#e36209" },
    boolean: { color: "#005cc5" },
    number: { color: "#005cc5" },
    constant: { color: "#005cc5" },
    symbol: { color: "#005cc5" },
    "attr-value": { color: "#032f62" },
    keyword: { color: "#d73a49" },
    atrule: { color: "#d73a49" },
    function: { color: "#6f42c1" },
    "class-name": { color: "#6f42c1" },
    regex: { color: "#032f62" },
    important: { color: "#e36209", fontWeight: "bold" },
    bold: { fontWeight: "bold" },
    italic: { fontStyle: "italic" },
    ".linenumber": {
      minWidth: "1em",
      paddingRight: "1em",
      textAlign: "right",
      userSelect: "none",
      color: "#6a737d",
      borderRight: "1px solid #e1e4e8",
      marginRight: "16px",
    },
  };

  return (
    <Box
      mb={6}
      mx="auto"
      width="100%"
      maxWidth="900px"
      borderRadius="md"
      overflow="hidden"
      border="1px solid #e1e4e8"
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
          color="#24292e"
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
