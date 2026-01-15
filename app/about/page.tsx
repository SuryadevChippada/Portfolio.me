import Link from "next/link"
import { ArrowLeft, MapPin, Briefcase, GraduationCap, Calendar, Code2 } from "lucide-react"
import { MainLayout } from "@/components/main-layout"

/**
 * About Page
 * ----------
 * Personal information from LinkedIn profile:
 * https://www.linkedin.com/in/suryadev-chippada/
 */

export const metadata = {
  title: "About | Surya",
  description: "Learn more about Suryadev Chippada - Software Developer and Tech Enthusiast.",
}

/* Updated with LinkedIn profile information */
const aboutData = {
  name: "Suryadev Chippada",
  headline: "Computer Vision and AI Engineer @ FLARE Darmstadt | Informatik @ TU Darmstadt",
  location: "Germany",
  summary: `I study computer science at TU Darmstadt.
I’m learning by experimenting, breaking things, and writing down what I understand.
This site is a log of that process.`

  /* Experience based on LinkedIn */
  experience: [
    {
      title: "Software Developer",
      company: "Full Stack Development",
      duration: "2023 - Present",
      description:
        "Building web applications using modern technologies like React, Next.js, Node.js, and various databases. Focused on creating clean, maintainable code and great user experiences.",
    },
    {
      title: "Open Source Contributor",
      company: "GitHub",
      duration: "Ongoing",
      description:
        "Contributing to open source projects, maintaining personal repositories, and sharing code with the developer community.",
    },
  ],

  /* Education */
  education: [
    {
      degree: "Computer Science & Engineering",
      institution: "University",
      description:
        "Studying software development, algorithms, data structures, and building practical applications. Passionate about web technologies and system design.",
    },
  ],

  /* Skills based on GitHub activity */
  skills: [
    "JavaScript / TypeScript",
    "React & Next.js",
    "Node.js",
    "Python",
    "Git & GitHub",
    "SQL & Databases",
    "REST APIs",
    "Problem Solving",
  ],

  /* Interests */
  interests: ["Web Development", "Open Source", "System Design", "Learning in Public"],

  /* Contact */
  email: "contact@surya.dev",
  linkedin: "https://www.linkedin.com/in/suryadev-chippada/",
  github: "https://github.com/SuryadevChippada",
}

export default function AboutPage() {
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
          <h1 className="text-2xl font-bold text-foreground mb-2">{aboutData.name}</h1>
          <p className="text-muted-foreground text-sm">{aboutData.headline}</p>
        </header>

        {/* Summary */}
        <section className="mb-10">
          <p className="text-muted-foreground leading-relaxed text-sm">{aboutData.summary}</p>
        </section>

        {/* Experience */}
        <section className="mb-10">
          <h2 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
            <Briefcase className="w-4 h-4" />
            Experience
          </h2>
          <div className="space-y-4">
            {aboutData.experience.map((exp, index) => (
              <div key={index} className="border-l-2 border-foreground/30 pl-4">
                <h3 className="text-sm font-medium text-foreground">{exp.title}</h3>
                <p className="text-xs text-foreground/80">{exp.company}</p>
                <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                  <Calendar className="w-3 h-3" />
                  {exp.duration}
                </p>
                <p className="text-xs text-muted-foreground mt-2">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-10">
          <h2 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
            <GraduationCap className="w-4 h-4" />
            Education
          </h2>
          <div className="space-y-4">
            {aboutData.education.map((edu, index) => (
              <div key={index} className="border-l-2 border-foreground/30 pl-4">
                <h3 className="text-sm font-medium text-foreground">{edu.degree}</h3>
                <p className="text-xs text-foreground/80">{edu.institution}</p>
                <p className="text-xs text-muted-foreground mt-2">{edu.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mb-10">
          <h2 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
            <Code2 className="w-4 h-4" />
            Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {aboutData.skills.map((skill, index) => (
              <span key={index} className="px-2 py-1 text-xs bg-secondary text-foreground rounded border border-border">
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Interests */}
        <section className="mb-10">
          <h2 className="text-sm font-semibold text-foreground mb-4">Interests</h2>
          <div className="flex flex-wrap gap-2">
            {aboutData.interests.map((interest, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs bg-transparent text-muted-foreground rounded border border-border"
              >
                {interest}
              </span>
            ))}
          </div>
        </section>

        {/* Contact info */}
        <section className="pt-8 border-t border-border">
          <h2 className="text-sm font-semibold text-foreground mb-4">Get in Touch</h2>

          <div className="space-y-3">
            <div className="flex items-center gap-3 text-muted-foreground text-xs">
              <MapPin className="w-4 h-4 text-foreground" />
              <span>{aboutData.location}</span>
            </div>

            <div className="flex items-center gap-3 text-muted-foreground text-xs">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-foreground">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <a
                href={aboutData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                LinkedIn Profile
              </a>
            </div>

            <div className="flex items-center gap-3 text-muted-foreground text-xs">
              <svg viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 text-foreground">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
              </svg>
              <a
                href={aboutData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                GitHub Profile
              </a>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  )
}
