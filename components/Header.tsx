'use client'
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const path = usePathname()

  return (
    <header className="bg-blue-900 text-white">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link
            href="https://www.demolaybrasil.org.br/"
            className="flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/img/brasao.png"
              alt="Brasão DeMolay"
              width={80}
              height={80}
              className="mr-2"
            />
          </Link>

          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
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
              className="lucide lucide-menu"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>

          <div
            className={`md:flex items-center ${isMenuOpen ? "block absolute top-20 left-0 right-0 bg-blue-900 p-4 z-50" : "hidden"} md:static`}
          >
            <ul className="flex flex-col md:flex-row md:space-x-4">
              <li className="mb-2 md:mb-0">
                <Link
                  href="/"
                  className={`px-3 py-2 rounded-full hover:bg-blue-800 transition duration-300 block ${path === "/" ? "bg-white text-blue-900 font-bold" : ""}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li className="mb-2 md:mb-0">
                <Link
                  href="/cursinho-demolay"
                  className={`px-3 py-2 rounded-full hover:bg-blue-800 transition duration-300 block ${path === "/cursinho-demolay" ? "bg-white text-blue-900 font-bold" : ""}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Cursinho DeMolay
                </Link>
              </li>
              <li className="mb-2 md:mb-0">
                <Link
                  href="/noticias"
                  className={`px-3 py-2 rounded-full hover:bg-blue-800 transition duration-300 block ${path === "/noticias" ? "bg-white text-blue-900 font-bold" : ""}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Notícias
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

