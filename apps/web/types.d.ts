// Type declarations for CSS imports from node modules
declare module '*.css' {
  const content: string;
  export default content;
}

// Specific declaration for KaTeX CSS
declare module 'katex/dist/katex.css';
