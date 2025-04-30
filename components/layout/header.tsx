"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronDown, Sparkles, Menu, X, Rocket, BookOpen, Lightbulb, Users, Globe, Home } from "lucide-react"

interface NavItem {
  name: string
  icon: React.ReactNode
  subItems?: string[]
}

interface HeaderProps {
  activeSection: number
}

export default function Header({ activeSection }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null)

  const navItems: NavItem[] = [
    { 
      name: "Accueil", 
      icon: <Home className="w-4 h-4" /> 
    },
    { 
      name: "Formations", 
      icon: <BookOpen className="w-4 h-4" />,
      subItems: ["Futurs étudiants", "Offre de Formation", "Établissements"] 
    },
    { 
      name: "Recherche", 
      icon: <Lightbulb className="w-4 h-4" />,
      subItems: ["Laboratoires", "Projets", "Publications"] 
    },
    { 
      name: "Campus", 
      icon: <Users className="w-4 h-4" />,
      subItems: ["Vie au campus", "Installations", "Services"] 
    },
    { 
      name: "UEMF", 
      icon: <Globe className="w-4 h-4" />,
      subItems: ["À propos", "International", "Partenariats"] 
    }
  ]

  const toggleDropdown = (index: number) => {
    if (activeDropdown === index) {
      setActiveDropdown(null)
    } else {
      setActiveDropdown(index)
    }
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-gradient-to-r from-blue-900/90 via-blue-800/90 to-blue-700/90 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <motion.div
              className="flex items-center space-x-2"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <Sparkles className="h-6 w-6 text-blue-400" />
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-500">
                UEMF
              </span>
            </motion.div>

            {/* Desktop Navigation - Minimized */}
            <motion.nav
              className="hidden md:flex space-x-1"
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              {navItems.map((item, index) => (
                <div key={index} className="relative">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      variant={activeSection === index ? "default" : "ghost"}
                      size="sm"
                      className={`flex items-center space-x-1 ${activeSection === index ? "bg-blue-700" : "text-white"}`}
                      onClick={() => item.subItems && toggleDropdown(index)}
                    >
                      {item.icon}
                      <span className="ml-1">{item.name}</span>
                      {item.subItems && (
                        <ChevronDown 
                          className={`h-3 w-3 transition-transform duration-200 ${activeDropdown === index ? "rotate-180" : ""}`} 
                        />
                      )}
                    </Button>
                  </motion.div>
                  
                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {item.subItems && activeDropdown === index && (
                      <motion.div 
                        className="absolute top-full left-0 mt-1 w-48 py-1 bg-white/10 backdrop-blur-lg rounded-md shadow-lg overflow-hidden"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.subItems.map((subItem, subIndex) => (
                          <motion.button
                            key={subIndex}
                            className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-blue-700/50 transition-colors"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: subIndex * 0.05 }}
                            onClick={() => setActiveDropdown(null)}
                          >
                            {subItem}
                          </motion.button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </motion.nav>

            {/* Mobile Menu Button */}
            <motion.div
              className="md:hidden"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-30 bg-gradient-to-b from-blue-900 to-blue-800 pt-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-1">
                {navItems.map((item, index) => (
                  <div key={index}>
                    <motion.div
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Button
                        variant={activeSection === index ? "default" : "ghost"}
                        className={`w-full justify-between text-base ${activeSection === index ? "bg-blue-700" : "text-white"}`}
                        onClick={() => item.subItems ? toggleDropdown(index) : setIsMenuOpen(false)}
                      >
                        <div className="flex items-center">
                          {item.icon}
                          <span className="ml-2">{item.name}</span>
                        </div>
                        {item.subItems && (
                          <ChevronDown 
                            className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === index ? "rotate-180" : ""}`} 
                          />
                        )}
                      </Button>
                    </motion.div>
                    
                    {/* Mobile Dropdown Submenu */}
                    <AnimatePresence>
                      {item.subItems && activeDropdown === index && (
                        <motion.div
                          className="pl-4 mt-1 space-y-1"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          {item.subItems.map((subItem, subIndex) => (
                            <motion.button
                              key={subIndex}
                              className="block w-full text-left py-2 px-4 text-sm text-white/90 hover:bg-blue-700/50 rounded-md transition-colors"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: subIndex * 0.05 }}
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {subItem}
                            </motion.button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}