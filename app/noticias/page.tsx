import prisma from "@/lib/prisma"
import { FileText, ExternalLink, ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

export const metadata = {
  title: "Notícias - Cursinho Demolay",
  description: "Confira as últimas notícias do Cursinho Demolay",
}

export default async function NoticiasPage({
  searchParams,
}: {
  searchParams: { page?: string }
}) {
  const currentPage = Number(searchParams.page) || 1
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
    <main className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <Button asChild variant="ghost" className="mb-4">
          <Link href="/">
            <ChevronLeft className="h-4 w-4 mr-2" />
            Voltar para a página inicial
          </Link>
        </Button>
        <h1 className="text-4xl font-bold">Notícias</h1>
        <p className="text-muted-foreground mt-2">Confira as últimas notícias e atualizações do Cursinho Demolay</p>
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

