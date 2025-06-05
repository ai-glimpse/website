/** @type {import('tailwindcss').Config} */
export default {
  // Tailwind v4 uses automatic content detection, but we can still specify if needed
  content: [
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './content/**/*.{md,mdx}',
    './mdx-components.{ts,tsx}',
    './node_modules/fumadocs-ui/dist/**/*.js',
  ],
};
