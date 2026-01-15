import Link from "next/link"
import { ArrowLeft, ExternalLink, Star, GitFork } from "lucide-react"
import { MainLayout } from "@/components/main-layout"

/**
 * Projects Page
 * -------------
 * Displays GitHub repositories (excluding dotfiles).
 * Fetches from GitHub API at build time.
 */

export const metadata = {
  title: "Projects | Surya",
  description: "GitHub projects and repositories by Suryadev Chippada",
}

/* Fetch repos from GitHub API */
async function getGitHubRepos() {
  try {
    const res = await fetch(
      "https://api.github.com/users/SuryadevChippada/repos?sort=updated&per_page=30",
      { next: { revalidate: 3600 } }, // Revalidate every hour
    )

    if (!res.ok) return []

    const repos = await res.json()

    /* Filter out dotfiles (repos starting with .) and forks */
    return repos.filter((repo: { name: string; fork: boolean }) => !repo.name.startsWith(".") && !repo.fork)
  } catch {
    return []
  }
}

export default async function ProjectsPage() {
  const repos = await getGitHubRepos()

  return (
    <MainLayout>
      <div className="max-w-2xl px-6 md:px-12 lg:px-20 py-12">
        {/* Back to home link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-xs mb-8"
        >
          <ArrowLeft className="w-3 h-3" />
          Back to home
        </Link>

        {/* Page header */}
        <header className="mb-10">
          <h1 className="text-2xl font-bold text-foreground mb-2">Projects</h1>
          <p className="text-muted-foreground text-sm">Open source projects and experiments from my GitHub.</p>
        </header>

        {/* Projects list */}
        {repos.length > 0 ? (
          <div className="space-y-4">
            {repos.map(
              (repo: {
                id: number
                name: string
                description: string | null
                html_url: string
                stargazers_count: number
                forks_count: number
                language: string | null
                topics: string[]
              }) => (
                <a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 rounded-md border border-border bg-secondary/30 hover:bg-secondary/50 hover:border-foreground/30 transition-colors group"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-medium text-foreground group-hover:text-foreground flex items-center gap-2">
                        {repo.name}
                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h3>
                      {repo.description && (
                        <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{repo.description}</p>
                      )}

                      {/* Topics/tags */}
                      {repo.topics && repo.topics.length > 0 && (
                        <div className="flex flex-wrap gap-1 mt-2">
                          {repo.topics.slice(0, 4).map((topic: string) => (
                            <span
                              key={topic}
                              className="px-1.5 py-0.5 text-[10px] bg-secondary text-muted-foreground rounded"
                            >
                              {topic}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Stats */}
                    <div className="flex items-center gap-3 text-xs text-muted-foreground shrink-0">
                      {repo.language && (
                        <span className="flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full bg-foreground/50" />
                          {repo.language}
                        </span>
                      )}
                      {repo.stargazers_count > 0 && (
                        <span className="flex items-center gap-1">
                          <Star className="w-3 h-3" />
                          {repo.stargazers_count}
                        </span>
                      )}
                      {repo.forks_count > 0 && (
                        <span className="flex items-center gap-1">
                          <GitFork className="w-3 h-3" />
                          {repo.forks_count}
                        </span>
                      )}
                    </div>
                  </div>
                </a>
              ),
            )}
          </div>
        ) : (
          <div className="text-center py-12 text-muted-foreground">
            <p className="text-sm">No projects found.</p>
            <a
              href="https://github.com/SuryadevChippada"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:underline text-sm mt-2 inline-block"
            >
              View GitHub Profile
            </a>
          </div>
        )}
      </div>
    </MainLayout>
  )
}
