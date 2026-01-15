"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { ResizableSidebar } from "./resizable-sidebar"

/**
 * Main Layout Component
 * ---------------------
 * Wraps content with the resizable sidebar.
 * Automatically adjusts main content margin based on sidebar width.
 */

const DEFAULT_WIDTH = 200

export function MainLayout({ children }: { children: React.ReactNode }) {
  const [sidebarWidth, setSidebarWidth] = useState(DEFAULT_WIDTH)

  /* Sync with sidebar width changes */
  useEffect(() => {
    const savedWidth = localStorage.getItem("sidebar-width")
    if (savedWidth) {
      setSidebarWidth(Number.parseInt(savedWidth, 10))
    }

    /* Poll for width changes (more reliable than storage event) */
    const interval = setInterval(() => {
      const currentWidth = localStorage.getItem("sidebar-width")
      if (currentWidth) {
        setSidebarWidth(Number.parseInt(currentWidth, 10))
      }
    }, 100)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex min-h-screen">
      <ResizableSidebar />
      <main className="flex-1 transition-[margin] duration-100" style={{ marginLeft: sidebarWidth }}>
        <div className="hidden md:block" />
        <div className="md:hidden h-16" /> {/* Space for mobile menu button */}
        {children}
      </main>
    </div>
  )
}
