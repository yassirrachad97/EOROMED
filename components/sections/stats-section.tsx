"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Users, Globe, Award, Lightbulb } from "lucide-react"
import { CountUp } from "@/components/ui/count-up"

interface Stat {
  value: number
  suffix: string
  label: string
  icon: React.ReactNode
}

export default function StatsSection() {
  const stats: Stat[] = [
    {
      value: 15000,
      suffix: "+",
      label: "Étudiants",
      icon: <Users className="h-10 w-10 text-purple-400" />,
    },
    {
      value: 120,
      suffix: "+",
      label: "Nationalités",
      icon: <Globe className="h-10 w-10 text-blue-400" />,
    },
    {
      value: 95,
      suffix: "%",
      label: "Taux d'emploi",
      icon: <Award className="h-10 w-10 text-pink-400" />,
    },
    {
      value: 250,
      suffix: "+",
      label: "Partenaires industriels",
      icon: <Lightbulb className="h-10 w-10 text-yellow-400" />,
    },
  ]

  return (
    <section className="relative py-20 bg-gradient-to-r from-purple-900 to-indigo-900 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute left-0 top-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-8 text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
            >
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <motion.div
                className="text-4xl font-bold text-white mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <CountUp end={stat.value} duration={2} />
                {stat.suffix}
              </motion.div>
              <p className="text-gray-300">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
