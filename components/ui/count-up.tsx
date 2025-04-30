"use client"

import { useEffect, useState } from "react"

interface CountUpProps {
  end: number
  duration?: number
}

export function CountUp({ end, duration = 2 }: CountUpProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number | null = null
    let animationFrame: number

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCount)
      }
    }

    animationFrame = requestAnimationFrame(updateCount)

    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration])

  return <>{count}</>
}
