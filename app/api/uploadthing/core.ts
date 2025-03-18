import { createUploadthing, type FileRouter } from "uploadthing/next"
import { auth } from "../auth/[...nextauth]/route"

const f = createUploadthing()

export const ourFileRouter = {
  // Uploader para imagens de preview
  newsImage: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
    .middleware(async ({ req }) => {
      // Verificar se o usuário está autenticado
      const session = await auth()
      if (!session) throw new Error("Não autorizado")

      return { userId: session.user?.id }
    })
    .onUploadComplete(async ({ metadata, file }) => {
      return { uploadedBy: metadata.userId, url: file.ufsUrl }
    }),

  // Uploader para arquivos PDF
  newsPdf: f({ pdf: { maxFileSize: "16MB", maxFileCount: 1 } })
    .middleware(async ({ req }) => {
      // Verificar se o usuário está autenticado
      const session = await auth()
      if (!session) throw new Error("Não autorizado")

        return { userId: session.user?.id }
      })
    .onUploadComplete(async ({ metadata, file }) => {
      return { uploadedBy: metadata.userId, url: file.ufsUrl }
    }),
} satisfies FileRouter

export type OurFileRouter = typeof ourFileRouter

