"use client"

import { AuthProvider } from "@/lib/auth"
import type React from "react"


export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <AuthProvider>{children}</AuthProvider>
}

