import NextAuth, { NextAuthConfig } from "next-auth"
import credentialsProvider from "next-auth/providers/credentials"


const username = process.env.ADMIN_USERNAME
const password = process.env.ADMIN_PASSWORD


export const authOptions = {
  providers: [
    credentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "admin" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (credentials?.username === username && credentials?.password === password) {
          return {
            id: "admin",
            name: username,
          }
        }
        return null
      },
    }),
  ],
  pages: {
    signIn: "/admin/login",
  },
 
}satisfies NextAuthConfig

export const { auth, handlers, signIn, signOut } = NextAuth(authOptions)
