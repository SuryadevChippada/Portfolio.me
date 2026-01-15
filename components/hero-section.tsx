import Link from "next/link"
import { ArrowRight } from "lucide-react"

/**
 * Hero Section Component
 * ----------------------
 * Clean, centered introduction matching the reference design.
 * All text uses the accent color #EE6E4D.
 */
export function HeroSection() {
  return (
    <section className="flex flex-col justify-center min-h-[calc(100vh-8rem)] px-6 md:px-12 lg:px-20 max-w-2xl">
      {/* Greeting */}
      <p className="text-foreground/70 font-mono text-sm mb-2">Hello, I'm</p>

      {/* Name - large and prominent */}
      <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">Surya</h1>

      {/* Description */}
      <p className="text-muted-foreground leading-relaxed text-lg mb-8 max-w-lg">
        A personal space where I document everything I learn, from general knowledge to lessons that help me grow,
        improve, and think better every day.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-wrap items-center gap-4 mb-12">
        {/* Primary CTA */}
        <Link
          href="/blog"
          className="
            inline-flex items-center gap-2 px-5 py-2.5
            bg-transparent border border-foreground text-foreground
            rounded-md font-medium text-sm
            hover:bg-foreground hover:text-primary-foreground
            transition-colors duration-200
          "
        >
          Read Blog
          <ArrowRight className="w-4 h-4" />
        </Link>

        {/* Secondary CTA */}
        <Link
          href="/about"
          className="
            inline-flex items-center gap-2
            text-muted-foreground text-sm
            hover:text-foreground transition-colors
          "
        >
          About Me
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Status indicator */}
      <div className="flex items-center gap-2 text-foreground text-sm">
        <span className="w-2 h-2 rounded-full bg-foreground animate-pulse" />
        <span>Learning in public</span>
      </div>
    </section>
  )
}
