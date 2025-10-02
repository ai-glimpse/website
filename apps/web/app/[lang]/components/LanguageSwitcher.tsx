'use client';

import { Languages } from 'lucide-react';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { i18n } from '@/lib/i18n';

const languages = {
  en: { name: 'English', flag: '🇺🇸' },
  zh: { name: '中文', flag: '🇨🇳' },
};

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const params = useParams();
  const pathname = usePathname();
  const currentLang = (params?.lang as string) || i18n.defaultLanguage;

  const switchLanguage = (newLang: string) => {
    const pathSegments = pathname.split('/');
    pathSegments[1] = newLang; // Replace the language segment
    return pathSegments.join('/');
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="h-8 w-8 rounded-full p-0 hover:bg-gray-100 dark:hover:bg-gray-800"
          aria-label="Switch language"
        >
          <Languages className="h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-48 p-2" align="end">
        <div className="flex flex-col space-y-1">
          {i18n.languages.map((lang) => {
            const language = languages[lang as keyof typeof languages];
            const isActive = lang === currentLang;

            return (
              <Link
                key={lang}
                href={switchLanguage(lang)}
                onClick={() => setIsOpen(false)}
                className={`flex items-center rounded-md px-3 py-2 text-sm transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 ${
                  isActive
                    ? 'bg-gray-100 font-medium text-green-600 dark:bg-gray-800 dark:text-green-400'
                    : 'text-gray-700 dark:text-gray-300'
                }`}
              >
                <span className="mr-3 text-base">{language?.flag}</span>
                <span>{language?.name}</span>
                {isActive && (
                  <span className="ml-auto text-xs text-green-600 dark:text-green-400">
                    ✓
                  </span>
                )}
              </Link>
            );
          })}
        </div>
      </PopoverContent>
    </Popover>
  );
}
