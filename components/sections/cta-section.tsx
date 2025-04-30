"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function CTASection() {
  return (
    <section className="relative py-20 bg-gradient-to-r from-purple-900 to-indigo-900 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
          style={{
            backgroundImage: "url('/placeholder.svg?height=500&width=1500')",
            backgroundSize: "cover",
            filter: "blur(8px)",
            opacity: 0.2,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Rejoignez l'Université du Futur</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Préparez-vous à transformer votre avenir et à faire partie d'une communauté d'innovateurs qui changent le
            monde
          </p>
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              CANDIDATER MAINTENANT
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              PLANIFIER UNE VISITE
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
