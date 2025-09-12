import Link from 'next/link';

export default function SimpleFooter() {
  return (
    <footer className="border-t border-gray-100 py-6 dark:border-gray-800">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          AI Glimpse © 2025 ·
          <Link
            href="/docs"
            className="ml-1 hover:text-gray-900 dark:hover:text-gray-100"
          >
            Documentation
          </Link>{' '}
          ·
          <Link
            href="/blog"
            className="ml-1 hover:text-gray-900 dark:hover:text-gray-100"
          >
            Blog
          </Link>
        </p>
      </div>
    </footer>
  );
}
