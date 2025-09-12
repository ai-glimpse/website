import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Main Hero Section */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-4xl">
          {/* Large Title */}
          <h1 className="mb-4 text-center text-4xl font-light tracking-wide text-gray-900 md:text-6xl lg:text-7xl dark:text-gray-100">
            AI
            <br />
            GLIMPSE
          </h1>
          
          {/* Badge */}
          <div className="mb-6 flex justify-center">
            <div className="inline-flex items-center rounded-full border border-gray-300 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300">
              <span className="mr-2 inline-block h-2 w-2 rounded-full bg-green-500"></span>
              Learning AI from Scratch
            </div>
          </div>
        </div>
        
        {/* Description - now aligned with other sections */}
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-lg leading-[1.7] text-gray-600 md:text-xl dark:text-gray-400">
            AI Glimpse is an educational platform for learning artificial intelligence. We&apos;re building resources to make AI knowledge accessible to everyone through practical, hands-on tutorials and comprehensive documentation.
          </p>
        </div>
      </section>

      {/* Quotes Section */}
      <section className="border-t border-gray-100 py-8 dark:border-gray-800">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-6 text-center text-3xl font-light text-gray-900 md:text-4xl dark:text-gray-100">
            Standing on the shoulders of giants
          </h2>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Feynman Quote */}
            <div>
              <p className="mb-3 text-base italic leading-[1.6] text-gray-600 dark:text-gray-400">
                &quot;What I cannot create I do not understand.&quot;
              </p>
              <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                Richard Feynman
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-500">
                Theoretical physicist
              </p>
            </div>

            {/* Einstein Quote */}
            <div>
              <p className="mb-3 text-base italic leading-[1.6] text-gray-600 dark:text-gray-400">
                &quot;If you can&apos;t explain it simply, you don&apos;t understand it well enough.&quot;
              </p>
              <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                Albert Einstein
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-500">
                Theoretical physicist
              </p>
            </div>

            {/* Zawinski Quote */}
            <div>
              <p className="mb-3 text-base italic leading-[1.6] text-gray-600 dark:text-gray-400">
                &quot;Not knowing something doesn&apos;t mean you&apos;re dumb — it just means you don&apos;t know it.&quot;
              </p>
              <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                Jamie Zawinski
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-500">
                Computer programmer
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Sections */}
      <section className="border-t border-gray-100 py-12 dark:border-gray-800">
        <div className="mx-auto max-w-4xl px-6">
          {/* Learning is better when shared */}
          <div className="mb-12">
            <h2 className="mb-4 text-center text-3xl font-light text-gray-900 md:text-4xl dark:text-gray-100">
              Learning is better when shared
            </h2>
            <p className="text-lg leading-[1.7] text-gray-600 dark:text-gray-400">
              <em>Educational progress is a collective effort.</em> We believe that we&apos;ll most effectively advance 
              understanding of AI by collaborating with the wider community of learners and educators. 
              We plan to frequently publish tutorials, documentation, and code. We think sharing our 
              knowledge will not only benefit the public, but also improve our own learning culture.
            </p>
          </div>

          {/* AI that works for everyone */}
          <div className="mb-12">
            <h2 className="mb-4 text-center text-3xl font-light text-gray-900 md:text-4xl dark:text-gray-100">
              AI education for everyone
            </h2>
            
            <div className="space-y-6">
              <p className="text-lg leading-[1.7] text-gray-600 dark:text-gray-400">
                <em>Emphasis on practical learning.</em> Instead of focusing solely on theoretical concepts, we are excited to build 
                practical tutorials that help you understand AI through hands-on implementation.
              </p>
              
              <p className="text-lg leading-[1.7] text-gray-600 dark:text-gray-400">
                <em>More accessible, comprehensive, and structured learning paths.</em> We see enormous potential for AI education in every field of study. While current 
                resources excel at advanced topics, we&apos;re building content that can guide learners 
                from basic statistics to advanced machine learning concepts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-6 dark:border-gray-800">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            AI Glimpse © 2025 · 
            <Link href="/docs" className="ml-1 hover:text-gray-900 dark:hover:text-gray-100">
              Documentation
            </Link> · 
            <Link href="/blog" className="ml-1 hover:text-gray-900 dark:hover:text-gray-100">
              Blog
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
