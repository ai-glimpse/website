import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const blogDir = path.join(process.cwd(), "app/content/blog");
    const files = fs.readdirSync(blogDir);

    const posts = files.map((filename) => {
      const slug = filename.replace(".mdx", "");
      const fullPath = path.join(blogDir, filename);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data: frontMatter } = matter(fileContents);

      return {
        slug,
        frontMatter,
      };
    });

    return NextResponse.json(posts);
  } catch (error) {
    console.error("Error in GET /api/posts:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
