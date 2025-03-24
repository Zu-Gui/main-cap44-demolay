import Image from "next/image"
import Link from "next/link"


export default function Home() {

  return (
    <main>
      {/* Home section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-2">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Capítulo Juventude de Catanduva - Nº44</h1>
              <p className="mb-4 text-lg">Bem-vindo ao site oficial do Capítulo Juventude de Catanduva!</p>
              <p className="italic mb-6">
                "O grande objetivo de nossa Ordem é ensinar e praticar as virtudes que nos levam a uma vida pura, reta,
                patriótica e reverente, como a melhor preparação para a maioridade da qual nos aproximamos. Nós
                procuramos, sinceramente, ser melhores filhos, melhores irmãos e melhores amigos, para que, ao chegarmos
                aos anos da maioridade, possamos ser melhores homens."
              </p>
              <div className="flex space-x-4 mb-6">
                <Link
                  href="https://www.instagram.com/demolaycatanduva/"
                  className="bg-transparent hover:bg-white hover:text-blue-900 text-white border border-white rounded-full p-3 transition duration-300 flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
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
                    className="lucide lucide-instagram"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
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
                alt="Logo do Capítulo Juventude de Catanduva"
                width={450}
                height={450}
                className="max-w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* About section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-2">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">Sobre o Capítulo Juventude de Catanduva</h2>
              <p className="mb-4">
                O Capítulo Juventude de Catanduva nº 44, da Ordem DeMolay, fundado em 29 de maio de 1986, é uma entidade dedicada à formação de jovens, promovendo valores como fraternidade, respeito, cidadania e serviço à comunidade. Desde sua fundação, tem sido um pilar de desenvolvimento moral e intelectual para adolescentes de Catanduva e região, incentivando a prática do bem e o fortalecimento dos laços de amizade. Com um histórico de relevantes contribuições sociais e eventos marcantes, o capítulo se destaca pelo compromisso com a excelência e a construção de um futuro melhor para seus membros e para a sociedade.
              </p>
              <p className="mb-6">
                Entre nossas atividades, destacamos o Cursinho DeMolay, uma iniciativa social que oferece preparação
                gratuita para vestibulares a alunos da rede pública de ensino.
              </p>
              <Link
                href="https://www.demolaybrasil.org.br/institucional/Historia-da-Organizacao"
                className="bg-blue-900 text-white hover:bg-blue-800 font-bold py-2 px-6 rounded-full transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Conheça a Ordem DeMolay
              </Link>
            </div>
            <div className="md:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">Nossos Valores</h3>
                  <ul className="list-disc pl-5">
                    <li>Amor Filial</li>
                    <li>Reverência</li>
                    <li>Cortesia</li>
                    <li>Companheirismo</li>
                    <li>Fidelidade</li>
                    <li>Pureza</li>
                    <li>Patriotismo</li>
                  </ul>
                </div>
                <div className="bg-gray-100 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">Nossas Atividades</h3>
                  <ul className="list-disc pl-5">
                    <li>Projetos Sociais – Iniciativas solidárias para ajudar a comunidade.</li> 
                    <li>Cursinho DeMolay – Apoio educacional para o crescimento acadêmico dos jovens.</li>
                    <li>Eventos Fraternais – Momentos de união e confraternização entre os membros.</li>
                    <li>Ações Comunitárias – Atividades voltadas ao bem-estar e desenvolvimento social.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-2">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">Conheça o fundador da Ordem DeMolay</h2>
              <p className="mb-6">
                Em reverência à memória de Frank Sherman Land, que em 18/03/1919, apadrinhou o primeiro grupo de jovens
                na intenção de fundar a Ordem DeMolay nos EUA, onde posteriormente se difundiu em todo mundo, sendo
                trazida ao Brasil por Alberto Mansur.
              </p>
              <Link
                href="https://www.demolaybrasil.org.br/institucional/Nosso-Fundador"
                className="bg-blue-900 text-white hover:bg-blue-800 font-bold py-2 px-6 rounded-full transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Veja mais
              </Link>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/img/martir.png"
                alt="Frank Sherman Land - Fundador da Ordem DeMolay"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

