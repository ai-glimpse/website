'use client';

import Giscus from "@giscus/react";

export default function Comments() {
  return (
    <Giscus
      id="comments"
      repo="ai-glimpse/website"
      repoId="R_kgDOLchO6A"
      category="Announcements"
      categoryId="DIC_kwDOLchO6M4CdxBW"
      mapping="pathname"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme="light"
      lang="en"
      loading="lazy"
    />
  );
}