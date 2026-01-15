import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

/**
 * Markdown Content Renderer
 * -------------------------
 * Renders markdown content with proper styling.
 * Supports GitHub Flavored Markdown (GFM) features:
 * - Tables
 * - Strikethrough
 * - Task lists
 * - Autolinks
 */

interface MarkdownContentProps {
  content: string
}

export function MarkdownContent({ content }: MarkdownContentProps) {
  return (
    <div className="prose prose-invert max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          /* Headings with proper spacing and styling */
          h1: ({ children }) => <h1 className="text-3xl font-bold text-foreground mt-10 mb-4">{children}</h1>,
          h2: ({ children }) => (
            <h2 className="text-2xl font-semibold text-foreground mt-10 mb-4 pb-2 border-b border-border">
              {children}
            </h2>
          ),
          h3: ({ children }) => <h3 className="text-xl font-semibold text-foreground mt-8 mb-3">{children}</h3>,
          h4: ({ children }) => <h4 className="text-lg font-medium text-foreground mt-6 mb-2">{children}</h4>,

          /* Paragraphs with good readability */
          p: ({ children }) => <p className="text-foreground leading-relaxed mb-4">{children}</p>,

          /* Links styled with accent color */
          a: ({ href, children }) => (
            <a
              href={href}
              className="text-primary hover:underline"
              target={href?.startsWith("http") ? "_blank" : undefined}
              rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              {children}
            </a>
          ),

          /* Inline code with subtle background */
          code: ({ children, className }) => {
            // Check if this is a code block (has language class)
            const isBlock = className?.includes("language-")
            if (isBlock) {
              return <code className={className}>{children}</code>
            }
            // Inline code styling
            return <code className="bg-secondary text-primary px-1.5 py-0.5 rounded text-sm font-mono">{children}</code>
          },

          /* Code blocks with dark background */
          pre: ({ children }) => (
            <pre className="bg-card border border-border rounded-lg p-4 overflow-x-auto my-6 text-sm">{children}</pre>
          ),

          /* Blockquotes with accent border */
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-primary pl-4 my-6 text-muted-foreground italic">
              {children}
            </blockquote>
          ),

          /* Lists with proper spacing */
          ul: ({ children }) => <ul className="list-disc list-inside mb-4 space-y-2 text-foreground">{children}</ul>,
          ol: ({ children }) => <ol className="list-decimal list-inside mb-4 space-y-2 text-foreground">{children}</ol>,
          li: ({ children }) => <li className="leading-relaxed">{children}</li>,

          /* Horizontal rule */
          hr: () => <hr className="border-border my-8" />,

          /* Images with rounded corners */
          img: ({ src, alt }) => (
            <img src={src || "/placeholder.svg"} alt={alt || ""} className="rounded-lg my-6 max-w-full h-auto" />
          ),

          /* Tables styled for dark theme */
          table: ({ children }) => (
            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse border border-border">{children}</table>
            </div>
          ),
          th: ({ children }) => (
            <th className="border border-border bg-secondary px-4 py-2 text-left font-semibold text-foreground">
              {children}
            </th>
          ),
          td: ({ children }) => <td className="border border-border px-4 py-2 text-foreground">{children}</td>,

          /* Strong and emphasis */
          strong: ({ children }) => <strong className="font-semibold text-foreground">{children}</strong>,
          em: ({ children }) => <em className="italic">{children}</em>,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}
