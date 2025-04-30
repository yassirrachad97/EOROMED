"use client"

import { useEffect, useState, useRef } from "react"
import { useScroll, useTransform } from "framer-motion"
import { useMediaQuery } from "@/hooks/use-mobile"

// Components
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import HeroSection from "@/components/sections/hero-section"
// import ProgramsSection from "@/components/sections/programs-section"
import CampusSection from "@/components/sections/campus-section"
import StatsSection from "@/components/sections/stats-section"
// import TestimonialsSection from "@/components/sections/testimonials-section"
import CTASection from "@/components/sections/cta-section"
import ParticlesBackground from "@/components/particles-background"
import LoadingScreen from "@/components/loading-screen"
import WhyChooseSection from "@/components/sections/why-choose-section"
import ActualitesSection from "@/components/sections/programs-section"

export default function HomePage() {
  const [activeSection, setActiveSection] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const isMobile = useMediaQuery("(max-width: 768px)")

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.3], [1, 0.5, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 1.2])

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 1000)

    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const sections = document.querySelectorAll("section")

      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight

        if (
          scrollPosition >= sectionTop - windowHeight / 2 &&
          scrollPosition < sectionTop + sectionHeight - windowHeight / 2
        ) {
          setActiveSection(index)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      clearTimeout(timer)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div ref={containerRef} className="relative overflow-x-hidden">
      {/* Particles Background */}
      <ParticlesBackground />

      {/* Loading Screen */}
      <LoadingScreen isLoaded={isLoaded} />

      {/* Header */}
      <Header activeSection={activeSection} />

      {/* Hero Section */}
      <HeroSection backgroundY={backgroundY} opacity={opacity} scale={scale} />

      {/* Innovative Programs Section */}
      <ActualitesSection />

      {/* Interactive Campus Section */}
      <CampusSection />

      {/* Stats Section with Animated Counters */}
      <StatsSection />

      {/* Testimonials Section */}
      <WhyChooseSection />

      {/* Call to Action */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </div>
  )
}
