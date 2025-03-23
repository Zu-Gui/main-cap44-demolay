import * as paseto from "paseto-ts/v4";


export function auth(req: Request) {
   try {
    const cookie = req.headers.get("cookie");

    if (!cookie) throw new Error("Nenhum cookie encontrado");



    const index = cookie.indexOf("auth_token=")

    if (index === -1) throw new Error("Nenhum token encontrado");

    const token = cookie.substring(index+11); 
    console.log(token)
    if (!token) throw new Error("Nenhum token encontrado");

    const payload = paseto.verify(process.env.PASETO_PUBLIC!,token);

    return payload
   } catch (error) {
    throw new Error("Nenhum token encontrado");
   }



}