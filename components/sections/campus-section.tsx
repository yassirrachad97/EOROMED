"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface CampusHotspot {
  x: number
  y: number
  name: string
  description: string
}

export default function CampusSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
 
  const campusHotspots: CampusHotspot[] = [
    { x: 20, y: 30, name: "Éco-campus Pionnier", description: "Labellisé par la COP 22 au niveau euro-méditerranéen" },
    { x: 50, y: 60, name: "Espaces Verts", description: "Une place importante accordée aux espaces verts et aux œuvres artistiques" },
    { x: 80, y: 40, name: "Usine 4.0", description: "Agglomération d'entreprises innovantes" },
    { x: 35, y: 70, name: "Énergies Renouvelables", description: "Utilisation de matériaux à faible impact énergétique" },
    { x: 65, y: 20, name: "Transfert de Technologie", description: "Zone dédiée à la création de start-ups et spin-outs" },
  ]

  const campusImages = [
    { src: "/campus/campus (1).jpg", alt: "Vue panoramique du campus UEMF" },
    { src: "/campus/campus (2).jpg", alt: "Amphithéâtre de l'UEMF" },
    { src: "/campus/campus (3).jpg", alt: "Installation sportive de l'UEMF" },
    { src: "/campus/campus (4).jpg", alt: "Bibliothèque UEMF" },
    { src: "/campus/campus (5).jpg", alt: "Espaces de collaboration de l'UEMF" },
  ]

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % campusImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + campusImages.length) % campusImages.length)
  }

  return (
    <section className="relative py-20 bg-black overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/50 to-black/90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,100,200,0.2),transparent_70%)]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Éco-Campus UEMF</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Découvrez notre campus durable de 40 hectares avec ses installations innovantes et écologiques
          </p>
        </motion.div>

        <div className="relative h-[500px] rounded-xl overflow-hidden shadow-2xl shadow-blue-500/20">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-teal-900/30 z-10" />

          {/* Image principale avec navigation */}
          <div className="relative w-full h-full">
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full"
            >
              <Image 
                src={campusImages[currentImageIndex].src} 
                alt={campusImages[currentImageIndex].alt} 
                fill 
                className="object-cover" 
              />
            </motion.div>
            
            {/* Navigation buttons */}
            <button 
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center backdrop-blur-sm transition-colors"
              onClick={prevImage}
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button 
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center backdrop-blur-sm transition-colors"
              onClick={nextImage}
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
            
            {/* Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
              {campusImages.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full ${index === currentImageIndex ? 'bg-white' : 'bg-white/40'}`}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </div>
          </div>

          {campusHotspots.map((hotspot, index) => (
            <motion.div
              key={index}
              className="absolute z-20"
              style={{ top: `${hotspot.y}%`, left: `${hotspot.x}%` }}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.div className="relative group" whileHover={{ scale: 1.2 }}>
                <motion.div
                  className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 flex items-center justify-center cursor-pointer"
                  animate={{ boxShadow: ["0 0 0 0 rgba(59, 130, 246, 0.7)", "0 0 0 10px rgba(59, 130, 246, 0)"] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <span className="text-white text-xs font-bold">{index + 1}</span>
                </motion.div>
                <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 w-48">
                  <div className="bg-gray-900/90 backdrop-blur-sm rounded-lg p-3 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white font-medium text-sm">{hotspot.name}</p>
                    <p className="text-gray-300 text-xs">{hotspot.description}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Galerie d'images du campus */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Galerie du Campus</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div 
              className="h-64 overflow-hidden rounded-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image src="/campus/campus (1).jpg" alt="Bâtiments du campus UEMF" width={400} height={300} className="w-full h-full object-cover" />
            </motion.div>
            <motion.div 
              className="h-64 overflow-hidden rounded-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image src="/campus/campus (2).jpg" alt="Amphithéâtre UEMF" width={400} height={300} className="w-full h-full object-cover" />
            </motion.div>
            <motion.div 
              className="h-64 overflow-hidden rounded-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image src="/campus/campus (3).jpg" alt="Complexe sportif UEMF" width={400} height={300} className="w-full h-full object-cover" />
            </motion.div>
            <motion.div 
              className="h-64 overflow-hidden rounded-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image src="/campus/campus (4).jpg" alt="Bibliothèque UEMF" width={400} height={300} className="w-full h-full object-cover" />
            </motion.div>
            <motion.div 
              className="h-64 overflow-hidden rounded-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image src="/campus/campus (5).jpg" alt="Zone d'innovation UEMF" width={400} height={300} className="w-full h-full object-cover" />
            </motion.div>
            <motion.div 
              className="h-64 overflow-hidden rounded-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image src="/campus/campus (6).jpg" alt="Centre sportif UEMF" width={400} height={300} className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            Visite Virtuelle Complète
          </Button>
        </div>
      </div>
    </section>
  )
}