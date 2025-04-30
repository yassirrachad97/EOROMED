import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative py-12 bg-black overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,50,255,0.1),transparent_70%)]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Sparkles className="h-6 w-6 text-purple-400" />
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              UEMF
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              Une université d'excellence dédiée à l'innovation et à la réussite de ses étudiants.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-purple-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-purple-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-purple-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-white mb-6">Liens Rapides</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Formations
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Recherche
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Vie étudiante
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium text-white mb-6">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">📍</span>
                <span className="text-gray-400">Route Nationale Fès Meknès, Fès</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">📧</span>
                <span className="text-gray-400">contact@euromeduniversitas.fr</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 mr-2">📞</span>
                <span className="text-gray-400">053890-9000</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium text-white mb-6">Newsletter</h3>
            <p className="text-gray-400 mb-4">Restez informé des dernières actualités et événements</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 bg-gray-800 rounded-l-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <Button className="rounded-l-none bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                S'inscrire
              </Button> 67 8
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500">© {new Date().getFullYear()} EOROMED UNIVERSITY OF FES.</p>
        </div>
      </div>
    </footer>
  )
}
