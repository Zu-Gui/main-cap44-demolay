"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Trash2, ExternalLink, Loader2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

type News = {
  id: string
  title: string
  url: string
  imageUrl: string
  createdAt: string
}

export function NewsList() {
  const [news, setNews] = useState<News[]>([])
  const [loading, setLoading] = useState(true)
  const [deletingId, setDeletingId] = useState<string | null>(null)
  const { toast } = useToast()

  useEffect(() => {
    fetchNews()
  }, [])

  const fetchNews = async () => {
    try {
      const response = await fetch("/api/admin/news")
      if (response.ok) {
        const data = await response.json()
        setNews(data.news || [])
      } else {
        throw new Error("Erro ao carregar notícias")
      }
    } catch (error) {
      toast({
        title: "Erro",
        description: "Não foi possível carregar as notícias",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: string) => {
    setDeletingId(id)
    try {
      const response = await fetch(`/api/admin/news/${id}`, {
        method: "DELETE",
      })

      if (response.ok) {
        setNews(news.filter((item) => item.id !== id))
        toast({
          title: "Notícia removida",
          description: "A notícia foi removida com sucesso",
        })
      } else {
        throw new Error("Erro ao remover notícia")
      }
    } catch (error) {
      toast({
        title: "Erro",
        description: "Não foi possível remover a notícia",
        variant: "destructive",
      })
    } finally {
      setDeletingId(null)
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Notícias Cadastradas</CardTitle>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="flex justify-center py-8">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : news.length === 0 ? (
          <div className="text-center py-8 text-muted-foreground">Nenhuma notícia cadastrada</div>
        ) : (
          <div className="space-y-4">
            {news.map((item) => (
              <div key={item.id} className="border rounded-md overflow-hidden">
                <div className="grid grid-cols-[120px_1fr] h-full">
                  <div className="h-full">
                    <img
                      src={item.imageUrl || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 flex flex-col justify-between">
                    <div>
                      <h3 className="font-medium line-clamp-2">{item.title}</h3>
                      <div className="flex items-center mt-1">
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-blue-500 hover:underline flex items-center"
                        >
                          <span className="truncate max-w-[200px]">{item.url}</span>
                          <ExternalLink className="h-3 w-3 ml-1 inline" />
                        </a>
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        {item.createdAt && formatDate(item.createdAt)}
                      </div>
                    </div>
                    <div className="mt-2 flex justify-end">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDelete(item.id)}
                        disabled={deletingId === item.id}
                      >
                        {deletingId === item.id ? (
                          <Loader2 className="h-4 w-4 animate-spin text-red-500" />
                        ) : (
                          <Trash2 className="h-4 w-4 text-red-500" />
                        )}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}

