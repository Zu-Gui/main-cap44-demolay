"use client"
import type React from "react"

import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { useAuth } from "@/lib/auth"

export function AuthCheck({ children }: { children: React.ReactNode }) {

  const { user } = useAuth()

  const router = useRouter()

  useEffect(() => {
    if (!user) {
      router.push("/admin/login")
    }
  }, [user, router])

  if (!user) {
    return null
  }

  return <>{children}</>


}

