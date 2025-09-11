# AI Glimpse Website

This is a [Next.js](https://nextjs.org/) project for the AI Glimpse educational platform, featuring interactive machine learning tutorials and documentation.

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) - Fast all-in-one JavaScript runtime

### Development

First, install dependencies and run the development server:

```bash
cd apps/web
bun install
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Available Scripts

- `bun dev` - Start development server
- `bun build` - Build for production
- `bun start` - Start production server
- `bun lint` - Run ESLint
- `bun lint:fix` - Fix ESLint errors
- `bun format` - Format code with Prettier
- `bun format:check` - Check if code is formatted
- `bun type-check` - Run TypeScript type checking

## Project Structure

```
apps/web/
├── app/                 # Next.js app directory
│   ├── components/     # React components
│   ├── docs/          # Documentation pages
│   ├── toys/          # Interactive ML tools
│   └── utils/         # Utility functions
├── components/        # Shared UI components
├── content/          # MDX content files
├── lib/              # Library code
└── public/           # Static assets
```

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Runtime**: Bun
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Documentation**: Fumadocs
- **Content**: MDX
- **Animations**: Framer Motion

## Acknowledgement

- [fumadocs](https://github.com/fuma-nama/fumadocs) - We use fumadocs to build our docs/blog, and we reuse some UI layout from fumadocs website.
