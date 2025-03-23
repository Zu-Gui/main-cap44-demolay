import { NextResponse } from "next/server";

export async function POST() {
  try {
    const response = NextResponse.json({ success: true, message: "Logout realizado" });

    // 🔹 Remover o cookie ao definir um valor vazio e um tempo de expiração imediato
    response.cookies.set({
      name: "auth_token",
      value: "",
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      path: "/",
      maxAge: 0, 
    });

    return response;
  } catch (error) {
    console.error("Erro ao fazer logout:", error);
    return NextResponse.json({ success: false, message: "Erro interno" }, { status: 500 });
  }
}
