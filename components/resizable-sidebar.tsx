"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Home, FileText, User, FolderGit2 } from "lucide-react"

/**
 * Resizable Sidebar Component
 * ---------------------------
 * GitBook-style sidebar with drag-to-resize functionality.
 */

/* Added Projects to navigation items */
const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Blog", href: "/blog", icon: FileText },
  { name: "About", href: "/about", icon: User },
]

/* Social links with actual profiles */
const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/SuryadevChippada",
    icon: () => (
      <svg viewBox="0 0 16 16" fill="currentColor" className="w-5 h-5">
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/suryadev-chippada/",
    icon: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
]

const MIN_WIDTH = 140
const MAX_WIDTH = 300
const DEFAULT_WIDTH = 160

export function ResizableSidebar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [sidebarWidth, setSidebarWidth] = useState(DEFAULT_WIDTH)
  const [isResizing, setIsResizing] = useState(false)
  const sidebarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const savedWidth = localStorage.getItem("sidebar-width")
    if (savedWidth) {
      const width = Number.parseInt(savedWidth, 10)
      if (width >= MIN_WIDTH && width <= MAX_WIDTH) {
        setSidebarWidth(width)
      }
    }
  }, [])

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isResizing) return
      const newWidth = e.clientX
      if (newWidth >= MIN_WIDTH && newWidth <= MAX_WIDTH) {
        setSidebarWidth(newWidth)
        localStorage.setItem("sidebar-width", String(newWidth))
      }
    },
    [isResizing],
  )

  const handleMouseUp = useCallback(() => {
    setIsResizing(false)
    document.body.style.cursor = ""
    document.body.style.userSelect = ""
  }, [])

  useEffect(() => {
    if (isResizing) {
      document.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("mouseup", handleMouseUp)
      document.body.style.cursor = "col-resize"
      document.body.style.userSelect = "none"
    }
    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
    }
  }, [isResizing, handleMouseMove, handleMouseUp])

  const startResizing = () => {
    setIsResizing(true)
  }

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 p-2 rounded-md bg-secondary md:hidden"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-5 h-5 text-foreground" /> : <Menu className="w-5 h-5 text-foreground" />}
      </button>

      {/* Sidebar - removed border, matches bg for seamless look */}
      <aside
        ref={sidebarRef}
        style={{ width: sidebarWidth }}
        className={`
          fixed top-0 left-0 z-40 h-full
          bg-transparent
          transform transition-transform duration-200 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
          flex flex-col
        `}
      >
        <div className="flex flex-col h-full p-3">
          {/* Logo / Name */}
          <div className="mb-6 pt-1 px-1">
            <Link href="/" className="block">
              <span className="text-sm font-semibold tracking-tight text-foreground">
                surya<span className="opacity-60">.dev</span>
              </span>
            </Link>
          </div>

          <nav className="flex-1 flex flex-col items-center justify-center">
            <ul className="space-y-1 w-full">
              {navItems.map((item) => {
                const active = isActive(item.href)
                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`
                        flex items-center justify-center gap-2 px-2 py-2 rounded-md
                        text-xs transition-colors duration-150
                        ${
                          active
                            ? "bg-secondary text-foreground"
                            : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                        }
                      `}
                    >
                      <item.icon className="w-3.5 h-3.5" />
                      <span>{item.name}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>

          {/* Social Links */}
          <div className="pt-4 border-t border-border">
            <div className="flex items-center justify-center gap-3 px-1">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={link.name}
                >
                  <link.icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Resize handle */}
        <div
          onMouseDown={startResizing}
          className={`
            hidden md:block absolute top-0 right-0 w-1 h-full
            cursor-col-resize hover:bg-primary/30
            transition-colors duration-150
            ${isResizing ? "bg-primary/30" : "bg-transparent"}
          `}
          title="Drag to resize"
        />
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

export function useSidebarWidth() {
  const [width, setWidth] = useState(DEFAULT_WIDTH)

  useEffect(() => {
    const savedWidth = localStorage.getItem("sidebar-width")
    if (savedWidth) {
      const w = Number.parseInt(savedWidth, 10)
      if (w >= MIN_WIDTH && w <= MAX_WIDTH) {
        setWidth(w)
      }
    }

    const handleStorage = () => {
      const newWidth = localStorage.getItem("sidebar-width")
      if (newWidth) {
        setWidth(Number.parseInt(newWidth, 10))
      }
    }

    window.addEventListener("storage", handleStorage)
    return () => window.removeEventListener("storage", handleStorage)
  }, [])

  return width
}
