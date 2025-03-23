import { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

interface AuthContextType {
    user: string | null;
    login: (username: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<string | null>(null);

    useEffect(() => {
        // Verificar token nos cookies
        const token = Cookies.get("auth_token");
        if (token) {
            setUser("Admin"); // Pode ser ajustado para decodificar e pegar o nome
        }
    }, []);

    async function login(username: string, password: string) {
        try {
            const res = await fetch("http://localhost:3000/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password }),
                credentials: "include", // Importante para enviar cookies
            });

            if (!res.ok) throw new Error("Credenciais inválidas");

            Cookies.set("auth_token", "true", { expires: 1, secure: true, sameSite: "Strict" });
            setUser(username);
        } catch (error) {
            console.error("Erro ao fazer login:", error);
            throw error;
        }
    }

    async function logout() {
        await fetch("http://localhost:3000/api/auth/logout", {
            method: "POST",
            credentials: "include",
        });

        Cookies.remove("auth_token");
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth deve ser usado dentro de um AuthProvider");
    return context;
}
