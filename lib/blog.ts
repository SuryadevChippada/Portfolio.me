import fs from "fs"
import path from "path"
import matter from "gray-matter"

/**
 * Blog Post Utilities
 * -------------------
 * This file handles reading and parsing markdown blog posts.
 *
 * HOW TO ADD A NEW BLOG POST:
 * 1. Create a new .md file in the /content/blog folder
 * 2. Add frontmatter at the top with title, date, and excerpt
 * 3. Write your content in markdown below the frontmatter
 *
 * Example frontmatter:
 * ---
 * title: "My Blog Post Title"
 * date: "2026-01-15"
 * excerpt: "A brief description of the post"
 * ---
 */

/* Type definition for blog post data */
export interface BlogPost {
  slug: string // URL-friendly identifier (filename without .md)
  title: string // Post title from frontmatter
  date: string // Publication date (YYYY-MM-DD format)
  excerpt: string // Brief description for previews
  content: string // Full markdown content
}

/* Path to the blog content directory */
const BLOG_DIR = path.join(process.cwd(), "content/blog")

/**
 * Get all blog posts sorted by date (newest first)
 * This function reads all .md files from the content/blog folder
 */
export function getAllPosts(): BlogPost[] {
  // Check if the blog directory exists
  if (!fs.existsSync(BLOG_DIR)) {
    return []
  }

  // Get all markdown files
  const files = fs.readdirSync(BLOG_DIR).filter((file) => file.endsWith(".md"))

  // Parse each file and extract frontmatter + content
  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "")
    const filePath = path.join(BLOG_DIR, filename)
    const fileContent = fs.readFileSync(filePath, "utf-8")

    // Use gray-matter to parse frontmatter
    const { data, content } = matter(fileContent)

    return {
      slug,
      title: data.title || "Untitled Post",
      date: data.date || new Date().toISOString().split("T")[0],
      excerpt: data.excerpt || "",
      content,
    }
  })

  // Sort by date, newest first
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

/**
 * Get a single blog post by its slug
 * Used for individual blog post pages
 */
export function getPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, `${slug}.md`)

  // Check if the file exists
  if (!fs.existsSync(filePath)) {
    return null
  }

  const fileContent = fs.readFileSync(filePath, "utf-8")
  const { data, content } = matter(fileContent)

  return {
    slug,
    title: data.title || "Untitled Post",
    date: data.date || new Date().toISOString().split("T")[0],
    excerpt: data.excerpt || "",
    content,
  }
}

/**
 * Get all post slugs for static generation
 * Used by Next.js to pre-build blog post pages
 */
export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) {
    return []
  }

  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(".md", ""))
}
