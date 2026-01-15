import Link from "next/link"
import { ArrowLeft, Calendar } from "lucide-react"
import { getAllPosts } from "@/lib/blog"
import { MainLayout } from "@/components/main-layout"

/**
 * Blog Archive Page
 * -----------------
 * Lists all blog posts from your markdown files.
 * Posts are automatically loaded from /content/blog folder.
 */

export const metadata = {
  title: "Blog | Surya",
  description: "Articles, thoughts, and tutorials on learning and development.",
}

/* Helper function to format dates */
function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <MainLayout>
      <div className="max-w-2xl px-6 md:px-12 lg:px-20 py-12">
        {/* Back to home link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </Link>

        {/* Page header */}
        <header className="mb-12">
          <h1 className="text-3xl font-bold text-primary mb-4">Blog</h1>
          <p className="text-muted-foreground">
            Thoughts, learnings, and documentation.
            <code className="text-primary text-sm font-mono">/content/blog</code>
          </p>
        </header>

        {/* Posts list */}
        {posts.length === 0 ? (
          <div className="text-muted-foreground text-sm py-12 text-center border border-dashed border-border rounded-lg">
            <p>No blog posts yet.</p>
            <p className="mt-2">
              Create your first post by adding a <code className="text-primary">.md</code> file to{" "}
              <code className="text-primary">/content/blog</code>
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {posts.map((post) => (
              <article key={post.slug} className="group">
                <Link href={`/blog/${post.slug}`} className="block py-4">
                  {/* Date */}
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2 font-mono">
                    <Calendar className="w-3 h-3" />
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                  </div>

                  {/* Title */}
                  <h2 className="text-lg font-medium text-foreground group-hover:text-primary transition-colors mb-2">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-muted-foreground text-sm leading-relaxed">{post.excerpt}</p>
                </Link>

                <div className="h-px bg-border" />
              </article>
            ))}
          </div>
        )}
      </div>
    </MainLayout>
  )
}
