import { createMDX } from 'fumadocs-mdx/next';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  // Set the correct workspace root to silence the lockfile warning
  outputFileTracingRoot: join(__dirname, '../../'),
};

export default withMDX(config);
