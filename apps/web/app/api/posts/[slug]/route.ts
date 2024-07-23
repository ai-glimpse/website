import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } },
) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), "app/content/blog", `${slug}.mdx`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { content, data: frontMatter } = matter(fileContents);

  return NextResponse.json({ content, frontMatter });
}
