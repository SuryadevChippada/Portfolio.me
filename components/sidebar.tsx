"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Home, FolderOpen, BookOpen, Mail, Github, Linkedin, Twitter } from "lucide-react"

/**
 * Sidebar Navigation Component
 * ----------------------------
 * GitBook-style fixed sidebar with:
 * - Logo/name at top
 * - Navigation links
 * - Social links at bottom
 *
 * Mobile: Collapsible hamburger menu
 * Desktop: Always visible fixed sidebar
 */

/* Navigation items - easy to customize */
const navItems = [
  { name: "Home", href: "#home", icon: Home },
  { name: "Projects", href: "#projects", icon: FolderOpen },
  { name: "Blog", href: "#blog", icon: BookOpen },
  { name: "Contact", href: "#contact", icon: Mail },
]

/* Social links - update with your profiles */
const socialLinks = [
  { name: "GitHub", href: "https://github.com", icon: Github },
  { name: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  { name: "Twitter", href: "https://twitter.com", icon: Twitter },
]

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 p-2 rounded-md bg-card md:hidden"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-5 h-5 text-foreground" /> : <Menu className="w-5 h-5 text-foreground" />}
      </button>

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 z-40 h-full w-64
          bg-sidebar border-r border-sidebar-border
          transform transition-transform duration-200 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
          sidebar-scroll overflow-y-auto
        `}
      >
        <div className="flex flex-col h-full p-6">
          {/* Logo / Name */}
          <div className="mb-8 pt-2">
            <Link href="#home" className="block">
              <h1 className="text-xl font-semibold text-foreground">Your Name</h1>
              <p className="text-sm text-muted-foreground mt-1">Developer & Designer</p>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1">
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="
                      flex items-center gap-3 px-3 py-2 rounded-md
                      text-muted-foreground
                      hover:text-primary hover:bg-sidebar-accent
                      transition-colors duration-150
                    "
                  >
                    <item.icon className="w-4 h-4" />
                    <span className="text-sm">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Links */}
          <div className="pt-6 border-t border-sidebar-border">
            <div className="flex items-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={link.name}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-background/80 backdrop-blur-sm md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}
