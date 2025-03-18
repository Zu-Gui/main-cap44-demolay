"use client"

import type React from "react"

import { useState } from "react"
import { useUploadThing } from "@/lib/uploadthing"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import { Loader2, UploadCloud } from "lucide-react"
import { useDropzone } from "@uploadthing/react"
import { generateClientDropzoneAccept } from "uploadthing/client"

export function AddNewsForm() {
  const [title, setTitle] = useState("")
  const [url, setUrl] = useState("")
  const [imageUrl, setImageUrl] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isUploading, setIsUploading] = useState(false)
  const { toast } = useToast()

  const { startUpload } = useUploadThing("newsImage")

  const onDrop = async (acceptedFiles: File[]) => {
    setIsUploading(true)
    try {
      const result = await startUpload(acceptedFiles)
      if (result && result[0]) {
        setImageUrl(result[0].url)
        toast({
          title: "Upload concluído",
          description: "A imagem foi carregada com sucesso",
        })
      }
    } catch (error) {
      toast({
        title: "Erro no upload",
        description: error instanceof Error ? error.message : "Ocorreu um erro ao fazer upload da imagem",
        variant: "destructive",
      })
    } finally {
      setIsUploading(false)
    }
  }

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: generateClientDropzoneAccept(["image/png", "image/jpeg"]),
    maxFiles: 1,
    disabled: isUploading,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!title || !url || !imageUrl) {
      toast({
        title: "Campos obrigatórios",
        description: "Preencha todos os campos e faça upload de uma imagem",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/admin/news", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          url,
          imageUrl,
        }),
      })

      if (response.ok) {
        toast({
          title: "Notícia adicionada",
          description: "A notícia foi adicionada com sucesso",
        })

        // Limpar o formulário
        setTitle("")
        setUrl("")
        setImageUrl("")
      } else {
        const data = await response.json()
        throw new Error(data.message || "Erro ao adicionar notícia")
      }
    } catch (error) {
      toast({
        title: "Erro",
        description: error instanceof Error ? error.message : "Erro ao adicionar notícia",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Adicionar Nova Notícia</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Título</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Digite o título da notícia"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="url">URL</Label>
            <Input
              id="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Digite a URL da notícia"
              required
            />
          </div>

          <div className="space-y-2">
            <Label>Imagem</Label>
            {imageUrl ? (
              <div className="relative">
                <img
                  src={imageUrl || "/placeholder.svg"}
                  alt="Preview"
                  className="w-full h-40 object-cover rounded-md"
                />
                <Button
                  type="button"
                  variant="destructive"
                  size="sm"
                  className="absolute top-2 right-2"
                  onClick={() => setImageUrl("")}
                >
                  Remover
                </Button>
              </div>
            ) : (
              <div
                {...getRootProps()}
                className={`w-full h-24 border-2 border-dashed rounded-md flex flex-col items-center justify-center p-4 cursor-pointer ${isUploading ? "opacity-50" : ""}`}
              >
                <input {...getInputProps()} />
                {isUploading ? (
                  <div className="flex flex-col items-center text-muted-foreground">
                    <Loader2 className="h-8 w-8 mb-2 animate-spin" />
                    <span>Enviando...</span>
                  </div>
                ) : (
                  <div className="flex flex-col items-center text-muted-foreground">
                    <UploadCloud className="h-8 w-8 mb-2" />
                    <span>Arraste uma imagem ou clique para selecionar</span>
                  </div>
                )}
              </div>
            )}
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" disabled={isSubmitting} className="w-full">
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Salvando...
              </>
            ) : (
              "Adicionar Notícia"
            )}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}

