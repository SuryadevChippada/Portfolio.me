import { ExternalLink, Github } from "lucide-react"

/**
 * Projects Section Component
 * --------------------------
 * Displays a list of projects with:
 * - Project title and description
 * - Tech stack tags
 * - Links to live demo and source code
 *
 * To add your own projects, update the 'projects' array below.
 */

/* Project data - customize with your own projects */
const projects = [
  {
    title: "Project Alpha",
    description:
      "A modern web application built with Next.js and TypeScript. Features real-time updates, user authentication, and a clean dashboard interface.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Design System",
    description:
      "A comprehensive component library with accessibility built-in. Includes documentation, usage examples, and theming support.",
    tags: ["React", "Storybook", "CSS Variables"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "CLI Tool",
    description:
      "A command-line utility that automates common development tasks. Supports custom configurations and plugin extensions.",
    tags: ["Node.js", "TypeScript", "Commander"],
    liveUrl: null,
    githubUrl: "#",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="mb-20">
      {/* Section heading */}
      <div className="flex items-center gap-3 mb-8">
        <h2 className="text-2xl font-semibold text-foreground">Projects</h2>
        <div className="flex-1 h-px bg-border" />
      </div>

      {/* Projects list */}
      <div className="space-y-6">
        {projects.map((project, index) => (
          <article
            key={index}
            className="
              p-6 rounded-lg bg-card border border-border
              hover:border-primary/50 transition-colors duration-200
            "
          >
            {/* Project header */}
            <div className="flex items-start justify-between gap-4 mb-3">
              <h3 className="text-lg font-medium text-foreground">{project.title}</h3>

              {/* Project links */}
              <div className="flex items-center gap-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <Github className="w-5 h-5" />
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`View ${project.title} live demo`}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>

            {/* Project description */}
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>

            {/* Tech stack tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="
                    px-2 py-1 text-xs font-medium
                    bg-secondary text-secondary-foreground
                    rounded-md
                  "
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
