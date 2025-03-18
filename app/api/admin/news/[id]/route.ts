import { NextResponse } from "next/server"
import { getServerSession } from "next-auth/next"
import { authOptions } from "../../../auth/[...nextauth]/route"
import prisma from "@/lib/prisma"

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    // Verificar autenticação
    const session = await getServerSession(authOptions)
    if (!session) {
      return NextResponse.json({ success: false, message: "Não autorizado" }, { status: 401 })
    }

    const id = params.id

    // Verificar se a notícia existe
    const news = await prisma.newspaper.findUnique({
      where: { id },
    })

    if (!news) {
      return NextResponse.json({ success: false, message: "Notícia não encontrada" }, { status: 404 })
    }

    // Excluir a notícia
    await prisma.newspaper.delete({
      where: { id },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Erro ao excluir notícia:", error)
    return NextResponse.json({ success: false, message: "Erro interno do servidor" }, { status: 500 })
  }
}

