import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Calendar } from "lucide-react"
import { getPostBySlug, getAllPostSlugs } from "@/lib/blog"
import { MainLayout } from "@/components/main-layout"
import { MarkdownContent } from "@/components/markdown-content"

/**
 * Individual Blog Post Page
 * -------------------------
 * Renders a single blog post from its markdown file.
 */

/* Generate static paths for all blog posts */
export function generateStaticParams() {
  const slugs = getAllPostSlugs()
  return slugs.map((slug) => ({ slug }))
}

/* Generate metadata for each post */
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return { title: "Post Not Found" }
  }

  return {
    title: `${post.title} | Surya`,
    description: post.excerpt,
  }
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

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <MainLayout>
      <article className="max-w-2xl px-6 md:px-12 lg:px-20 py-12">
        {/* Back to blog link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to all posts
        </Link>

        {/* Post header */}
        <header className="mb-10">
          <h1 className="text-3xl font-bold text-primary mb-4 text-balance">{post.title}</h1>

          <div className="flex items-center gap-2 text-muted-foreground text-sm font-mono">
            <Calendar className="w-4 h-4" />
            <time dateTime={post.date}>{formatDate(post.date)}</time>
          </div>
        </header>

        {/* Post content */}
        <MarkdownContent content={post.content} />

        {/* Post footer */}
        <footer className="mt-16 pt-8 border-t border-border">
          <Link href="/blog" className="inline-flex items-center gap-2 text-primary hover:underline text-sm">
            <ArrowLeft className="w-4 h-4" />
            Back to all posts
          </Link>
        </footer>
      </article>
    </MainLayout>
  )
}
