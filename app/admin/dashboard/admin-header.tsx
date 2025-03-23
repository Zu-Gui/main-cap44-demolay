"use client"

import { Button } from "@/components/ui/button"
import { LogOut } from "lucide-react"

export function AdminHeader() {

  return (
    <div className="flex justify-between items-center mb-8">
      <div>
        <h1 className="text-3xl font-bold">Painel Administrativo</h1>
        {/* {session?.user?.name && <p className="text-muted-foreground">Logado como: {session.user.name}</p>} */}
      </div>
      <Button variant="outline" onClick={() => { }}>
        <LogOut className="h-4 w-4 mr-2" />
        Sair
      </Button>
    </div >
  )
}

