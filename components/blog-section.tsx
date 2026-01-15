import { ArrowRight, Calendar } from "lucide-react"
import Link from "next/link"
import { getAllPosts } from "@/lib/blog"

/**
 * Blog Section Component
 * ----------------------
 * Automatically displays blog posts from your markdown files.
 *
 * HOW IT WORKS:
 * - Reads all .md files from /content/blog folder
 * - Parses frontmatter (title, date, excerpt)
 * - Displays them sorted by date (newest first)
 *
 * TO ADD A POST: Just create a new .md file in /content/blog
 */

/* Helper function to format dates nicely */
function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export function BlogSection() {
  const posts = getAllPosts()

  return (
    <section id="blog" className="mb-20">
      {/* Section heading */}
      <div className="flex items-center gap-3 mb-8">
        <h2 className="text-2xl font-semibold text-foreground">Writing</h2>
        <div className="flex-1 h-px bg-border" />
      </div>

      {/* Posts list - or empty state if no posts */}
      {posts.length === 0 ? (
        <div className="text-muted-foreground text-sm py-8 text-center border border-dashed border-border rounded-lg">
          <p>No blog posts yet.</p>
          <p className="mt-2">
            Add your first post by creating a <code className="text-primary">.md</code> file in{" "}
            <code className="text-primary">/content/blog</code>
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {posts.slice(0, 5).map((post, index) => (
            <article key={post.slug} className="group">
              <Link href={`/blog/${post.slug}`} className="block">
                {/* Post title */}
                <h3
                  className="
                    text-lg font-medium text-foreground
                    group-hover:text-primary transition-colors
                    flex items-center gap-2
                  "
                >
                  {post.title}
                  <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </h3>

                {/* Post date */}
                <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                </div>

                {/* Post excerpt */}
                <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{post.excerpt}</p>
              </Link>

              {/* Divider (except for last item) */}
              {index < Math.min(posts.length, 5) - 1 && <div className="h-px bg-border mt-6" />}
            </article>
          ))}
        </div>
      )}

      {/* View all posts link - only show if there are posts */}
      {posts.length > 0 && (
        <Link
          href="/blog"
          className="
            inline-flex items-center gap-2 mt-8
            text-primary hover:underline text-sm font-medium
          "
        >
          View all posts
          <ArrowRight className="w-4 h-4" />
        </Link>
      )}
    </section>
  )
}
