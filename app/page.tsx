import { MainLayout } from "@/components/main-layout"
import { HeroSection } from "@/components/hero-section"

/**
 * Home Page
 * ---------
 * Clean, minimal landing page with just the hero section.
 * GitBook-inspired layout with resizable sidebar.
 */
export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
    </MainLayout>
  )
}
