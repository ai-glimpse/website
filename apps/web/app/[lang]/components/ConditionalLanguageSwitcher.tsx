'use client';

import { usePathname } from 'next/navigation';

import LanguageSwitcher from './LanguageSwitcher';

/**
 * A wrapper around LanguageSwitcher that conditionally renders based on the current route.
 * This prevents duplication between fumadocs layout and custom navbar.
 *
 * - On docs pages: Only fumadocs should show the language switcher
 * - On other pages: Only the custom navbar should show the language switcher
 */
interface ConditionalLanguageSwitcherProps {
  showOnDocs?: boolean;
  showOnNonDocs?: boolean;
}

export default function ConditionalLanguageSwitcher({
  showOnDocs = false,
  showOnNonDocs = true,
}: ConditionalLanguageSwitcherProps) {
  const pathname = usePathname();
  const isDocsPage = pathname.includes('/docs');

  // Show based on the current page type and component configuration
  const shouldShow = isDocsPage ? showOnDocs : showOnNonDocs;

  if (!shouldShow) {
    return null;
  }

  return <LanguageSwitcher />;
}
