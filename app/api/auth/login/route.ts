import { NextResponse } from "next/server";
import * as paseto from "paseto-ts/v4";

export async function POST(request: Request) {
  try {

    const body = await request.json();
    const { username, password } = body;

    if (password !== process.env.ADMIN_PASSWORD || username !== process.env.ADMIN_USERNAME) {
      return NextResponse.json({ success: false, message: "Credenciais inválidas" }, { status: 401 });
    }

    // 🔹 Gerar o token
    const token = paseto.sign(process.env.PASETO_PRIVATE!, JSON.stringify({ username }));

    // 🔹 Criar resposta e definir cookie corretamente
    const response = NextResponse.json({ success: true });

    response.cookies.set({
      name: "auth_token",
      value: token,
      httpOnly: true,
      secure: true, // 🔹 Somente em HTTPS
      sameSite: "lax",
      path: "/", // 🔹 Disponível em toda a aplicação
      maxAge: 60 * 60 * 24 * 30, // 🔹 Expira em 30 dias
    });

    return response; // 🔹 Retornando a resposta correta

  } catch (error) {
    console.error("Erro ao gerar token:", error);
    return NextResponse.json({ success: false, message: "Erro interno" }, { status: 500 });
  }
}
