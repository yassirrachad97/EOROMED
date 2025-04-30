"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

interface HeroSectionProps {
  backgroundY: any
  opacity: any
  scale: any
}

export default function HeroSection({ backgroundY, opacity, scale }: HeroSectionProps) {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
    
      <motion.div className="absolute inset-0 z-0" style={{ y: backgroundY }}>
     
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            
           
            backgroundImage: `url('/slide_inscription_1.jpg')`,

          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/40 via-indigo-900/30 to-blue-900/40" />
      </motion.div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ opacity, scale }}
          >
          
            <motion.div
              animate={{
                textShadow: ["0 0 5px rgba(0, 0, 0, 0.7)", "0 0 20px rgba(0, 0, 0, 0.8)", "0 0 5px rgba(0, 0, 0, 0.7)"],
              }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="text-5xl md:text-7xl font-extrabold text-white mb-6"
            >
              OUVERTURE DES
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 [text-shadow:_0_1px_3px_rgb(0_0_0_/_50%)]">
                INSCRIPTIONS
              </span>
            </motion.div>

            <motion.p
              className="text-xl md:text-2xl text-white mb-8 px-4 py-2 rounded-lg bg-black/20 backdrop-blur-sm inline-block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Une université où l'innovation et la créativité n'ont pas de limites
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                DÉCOUVRIR
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white black hover:bg-white/10 font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                CANDIDATER
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
      >
        <ChevronDown className="h-10 w-10 text-white" />
      </motion.div>
    </section>
  )
}
