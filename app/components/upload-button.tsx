"use client"

import { useCallback } from "react"
import { useDropzone } from "@uploadthing/react"
import { generateClientDropzoneAccept } from "uploadthing/client"
import { Button } from "@/components/ui/button"
import { UploadCloud } from "lucide-react"

export function UploadButton({
  endpoint,
  onClientUploadComplete,
  onUploadError,
}: {
  endpoint: "newsImage"
  onClientUploadComplete: (res: any) => void
  onUploadError: (error: Error) => void
}) {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Você pode fazer algo com os arquivos aqui se necessário
  }, [])

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: generateClientDropzoneAccept(["image/png", "image/jpeg"]),
  })

  return (
    <Button  variant="outline" {...getRootProps()} className="w-full h-24 border-dashed">
      <input {...getInputProps()} />
      <div className="flex flex-col items-center justify-center text-muted-foreground">
        <UploadCloud className="h-8 w-8 mb-2" />
        <span>Arraste uma imagem ou clique para selecionar</span>
      </div>
    </Button>
  )
}

