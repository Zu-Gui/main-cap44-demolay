import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"

import { UTApi } from "uploadthing/server"
import { auth } from "../../auth/middleware"


export async function POST(request: Request) {

  try {
  
  auth(request)

  const formData = await request.formData()
  

  const title = formData.get("title") as string
  const preview = formData.get("preview") as File
  const pdfFile = formData.get("pdf") as File

  const api  = new UTApi()

  const [previewResult, pdfResult] = await api.uploadFiles([preview, pdfFile])

  const previewUrl = previewResult.data?.ufsUrl
  const pdfUrl = pdfResult.data?.ufsUrl

  if (!previewUrl || !pdfUrl) {
    return NextResponse.json({ success: false, message: "Erro ao enviar os arquivos" }, { status: 500 })
  }


  await prisma.newspaper.create({
    data: {
      title,
      imageUrl: previewUrl,
      pdfUrl
    }})
  
  return NextResponse.json({ success: true })
  }
  catch (error) {
    console.error("Erro ao enviar os arquivos:", error)
    return NextResponse.json({ success: false, message: "Erro ao enviar os arquivos" }, { status: 500 })
  }
}

export async function GET() {
  try {
    // Verificar autenticação


    // Buscar todas as notícias
    const news = await prisma.newspaper.findMany({
      orderBy: {
        createdAt: "desc",
      },
    })

    return NextResponse.json({ success: true, news })
  } catch (error) {
    console.error("Erro ao buscar notícias:", error)
    return NextResponse.json({ success: false, message: "Erro interno do servidor" }, { status: 500 })
  }
}

