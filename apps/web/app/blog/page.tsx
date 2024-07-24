import Link from 'next/link';
import { getBlogPages } from '@/app/source';

export default function BlogIndex() {
  const pages = getBlogPages();
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Blog Posts</h1>
      <ul>
        {pages.map((page) => (
          <li key={page.url} className="mb-4">
            <Link href={page.url} className="text-xl text-blue-600 hover:underline">
              {page.data.title}
            </Link>
            {page.data.description && (
              <p className="text-gray-600 mt-1">{page.data.description}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}