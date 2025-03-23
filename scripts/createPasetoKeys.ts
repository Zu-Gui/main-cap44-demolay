import { generateKeys} from "paseto-ts/v4"


const keys = generateKeys("public")


console.log(`PASETO_PRIVATE=${keys.secretKey}`)
console.log(`PASETO_PUBLIC=${keys.publicKey}`)