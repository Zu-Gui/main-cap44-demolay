import { NextResponse } from "next/server"
import prisma from "@/lib/prisma"

export async function GET() {
  try {
    // Buscar todas as notícias para exibição pública
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

