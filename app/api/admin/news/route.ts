import { NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "../../auth/[...nextauth]/route"
import prisma from "@/lib/prisma"

export async function POST(request: Request) {
  try {
    // Verificar autenticação
    const session = await getServerSession(authOptions)
    if (!session) {
      return NextResponse.json({ success: false, message: "Não autorizado" }, { status: 401 })
    }

    const { title, url, imageUrl, pdfUrl } = await request.json()

    // Validar os dados
    if (!title || !imageUrl || !pdfUrl) {
      return NextResponse.json({ success: false, message: "Título, imagem e PDF são obrigatórios" }, { status: 400 })
    }

    // Criar uma nova notícia no banco de dados
    const newNews = await prisma.newspaper.create({
      data: {
        title,
        url: url || null, // URL é opcional
        imageUrl,
        pdfUrl,
      },
    })

    return NextResponse.json({ success: true, news: newNews })
  } catch (error) {
    console.error("Erro ao criar notícia:", error)
    return NextResponse.json({ success: false, message: "Erro interno do servidor" }, { status: 500 })
  }
}

export async function GET() {
  try {
    // Verificar autenticação
    const session = await getServerSession(authOptions)
    if (!session) {
      return NextResponse.json({ success: false, message: "Não autorizado" }, { status: 401 })
    }

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

