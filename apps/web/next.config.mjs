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
  
  // Webpack configuration to handle punycode deprecation warnings
  webpack: (config, { isServer }) => {
    // Suppress punycode deprecation warnings
    config.ignoreWarnings = [
      ...(config.ignoreWarnings || []),
      {
        module: /node_modules/,
        message: /punycode/,
      },
    ];

    // Optional: Replace punycode with punycode.js for better compatibility
    config.resolve.alias = {
      ...config.resolve.alias,
      punycode: 'punycode.js',
    };

    return config;
  },
};

export default withMDX(config);
