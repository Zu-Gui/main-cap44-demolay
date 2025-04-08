import Image from "next/image"
import Link from "next/link"


type Link = {
  year: string;
  link: string;
}

export default function CursinhoDeMolay() {
  const linkMap: Link[] = [{
     year: "2024", link: "/img/2024.pdf"}]
  return (
    <main>
      {/* Hero section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Capítulo Juventude de Catanduva - Nº44</h1>
              <p className="mb-4 text-lg">Bem vindo à inscrição do Cursinho DeMolay!</p>
              <div>
                <Link
                  href="https://www.instagram.com/cursinhodemolay/"
                  className="bg-white text-blue-900 hover:bg-blue-100 font-bold py-2 px-6 rounded-full transition duration-300 flex items-center"
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
                    className="lucide lucide-instagram mr-2"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                  Siga-nos no Instagram
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <Image
                src="/img/Cursinho-Laranja.png"
                alt="Logo do Cursinho DeMolay"
                width={450}
                height={450}
                className="max-w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Cursinho info section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gray-100 p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-6 text-center">Cursinho DeMolay</h2>
            <div className="prose max-w-none">
              <p>Olá aluno(a), espero que esteja bem!</p>
              <p>
                Com a intenção de ajudar a comunidade de vestibulandos de Catanduva, o Capítulo Juventude de Catanduva
                nº 44 inicia a <strong>quinta edição</strong> de seu Cursinho Popular, visando promover o melhor auxílio
                para alunos e ex-alunos do ensino público que enfrentarão o <strong>ENEM</strong> e demais vestibulares
                em 2025. As inscrições para o Cursinho DeMolay estarão abertas até o dia 03/03/2025. As atividades serão
                aos sábados, das 8h00 às 12h00.
              </p>

              <h3 className="text-xl font-bold mt-6">Como funciona o Cursinho DeMolay?</h3>
              <p>
                O Cursinho DeMolay iniciará suas aulas no final de abril, dando continuidade ao longo do ano até em
                outubro, com recesso no mês julho.
              </p>

              <h3 className="text-xl font-bold mt-6">Quais disciplinas serão abordadas no Cursinho Demolay?</h3>
              <p>
                Pelo caráter modular, o Cursinho DeMolay não compreenderá todas as disciplinas. As disciplinas abordadas
                serão: Linguagens e Códigos, Matemática, Redação, Física, Biologia, Química, História, Geografia e
                Atualidades.
              </p>

              <h3 className="text-xl font-bold mt-6">Onde e como serão as aulas do Cursinho DeMolay?</h3>
              <p>
                As aulas serão presenciais, realizadas em uma sala de aula disponibilizada para o projeto no Colégio
                Kelvin (Avenida Comendador Antônio Stocco, 915 - Parque Joaquim Lopes).
              </p>

              <h3 className="text-xl font-bold mt-6">Como saber se posso me inscrever no Cursinho DeMolay?</h3>
              <p>
                É importante destacar que o público-alvo do projeto são <strong>EXCLUSIVAMENTE</strong> ALUNOS E
                EX-ALUNOS DO ENSINO PÚBLICO, que já se formaram ou ainda estão no Terceiro Ano do Ensino Médio.
              </p>

              <p className="mt-6">Preencha seus dados corretamente clicando em "Realizar inscrição".</p>
            </div>
            <div className="flex justify-center mt-8">
              <p className="text-red-600 text-lg font-semibold">
                  As inscrições foram encerradas. Agradecemos o interesse!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Previous exams section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Provas Anteriores</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Exam cards */}
            {linkMap.map(({year, link}) => (
              <div key={year} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-blue-900 text-white p-4">
                  <h3 className="text-xl font-bold">Prova {year}</h3>
                </div>
                <div className="p-6">
                  <p className="mb-4">Acesse a prova aplicada no cursinho demolay no ano de {year}.</p>
                  <div className="space-y-2">
                  <div key={`${year}`} className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-blue-900 mr-2"
                        >
                          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                          <polyline points="14 2 14 8 20 8" />
                        </svg>
                        <a download href={link} className="text-blue-900 hover:underline">
                          Simulado {year}
                        </a>
                      </div>
                  </div>
                </div>
                
              </div>
            ))}
          </div>

          
        </div>
      </section>


    </main>
  )
}

