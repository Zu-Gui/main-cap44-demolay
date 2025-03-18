import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="py-6 border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600">
              &copy; {new Date().getFullYear()} Todos os direitos reservados{" "}
              <Link
                href="https://www.demolaybrasil.org.br/"
                className="text-blue-900 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ordem DeMolay Brasil
              </Link>{" "}
              Capítulo Juventude de Catanduva n.º 44
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <Image src="/img/logo.png" alt="Brasão DeMolay" width={30} height={30} />
            <Image src="/img/brasao.png" alt="Logo do Capítulo" width={30} height={30} />
          </div>
        </div>
      </div>
    </footer>
  )
}

