'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';

import { i18n } from '@/lib/i18n';

export default function SimpleFooter() {
  const params = useParams();
  const currentLang = (params?.lang as string) || i18n.defaultLanguage;

  return (
    <footer className="border-t border-gray-100 py-6 dark:border-gray-800">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          AI Glimpse © 2025 ·
          <Link
            href={`/${currentLang}/docs`}
            className="ml-1 hover:text-gray-900 dark:hover:text-gray-100"
          >
            Documentation
          </Link>{' '}
          ·
          <Link
            href={`/${currentLang}/blog`}
            className="ml-1 hover:text-gray-900 dark:hover:text-gray-100"
          >
            Blog
          </Link>
        </p>
      </div>
    </footer>
  );
}
