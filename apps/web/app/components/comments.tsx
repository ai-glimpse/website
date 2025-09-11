'use client';

import Giscus from '@giscus/react';

export default function Comments() {
  return (
    <div className="mt-8">
      <Giscus
        id="comments"
        repo="ai-glimpse/website"
        repoId="R_kgDOLchO6A"
        category="Announcements"
        categoryId="DIC_kwDOLchO6M4CdxBU"
        mapping="pathname"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme="preferred_color_scheme"
        lang="en"
        loading="lazy"
      />
    </div>
  );
}
