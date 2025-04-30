"use client"

import { useEffect, useState } from "react"
import Particles from "react-particles"
import { loadFull } from "tsparticles"
import type { Engine } from "tsparticles-engine"

export default function ParticlesBackground() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const particlesInit = async (engine: Engine) => {
    await loadFull(engine)
  }

  if (!isClient) return null

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 60,
          particles: {
            color: {
              value: ["#FF5733", "#33FF57", "#3357FF", "#F033FF", "#FF33F0"],
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.2,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: true,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.3,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 h-full w-full"
      />
    </div>
  )
}
