import { createRouteHandler } from "uploadthing/next"
import { ourFileRouter } from "./core"

// Exportar o manipulador de rota
export const { GET, POST } = createRouteHandler({
  router: ourFileRouter,

})

