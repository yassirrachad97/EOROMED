"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface Feature {
  title: string
  description: string
  image: string
}

export default function WhyChooseSection() {
  const features: Feature[] = [
    {
      title: "Formation de qualité",
      description:
        "L'UEMF délivre des formations aux trois cycles (Licence, Ingénierie, Master et Doctorat) et ses diplômes sont reconnus par l'État marocain.",
      image: "https://ueuromed.org/sites/default/files/2024-10/formation-de-qualite-uemf.jpg", 
    },
    {
      title: "Profil Euromed Multidimensionnel",
      description:
        "Plusieurs formations sont en double diplomation avec les meilleures universités euro-méditerranéennes.",
      image: "https://ueuromed.org/sites/default/files/2020-04/profil-euromed-a-haut-potentiel-euromed-fes-1.jpg",
    },
    {
      title: "Mobilité Internationale",
      description:
        "L'UEMF est une fondation d'utilité publique avec l'appui de ses 43 pays membres de l'Union pour la Méditerranée (UpM).",
      image: "https://ueuromed.org/sites/default/files/2024-10/mobilite-universite-euromed-fes.jpeg", 
    },
    {
      title: "Eco-campus",
      description: "Un campus moderne et écologique offrant un environnement d'apprentissage optimal.",
      image: "https://ueuromed.org/sites/default/files/2024-10/ecocampus-uemf-fes.jpg",
    },
    {
      title: "Recherche de pointe",
      description: "Des laboratoires équipés des dernières technologies pour une recherche innovante.",
      image: "https://ueuromed.org/sites/default/files/2020-04/une-recherche-de-pointe-euromed-fes-1.jpg",
    },
    {
      title: "Partenariat socioéconomique",
      description: "Des collaborations étroites avec le monde professionnel pour une meilleure insertion.",
      image: "https://ueuromed.org/sites/default/files/2020-05/partenaires-socio-economique-euromed-fes-1.jpeg",
    },
  ]

  return (
    <section className="relative py-20 bg-black">

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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Pourquoi choisir l'UEMF ?</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">Pour réaliser votre projet de carrière et de vie</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
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
              <div className="relative bg-gray-900/80 backdrop-blur-sm p-8 rounded-xl h-full flex flex-col">
                <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
                  <Image
                    src={feature.image || "/placeholder.svg?height=300&width=500"}
                    alt={feature.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 flex-grow">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-300 italic max-w-4xl mx-auto">
            Placée sous la Haute Présidence d'Honneur de{" "}
            <span className="font-bold text-white">SA MAJESTÉ Le ROI MOHAMMED VI</span>, l'UEMF est une fondation
            d'utilité publique et à but non lucratif labélisée par l'Union pour la Méditerranée (UpM) avec l'appui de
            ses 43 pays membres.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
