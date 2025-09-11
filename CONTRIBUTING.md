# Contributing to AI Glimpse Website

Thank you for your interest in contributing to the AI Glimpse website! This document outlines the development workflow and guidelines.

## Development Setup

1. **Prerequisites**
   - [Bun](https://bun.sh/) - Fast all-in-one JavaScript runtime
   - Node.js 18+ (for compatibility)

2. **Setup**
   ```bash
   git clone <repository-url>
   cd website/apps/web
   bun install
   ```

3. **Development**
   ```bash
   bun dev
   ```

## Code Quality

We use several tools to maintain code quality:

- **ESLint** - Code linting
- **Prettier** - Code formatting
- **TypeScript** - Type checking

### Before Committing

Run these commands to ensure your code meets our standards:

```bash
# Type checking
bun run type-check

# Linting
bun run lint

# Formatting
bun run format

# Or run all checks
bun run lint && bun run type-check && bun run format:check
```

## Project Structure

- `app/` - Next.js app directory with pages and components
- `components/` - Shared UI components (Radix UI based)
- `content/` - MDX documentation and blog content
- `lib/` - Utility functions and configurations
- `public/` - Static assets

## Component Guidelines

1. **File Naming**: Use PascalCase for component files (e.g., `MyComponent.tsx`)
2. **Import Organization**: Follow the ESLint import/order rule
3. **TypeScript**: Always type your components and props
4. **Styling**: Use Tailwind CSS classes

## Content Guidelines

- Documentation files are in MDX format in `content/docs/`
- Blog posts are in `content/blog/`
- Follow the existing structure and frontmatter format

## Commit Guidelines

- Use conventional commits format: `type(scope): description`
- Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`
- Keep commits focused and atomic

## Pull Request Process

1. Create a feature branch from `main`
2. Make your changes following the guidelines above
3. Run all quality checks
4. Submit a PR with a clear description
5. Address any feedback from code review

## Questions?

Feel free to open an issue for any questions about contributing!
