"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Atom, Brain, Dna, Lightbulb } from "lucide-react"

interface Actualite {
  categorie: string
  titre: string
  image: string
  lien: string
  couleurCategorie?: string
}

export default function ActualitesSection() {
  const actualites: Actualite[] = [
    {
      categorie: "Annonces diverses",
      titre: "L'UNAOC attribue son label : Chaire des Nations Unies pour l'Alliance des Civilisations",
      image: "https://ueuromed.org/sites/default/files/2025-04/sans-titre-0_2.jpg",
      lien: "#",
      couleurCategorie: "#4DB6AC",
    },
    {
      categorie: "Activités sportives",
      titre: "Olympiades de l'ISCAE : Performances sportives exceptionnelles des UEMFistes",
      image: "https://ueuromed.org/sites/default/files/2025-04/65.jpg",
      lien: "#",
      couleurCategorie: "#F59E0B",
    },
    {
      categorie: "Formations",
      titre: "Programme de formation des élus et personnel de la région Fès-Meknès",
      image: "https://ueuromed.org/sites/default/files/2025-04/sans-titre-0.jpg",
      lien: "#",
      couleurCategorie: "#8B5CF6",
    },
    {
      categorie: "Cycle de conférences",
      titre: "Journée du Design Italien : Lire la nature et protéger sa culture",
      image: "https://ueuromed.org/sites/default/files/2025-04/10_2.jpg",
      lien: "#",
      couleurCategorie: "#EC4899",
    },
    {
      categorie: "Activités Pédagogiques",
      titre: "Le Moroccan Day of Mathematics dignement accueilli par l'UEMF",
      image: "https://ueuromed.org/sites/default/files/2025-04/00.jpg",
      lien: "#",
      couleurCategorie: "#10B981",
    },
    {
      categorie: "Conventions & Accords",
      titre: "Valorisation du patrimoine artisanal : un accord-cadre stratégique pour la région",
      image: "https://ueuromed.org/sites/default/files/2025-04/5684.jpg",
      lien: "#",
      couleurCategorie: "#3B82F6",
    },
  ]

  return (
    <section className="relative py-20 bg-gradient-to-b from-purple-900 to-indigo-900 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black/50 to-transparent z-10" />

     
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.2 + Math.random() * 0.3,
            }}
            animate={{
              y: [0, Math.random() * 30 - 15],
              x: [0, Math.random() * 30 - 15],
              rotate: [0, Math.random() * 40 - 20],
            }}
            transition={{
              duration: 3 + Math.random() * 5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          >
            {
              [
                <Atom key="atom" className="text-purple-400 w-8 h-8" />,
                <Brain key="brain" className="text-blue-400 w-10 h-10" />,
                <Dna key="dna" className="text-pink-400 w-12 h-12" />,
                <Lightbulb key="bulb" className="text-indigo-400 w-10 h-10" />,
              ][i % 4]
            }
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Actualités et Événements
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Découvrez les dernières nouvelles et initiatives de l'UEMF
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {actualites.map((actualite, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300" />
              <div className="relative bg-gray-900 p-6 rounded-xl transform group-hover:-rotate-1 transition-transform duration-300 h-full flex flex-col">
                <div className="relative w-full h-40 mb-4 rounded-md overflow-hidden">
                  <Image
                    src={actualite.image || "/placeholder.svg"}
                    alt={actualite.titre}
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="text-sm font-medium mb-2" style={{ color: actualite.couleurCategorie }}>
                  {actualite.categorie}
                </span>
                <h3 className="text-lg font-bold text-white mb-3">{actualite.titre}</h3>
                <div className="mt-auto">
                  <Link
                    href={actualite.lien}
                    className="inline-block text-sm text-pink-400 hover:text-pink-300 transition"
                  >
                    Lire plus →
                  </Link>
                </div>
              </div>

              {/* Animated border */}
              <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-pink-400 animate-[gradient-x_3s_ease_infinite]" />
                  <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-pink-400 to-purple-400 animate-[gradient-y_3s_ease_infinite]" />
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-pink-400 to-purple-400 animate-[gradient-x_3s_ease_infinite]" />
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-purple-400 to-pink-400 animate-[gradient-y_3s_ease_infinite]" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Link
            href="/actualites"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
          >
            Voir toutes les actualités
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
