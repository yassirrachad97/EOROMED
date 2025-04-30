"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface Testimonial {
  name: string
  program: string
  quote: string
  avatar: string
}

export default function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      name: "Sophie Martin",
      program: "Intelligence Artificielle",
      quote:
        "Cette université a complètement transformé ma vision de l'éducation. Les projets pratiques et l'accès aux technologies de pointe m'ont permis de développer des compétences que je n'aurais jamais pu acquérir ailleurs.",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Thomas Dubois",
      program: "Biotechnologie Quantique",
      quote:
        "Les professeurs sont des leaders dans leur domaine et l'environnement de recherche est incroyablement stimulant. J'ai pu contribuer à des découvertes scientifiques dès ma deuxième année!",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Emma Leclerc",
      program: "Design d'Expérience",
      quote:
        "L'approche interdisciplinaire et l'accent mis sur l'innovation m'ont permis de créer des projets qui ont attiré l'attention des plus grandes entreprises technologiques.",
      avatar: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <section className="relative py-20 bg-black overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,50,255,0.15),transparent_70%)]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Pourquoi choisir l’UEMF ?</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Pour réaliser votre projet de carrière et de vie
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl transform rotate-1" />
              <div className="relative bg-gray-900/80 backdrop-blur-sm p-8 rounded-xl">
                <div className="flex items-center mb-6">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-purple-500">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg?height=100&width=100"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{testimonial.name}</h3>
                    <p className="text-purple-400">{testimonial.program}</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">"{testimonial.quote}"</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
