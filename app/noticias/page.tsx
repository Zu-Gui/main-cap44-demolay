import prisma from "@/lib/prisma"
import { FileText, ExternalLink, ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "Notícias - Jornal DeMolay",
  description: "Confira as últimas notícias do Jornal DeMolay",
}

export default async function NoticiasPage({
  searchParams,
}: {
  searchParams: { page?: string }
}) {
  // Ensure searchParams is awaited before accessing its properties
  const params = await searchParams
  const currentPage = Number(params.page) || 1
  const pageSize = 9
  const skip = (currentPage - 1) * pageSize

  const [news, totalCount] = await Promise.all([
    prisma.newspaper.findMany({
      orderBy: {
        createdAt: "desc",
      },
      skip,
      take: pageSize,
    }),
    prisma.newspaper.count(),
  ])

  const totalPages = Math.ceil(totalCount / pageSize)

  return (
    <>
      {/* Hero section - outside main container to connect with header */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Capítulo Juventude de Catanduva - Nº44</h1>
              <p className="mb-4 text-lg">
                Bem vindo ao Jornal DeMolay!<br /> 
                <br />
                Com a intenção de ajudar a divulgação dos projetos de nosso capítulo, e mostrar os nossos esforços na sociedade de Catanduva, o Capítulo Juventude de Catanduva nº 44 criou o Notícias do 44, o jornal do Nosso Capítulo.<br />
                Nós produzimos uma edição que conta com todas as atividades e divulgações do nosso Capítulo, e uma entrevista com algum irmão, tio ou tia que contribui ou contribuiu para o nosso Capítulo.<br />
                Nossas edições são mensais, entregues em todas as lojas de Catanduva e Pindorama, postadas no Instagram do Capítulo e adicionadas no site sempre na primeira sexta-feira do mês.
              </p>
              <br />
              <div>
                <Link
                  href="/"
                  className="bg-white text-blue-900 hover:bg-blue-100 font-bold py-2 px-6 rounded-full transition duration-300 flex items-center"
                >
                  <ChevronLeft className="h-4 w-4 mr-2" />
                  Voltar para a página inicial
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <Image
                src="/img/Logo-Jornal.png"
                alt="Logo do Jornal DeMolay"
                width={450}
                height={450}
                className="max-w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-16 bg-white">
        <div className="mb-8">
          <h1 className="text-4xl font-bold">Notícias</h1>
          <p className="text-muted-foreground mt-2">Confira as últimas notícias e atualizações do Jornal DeMolay</p>
        </div>

        {news.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Nenhuma notícia disponível no momento.</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {news.map((item) => (
                <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
                  <div className="relative h-48">
                    <img
                      src={item.imageUrl || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <p className="text-white text-xs">{new Date(item.createdAt).toLocaleDateString("pt-BR")}</p>
                    </div>
                  </div>
                  <div className="p-4 flex-1 flex flex-col">
                    <h2 className="font-bold text-lg mb-2">{item.title}</h2>
                    <div className="mt-auto pt-4 flex gap-2">
                      <Button asChild variant="default" size="sm" className="flex-1">
                        <a href={item.pdfUrl} target="_blank" rel="noopener noreferrer">
                          <FileText className="h-4 w-4 mr-2" />
                          Ver PDF
                        </a>
                      </Button>

                      {item.url && (
                        <Button asChild variant="outline" size="sm">
                          <a href={item.url} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {totalPages > 1 && (
              <div className="mt-12 flex justify-center">
                <NewsPagination currentPage={currentPage} totalPages={totalPages} />
              </div>
            )}
          </>
        )}
      </main>
    </>
  )
}

function NewsPagination({ currentPage, totalPages }: { currentPage: number; totalPages: number }) {
  // Generate an array of page numbers to display
  const getPageNumbers = () => {
    const pages = []

    // Always show first page
    pages.push(1)

    // Calculate range around current page
    const startPage = Math.max(2, currentPage - 1)
    const endPage = Math.min(totalPages - 1, currentPage + 1)

    // Add ellipsis after first page if needed
    if (startPage > 2) {
      pages.push("ellipsis-start")
    }

    // Add pages around current page
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i)
    }

    // Add ellipsis before last page if needed
    if (endPage < totalPages - 1) {
      pages.push("ellipsis-end")
    }

    // Always show last page if there's more than one page
    if (totalPages > 1) {
      pages.push(totalPages)
    }

 /*Meus agradecimentos ao amigo e irmão Kevny (Izumi) que me ajudou a desenvolver o site.
  
    \  |  /
    \ | /
     \|/
 ---- ☀ ----
     /|\
    / | \
   /  |  \

(o_o)               (o_o)
/( )\               /( )\
_/ \_               _/ \_
--"     "--         --"     "--
/           \       /           \
/             \     /             \


*/

    return pages
  }

  const pageNumbers = getPageNumbers()

  return (
    <Pagination>
      <PaginationContent>
        {currentPage > 1 && (
          <PaginationItem>
            <PaginationPrevious href={`/noticias?page=${currentPage - 1}`} />
          </PaginationItem>
        )}

        {pageNumbers.map((page, index) => {
          if (page === "ellipsis-start" || page === "ellipsis-end") {
            return (
              <PaginationItem key={`ellipsis-${index}`}>
                <PaginationEllipsis />
              </PaginationItem>
            )
          }

          return (
            <PaginationItem key={page}>
              <PaginationLink href={`/noticias?page=${page}`} isActive={page === currentPage}>
                {page}
              </PaginationLink>
            </PaginationItem>
          )
        })}

        {currentPage < totalPages && (
          <PaginationItem>
            <PaginationNext href={`/noticias?page=${currentPage + 1}`} />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  )
}

