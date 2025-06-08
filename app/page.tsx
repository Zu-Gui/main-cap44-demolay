import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Users, Heart, BookOpen, Calendar, MapPin, Newspaper } from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Capítulo Juventude de Catanduva - Nº44</h1>
              <p className="mb-4 text-lg">Bem-vindo ao site oficial do Capítulo Juventude de Catanduva!</p>
              <div className="flex gap-4 flex-wrap">
                <Link
                  href="https://www.instagram.com/demolaycatanduva/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-blue-900 hover:bg-blue-100 font-bold py-2 px-6 rounded-full transition duration-300 flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-instagram mr-2"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                  Instagram
                </Link>
                <Link
                  href="/cursinho-demolay"
                  className="bg-white text-blue-900 hover:bg-blue-100 font-bold py-2 px-6 rounded-full transition duration-300 flex items-center"
                >
                  Cursinho DeMolay
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <Image
                src="/img/logo.png"
                alt="Logo do Capítulo DeMolay"
                width={450}
                height={450}
                className="max-w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sobre o Capítulo */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-black">Sobre o Capítulo Juventude de Catanduva</h2>
            <p className="text-black">
              O Capítulo Juventude de Catanduva nº 44, da Ordem DeMolay, fundado em 29 de maio de 1986, é uma entidade dedicada à formação de jovens, promovendo valores como fraternidade, respeito, cidadania e serviço à comunidade. Desde sua fundação, tem sido um pilar de desenvolvimento moral e intelectual para adolescentes de Catanduva e região, incentivando a prática do bem e o fortalecimento dos laços de amizade. Com um histórico de relevantes contribuições sociais e eventos marcantes, o capítulo se destaca pelo compromisso com a excelência e a construção de um futuro melhor para seus membros e para a sociedade.
            </p>
            <p className="text-black">
              Entre nossas atividades, destacamos o Cursinho DeMolay, uma iniciativa social que oferece preparação gratuita para vestibulares a alunos da rede pública de ensino.
            </p>
          </div>
          <div className="w-full max-w-md">
            <Card className="h-auto shadow-lg border-0 p-4">
                <CardTitle className="inline-flex items-center gap-2 text-xl">
                  <span>Nossos Valores</span>
                </CardTitle>
              <CardContent className="p-0">
                <ul className="space-y-2 text-black">
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-red-600 rounded-full shrink-0"></span>
                    <span>Amor Filial</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-red-600 rounded-full shrink-0"></span>
                    <span>Reverência</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-red-600 rounded-full shrink-0"></span>
                    <span>Cortesia</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-red-600 rounded-full shrink-0"></span>
                    <span>Companheirismo</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-red-600 rounded-full shrink-0"></span>
                    <span>Fidelidade</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-red-600 rounded-full shrink-0"></span>
                    <span>Pureza</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-red-600 rounded-full shrink-0"></span>
                    <span>Patriotismo</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Atividades */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-3">
          <h2 className="text-3xl font-bold text-center mb-8">Nossas Atividades</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <BookOpen className="text-green-600" />, title: "Cursinho DeMolay", desc: "Apoio educacional gratuito.", link: "/cursinho-demolay", color: "green" },
              { icon: <Newspaper className="text-blue-600" />, title: "Jornal DeMolay", desc: "Nóticias sobre o Capítulo", link: "/noticias", color: "blue" },
              { icon: <MapPin className="text-red-600" />, title: "Praça DeMolay", desc: "Marco histórico local.", link: "/praca-demolay", color: "red" },
              { icon: <Users className="text-blue-600" />, title: "Projetos Sociais", desc: "Iniciativas solidárias com foco comunitário." },
            ].map(({ icon, title, desc, link, color }, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className={`w-16 h-16 bg-${color ?? "blue"}-100 mx-auto mb-4 rounded-full flex items-center justify-center`}>{icon}</div>
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-gray-700 mb-4">{desc}</p>
                {link && (
                  <Button className={`bg-${color}-600 hover:bg-${color}-700 text-white w-full`} asChild>
                    <Link href={link}>Saiba mais</Link>
                  </Button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fundador */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-black mb-3">Conheça o fundador da Ordem DeMolay</h2>
            <p className="text-black mb-5">
              Em reverência à memória de Frank Sherman Land, que em 18/03/1919, apadrinhou o primeiro grupo de jovens na intenção de fundar a Ordem DeMolay nos EUA, onde posteriormente se difundiu em todo mundo, sendo trazida ao Brasil por Alberto Mansur.
            </p>
            <a
              href="https://www.demolaybrasil.org.br/institucional/Nosso-Fundador"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-900 text-white hover:bg-blue-800 font-bold py-2 px-5 rounded-full inline-block text-sm"
            >
              Veja mais
            </a>
          </div>
          <div className="flex justify-center">
            <Image
              src="/img/martir.png"
              alt="Frank Sherman Land"
              width={600}
              height={450}
              className="rounded-lg shadow-md object-cover w-full max-w-md h-auto"
            />
          </div>
        </div>
      </section>
    </main>
  )
}
