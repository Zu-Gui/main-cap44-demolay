"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false)

  return (
    <header className="bg-blue-900 text-white">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link className="flex items-center" href="https://demolaybrasil.org.br">
            <Image
              alt="Brasão DeMolay"
              width={80}
              height={80}
              className="mr-2"
              src="/img/brasao.png"
            />
          </Link>

          {/* Botão do menu mobile */}
          <button
            className="md:hidden focus:outline-none"
            aria-label="Abrir menu"
            aria-expanded={menuAberto}
            onClick={() => setMenuAberto(!menuAberto)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
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

          {/* Menu Desktop */}
          <ul className="hidden md:flex flex-row space-x-4">
            <li>
              <Link className="px-4 py-2 rounded-full hover:bg-blue-800 transition duration-300" href="/">Home</Link>
            </li>
            <li>
              <Link className="px-4 py-2 rounded-full hover:bg-blue-800 transition duration-300" href="/cursinho-demolay">Cursinho DeMolay</Link>
            </li>
            <li>
              <Link className="px-4 py-2 rounded-full hover:bg-blue-800 transition duration-300" href="/noticias">Notícias</Link>
            </li>
          </ul>
        </div>

        {/* Menu Mobile com animação */}
        <div
          className={`md:hidden mt-4 transition-all duration-300 overflow-hidden ${
            menuAberto ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col space-y-2">
            <li>
              <Link
                onClick={() => setMenuAberto(false)}
                className="block px-4 py-2 text-white bg-blue-800 rounded-md"
                href="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setMenuAberto(false)}
                className="block px-4 py-2 text-white bg-blue-800 rounded-md"
                href="/cursinho-demolay"
              >
                Cursinho DeMolay
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setMenuAberto(false)}
                className="block px-4 py-2 text-white bg-blue-800 rounded-md"
                href="/noticias"
              >
                Notícias
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
