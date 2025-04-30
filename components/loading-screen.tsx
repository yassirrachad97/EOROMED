"use client"

import { motion, AnimatePresence } from "framer-motion"
import { GraduationCap } from "lucide-react"

interface LoadingScreenProps {
  isLoaded: boolean
}

export default function LoadingScreen({ isLoaded }: LoadingScreenProps) {
  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: [0.8, 1.2, 1], opacity: 1 }}
            transition={{ duration: 1.5, times: [0, 0.5, 1] }}
            className="relative"
          >
            <GraduationCap className="w-24 h-24 text-purple-500" />
            <motion.div
              className="absolute inset-0 rounded-full border-4 border-purple-500"
              initial={{ scale: 1, opacity: 0.3 }}
              animate={{ scale: 1.5, opacity: 0 }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
