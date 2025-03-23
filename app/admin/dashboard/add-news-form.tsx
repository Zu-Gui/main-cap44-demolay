"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import { File, Loader2, UploadCloud, X } from "lucide-react"
import { useDropzone } from "@uploadthing/react"
import { generateClientDropzoneAccept } from "uploadthing/client"
import Image from "next/image"
import { cn } from "@/lib/utils"

export function AddNewsForm() {
  const [title, setTitle] = useState("")
  const [preview, setPreview] = useState<File | null>(null)
  const [pdfFile, setPdfFile] = useState<File | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<{
    title?: string
    preview?: string
    pdf?: string
  }>({})

  const { toast } = useToast()

  const validateForm = () => {
    const newErrors: {
      title?: string
      preview?: string
      pdf?: string
    } = {}

    if (!title.trim()) {
      newErrors.title = "O título é obrigatório"
    }

    if (!preview) {
      newErrors.preview = "A imagem de preview é obrigatória"
    }

    if (!pdfFile) {
      newErrors.pdf = "O PDF é obrigatório"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      toast({
        title: "Formulário inválido",
        description: "Por favor, preencha todos os campos obrigatórios",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      // Prepare form data to send files to backend
      const formData = new FormData()
      formData.append("title", title)
      if (preview) formData.append("preview", preview)
      if (pdfFile) formData.append("pdf", pdfFile)

      // Send data to backend API
      const response = await fetch("/api/admin/news", {
        method: "POST",
        body: formData,
        credentials: "include",

      })

      if (!response.ok) {
        throw new Error("Falha ao enviar os dados para o servidor")
      }

      const data = await response.json()

      toast({
        title: "Notícia adicionada com sucesso!",
        description: "A notícia foi publicada com sucesso.",
      })

      // Reset form
      setTitle("")
      setPreview(null)
      setPdfFile(null)
    } catch (error) {
      console.error("Erro ao adicionar notícia:", error)
      toast({
        title: "Erro ao adicionar notícia",
        description: "Ocorreu um erro ao adicionar a notícia. Tente novamente.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const imageDropzone = useDropzone({
    onDrop: (acceptedFiles: File[]) => {
      if (acceptedFiles.length > 0) {
        setPreview(acceptedFiles[0])
        setErrors((prev) => ({ ...prev, preview: undefined }))
      }
    },
    accept: generateClientDropzoneAccept(["image/png", "image/jpeg"]),
    maxFiles: 1,
  })

  const pdfDropzone = useDropzone({
    onDrop: (acceptedFiles: File[]) => {
      if (acceptedFiles.length > 0) {
        setPdfFile(acceptedFiles[0])
        setErrors((prev) => ({ ...prev, pdf: undefined }))
      }
    },
    accept: generateClientDropzoneAccept(["application/pdf"]),
    maxFiles: 1,
  })

  const removePreview = () => {
    setPreview(null)
  }

  const removePdf = () => {
    setPdfFile(null)
  }

  const isLoading = isSubmitting

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Adicionar Nova Notícia</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title" className="font-medium">
              Título <span className="text-red-500">*</span>
            </Label>
            <Input
              id="title"
              placeholder="Título da notícia"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value)
                if (e.target.value.trim()) {
                  setErrors((prev) => ({ ...prev, title: undefined }))
                }
              }}
              className={cn(errors.title && "border-red-500")}
              disabled={isLoading}
            />
            {errors.title && <p className="text-sm text-red-500">{errors.title}</p>}
          </div>

          <div className="space-y-2">
            <Label className="font-medium">
              Imagem de Preview <span className="text-red-500">*</span>
            </Label>
            <div className="flex flex-col gap-4">
              {preview ? (
                <div className="relative w-full h-40 bg-gray-100 rounded-md overflow-hidden">
                  <Image
                    src={URL.createObjectURL(preview) || "/placeholder.svg"}
                    alt="Preview"
                    fill
                    className="object-contain"
                  />
                  <Button
                    type="button"
                    variant="destructive"
                    size="icon"
                    className="absolute top-2 right-2 h-8 w-8"
                    onClick={removePreview}
                    disabled={isLoading}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ) : (
                <div
                  {...imageDropzone.getRootProps()}
                  className={cn(
                    "border-2 border-dashed rounded-md p-6 cursor-pointer hover:bg-gray-50 transition-colors flex flex-col items-center justify-center gap-2",
                    errors.preview ? "border-red-500" : "border-gray-300",
                  )}
                >
                  <UploadCloud className="w-8 h-8 text-gray-400" />
                  <div className="text-center">
                    <p className="text-sm font-medium">Arraste e solte ou clique para selecionar</p>
                    <p className="text-xs text-gray-500">PNG ou JPEG (máx. 5MB)</p>
                  </div>
                  <input {...imageDropzone.getInputProps()} disabled={isLoading} />
                </div>
              )}
              {errors.preview && <p className="text-sm text-red-500">{errors.preview}</p>}
            </div>
          </div>

          <div className="space-y-2">
            <Label className="font-medium">
              PDF <span className="text-red-500">*</span>
            </Label>
            <div className="flex flex-col gap-4">
              {pdfFile ? (
                <div className="flex items-center p-4 bg-gray-50 rounded-md">
                  <File className="h-8 w-8 text-blue-500 mr-3" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{pdfFile.name}</p>
                    <p className="text-xs text-gray-500">{(pdfFile.size / 1024 / 1024).toFixed(2)} MB</p>
                  </div>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="ml-2"
                    onClick={removePdf}
                    disabled={isLoading}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ) : (
                <div
                  {...pdfDropzone.getRootProps()}
                  className={cn(
                    "border-2 border-dashed rounded-md p-6 cursor-pointer hover:bg-gray-50 transition-colors flex flex-col items-center justify-center gap-2",
                    errors.pdf ? "border-red-500" : "border-gray-300",
                  )}
                >
                  <UploadCloud className="w-8 h-8 text-gray-400" />
                  <div className="text-center">
                    <p className="text-sm font-medium">Arraste e solte ou clique para selecionar</p>
                    <p className="text-xs text-gray-500">PDF (máx. 10MB)</p>
                  </div>
                  <input {...pdfDropzone.getInputProps()} disabled={isLoading} />
                </div>
              )}
              {errors.pdf && <p className="text-sm text-red-500">{errors.pdf}</p>}
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button type="submit" disabled={isLoading}>
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {isLoading ? "Enviando..." : "Adicionar Notícia"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}

