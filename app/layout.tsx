import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Header from "@/components/Header"
import Image from "next/image"

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
        <Header />
        <link rel="icon" type="image/x-icon" href="/img/logo.png"></link>
        <main className="min-h-screen">{children}</main>

        <footer className="w-full py-8 border-t bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
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
