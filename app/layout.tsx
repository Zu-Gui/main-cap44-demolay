import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Image from "next/image"
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Capítulo Juventude de Catanduva - Nº44 | Ordem DeMolay",
  description:
    "Site oficial do Capítulo Juventude de Catanduva nº44 da Ordem DeMolay. Conheça nossa história, projetos sociais e atividades.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        {/* Header */}
        <header className="bg-blue-900 text-white">
          <nav className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <Link className="flex items-center" href="https://demolaybrasil.org.br" >
                <Image
                  alt="Brasão DeMolay"
                  width={80}
                  height={80}
                  className="mr-2"
                  src="/img/brasao.png"
                />
              </Link>

              <button className="md:hidden focus:outline-none" aria-label="Toggle menu">
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
                  <line x1="4" x2="20" y1="12" y2="12"></line>
                  <line x1="4" x2="20" y1="6" y2="6"></line>
                  <line x1="4" x2="20" y1="18" y2="18"></line>
                </svg>
              </button>

              <div className="hidden md:flex items-center">
                <ul className="flex flex-row space-x-4">
                  <li>
                    <Link
                      className="px-3 py-2 rounded-full hover:bg-blue-800 transition duration-300 text-white"
                      href="/"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="px-3 py-2 rounded-full hover:bg-blue-800 transition duration-300 text-white"
                      href="/cursinho-demolay"
                    >
                      Cursinho DeMolay
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="px-3 py-2 rounded-full hover:bg-blue-800 transition duration-300 text-white"
                      href="/noticias"
                    >
                      Notícias
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>

        {/* Main Content */}
        <main className="min-h-screen">{children}</main>

        {/* Footer */}
        <footer className="w-full py-8 border-t bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Copyright */}
              <div className="text-center md:text-left">
                <p className="text-gray-600 text-sm leading-relaxed">
                  © 2025 Todos os direitos reservados{" "}
                  <a
                    className="text-blue-900 hover:underline font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.demolaybrasil.org.br/"
                  >
                    Ordem DeMolay Brasil
                  </a>{" "}
                  Capítulo Juventude de Catanduva n.º44
                </p>
              </div>

              {/* Logos */}
              <div className="flex items-center space-x-4">
                <Image
                  alt="Brasão DeMolay"
                  width={32}
                  height={32}
                  src="/img/brasao.png"
                  className="object-contain"
                />
                <Image
                  alt="Logo do Capítulo"
                  width={32}
                  height={32}
                  src="/img/logo.png"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}