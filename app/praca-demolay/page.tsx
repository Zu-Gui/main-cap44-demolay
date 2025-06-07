import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, Flag, Camera, Clock, Award, Users } from "lucide-react"

export default function PracaDeMolayPage() {
  return (
    <div className="bg-gray-50">

      {/* Hero Section */}
<section className="bg-blue-900 text-white py-16">
  <div className="container mx-auto px-4">
    <div className="flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Praça DeMolay</h1>
        <p className="mb-4 text-lg">
          Conheça a história da inauguração e reinauguração da Praça DeMolay.
        </p>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <Image
          src="/img/logopraca.png"
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

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <Flag className="w-5 h-5 mr-2 text-red-600" />
                Navegação
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">INAUGURAÇÃO (2015)</h3>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="#inauguracao"
                        className="flex items-center text-blue-900 hover:text-blue-700 transition-colors"
                      >
                        <div className="w-6 h-6 bg-blue-100 rounded-md flex items-center justify-center mr-2">
                          <span className="text-blue-700 text-xs">📄</span>
                        </div>
                        Inauguração
                      </a>
                    </li>
                    <li>
                      <a
                        href="#gestao-58"
                        className="flex items-center text-blue-900 hover:text-blue-700 transition-colors"
                      >
                        <div className="w-6 h-6 bg-blue-100 rounded-md flex items-center justify-center mr-2">
                          <span className="text-blue-700 text-xs">👑</span>
                        </div>
                        Gestão 58ª
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">
                    REINAUGURAÇÃO (2021)
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="#reinauguracao"
                        className="flex items-center text-blue-900 hover:text-blue-700 transition-colors"
                      >
                        <div className="w-6 h-6 bg-green-100 rounded-md flex items-center justify-center mr-2">
                          <span className="text-green-700 text-xs">🔄</span>
                        </div>
                        Reinauguração
                      </a>
                    </li>
                    <li>
                      <a
                        href="#gestao-69"
                        className="flex items-center text-blue-900 hover:text-blue-700 transition-colors"
                      >
                        <div className="w-6 h-6 bg-green-100 rounded-md flex items-center justify-center mr-2">
                          <span className="text-green-700 text-xs">👑</span>
                        </div>
                        Gestão 69ª
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">GALERIA</h3>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="#galeria"
                        className="flex items-center text-blue-900 hover:text-blue-700 transition-colors"
                      >
                        <div className="w-6 h-6 bg-purple-100 rounded-md flex items-center justify-center mr-2">
                          <Camera className="w-3 h-3 text-purple-700" />
                        </div>
                        Fotos
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="md:col-span-2 space-y-8">
            {/* Inauguração */}
            <Card id="inauguracao">
              <CardHeader className="bg-blue-50">
                <CardTitle className="flex items-center text-2xl">
                  <Calendar className="w-6 h-6 mr-2 text-blue-700" />
                  Inauguração da Praça DeMolay
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div className="flex items-center mb-4">
                    <Badge className="bg-blue-100 text-blue-800 border-blue-200 mr-2">Gestão 58ª</Badge>
                    <span className="text-gray-500 text-sm flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      Data: 06 de Dezembro de 2015
                    </span>
                  </div>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    A inauguração da Praça DeMolay foi um marco histórico para o Capítulo Juventude de Catanduva,
                    representando não apenas o reconhecimento da comunidade pelos trabalhos desenvolvidos pela Ordem
                    DeMolay na cidade, mas também a materialização de um sonho acalentado por várias gerações de
                    DeMolays catanduvenses.
                  </p>

                  <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                    <h3 className="font-bold text-blue-900 mb-3 flex items-center">
                      <Award className="w-5 h-5 mr-2" />O Projeto da Praça
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      O projeto da Praça DeMolay foi idealizado como um espaço público que pudesse servir tanto como
                      área de lazer para a comunidade quanto como um símbolo permanente dos valores e princípios da
                      Ordem DeMolay.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 my-8">
                    <div className="cursor-pointer group">
                      <Image
                        src="/img/ing/inaguracao.avif"
                        alt="Cerimônia de Inauguração da Praça DeMolay"
                        width={350}
                        height={250}
                        className="rounded-lg shadow-md group-hover:shadow-lg transition-shadow"
                      />
                      <p className="text-sm text-gray-600 mt-2 text-center">Cerimônia de Inauguração - 06 de Dezembro de 2015</p>
                    </div>

                    <div className="cursor-pointer group">
                      <Image
                        src="/img/ing/autoridades.avif"
                        alt="Autoridades presentes na inauguração"
                        width={350}
                        height={250}
                        className="rounded-lg shadow-md group-hover:shadow-lg transition-shadow"
                      />
                      <p className="text-sm text-gray-600 mt-2 text-center">Autoridades</p>
                    </div>
                  </div>

                    {/* Gestão 58ª */}
            <Card id="gestao-58">
              <CardHeader className="bg-blue-50">
                <CardTitle className="flex items-center text-2xl">
                  <Users className="w-6 h-6 mr-2 text-blue-700" />
                  Gestão 58ª - Realizadores do Sonho
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div className="bg-blue-50 p-6 rounded-lg mb-6">
                    <h3 className="font-bold text-blue-900 mb-4">Tríade da Gestão 58ª</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <ul className="space-y-3">
                        <li className="flex items-center">
                          <span className="w-3 h-3 bg-blue-600 rounded-full mr-3"></span>
                          <div>
                            <strong>Mestre Conselheiro:</strong>
                            <br />
                            <span className="text-gray-700">João Pedro Zapaterra Rinaldi</span>
                          </div>
                        </li>
                        <li className="flex items-center">
                          <span className="w-3 h-3 bg-blue-600 rounded-full mr-3"></span>
                          <div>
                            <strong>1º Conselheiro:</strong>
                            <br />
                            <span className="text-gray-700">Bruno Lorensini Gonzales Iwashima</span>
                          </div>
                        </li>
                      </ul>
                      <ul className="space-y-3">
                        <li className="flex items-center">
                          <span className="w-3 h-3 bg-blue-600 rounded-full mr-3"></span>
                          <div>
                            <strong>2º Conselheiro:</strong>
                            <br />
                            <span className="text-gray-700">João Pedro Daóglio Salles</span>
                          </div>
                        </li>
                        <li className="flex items-center">
                          <span className="w-3 h-3 bg-blue-600 rounded-full mr-3"></span>
                          <div>
                            <strong>Escrivão:</strong>
                            <br />
                            <span className="text-gray-700">Gabriel Leite Braga</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                    <h4 className="font-medium text-gray-900 mb-4 flex items-center">
                      <Users className="w-5 h-5 mr-2" />
                      Autoridades Presentes na Inauguração (06/12/2015)
                    </h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-semibold text-blue-900 mb-3">Autoridades Maçonicas e Públicas</h5>
                        <ul className="space-y-2 text-gray-700">
                          <li>
                            • <strong>Presidente Conselho Consultivo:</strong> Daniel Volpi
                          </li>
                          <li>
                            • <strong>Consultor do Capítulo:</strong> Hugo De Britto
                          </li>
                          <li>
                            • <strong>Consultor:</strong> Manoel Alvarez Munhoz
                          </li>
                          <li>
                            • <strong>Consultor:</strong> Marcos Nishiyama
                          </li>
                          <li>
                            • <strong>Consultor:</strong> João Batista Rinaldi
                          </li>
                          <li>
                            • <strong>Consultor:</strong> Silvio Gil
                          </li>
                          <li>
                            • <strong>Prefeito Municipal:</strong> Sr. Geraldo Vinholi
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

          

                  <p className="text-gray-700 leading-relaxed text-lg">
                    A Gestão 58ª será eternamente lembrada como a administração que transformou um sonho em realidade.
                    Sob a liderança  do Mestre Conselheiro Zapaterra Rinaldi, esta gestão demonstrou que com
                    determinação, trabalho em equipe e perseverança, é possível alcançar objetivos que parecem
                    impossíveis.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Reinauguração */}
            <Card id="reinauguracao">
              <CardHeader className="bg-green-50">
                <CardTitle className="flex items-center text-2xl">
                  <Calendar className="w-6 h-6 mr-2 text-green-700" />
                  Reinauguração da Praça DeMolay
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div className="flex items-center mb-4">
                    <Badge className="bg-green-100 text-green-800 border-green-200 mr-2">Gestão 69ª</Badge>
                    <span className="text-gray-500 text-sm flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      Data: 29 de maio de 2021
                    </span>
                  </div>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    A reinauguração da Praça DeMolay foi um momento de renovação e revitalização deste importante espaço
                    para o Capítulo Juventude de Catanduva. Após cinco anos da inauguração inicial, a praça havia
                    sofrido com o desgaste natural do tempo e necessitava de intervenções significativas.
                  </p>

                  <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                    <h3 className="font-bold text-green-900 mb-3 flex items-center">
                      <Award className="w-5 h-5 mr-2" />O Projeto de Revitalização
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      O projeto de revitalização foi concebido não apenas como uma reforma, mas como uma oportunidade de
                      modernizar e ampliar as funcionalidades da praça. A Gestão 69ª identificou a necessidade de criar
                      um espaço mais acolhedor e funcional.
                    </p>
                  </div>

                   {/* Gestão 69ª */}
            <Card id="gestao-69">
              <CardHeader className="bg-green-50">
                <CardTitle className="flex items-center text-2xl">
                  <Users className="w-6 h-6 mr-2 text-green-700" />
                  Gestão 69ª
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div className="bg-green-50 p-6 rounded-lg mb-6">
                    <h3 className="font-bold text-green-900 mb-4">Tríade da Gestão 69ª</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <ul className="space-y-3">
                        <li className="flex items-center">
                          <span className="w-3 h-3 bg-green-600 rounded-full mr-3"></span>
                          <div>
                            <strong>Mestre Conselheiro:</strong>
                            <br />
                            <span className="text-gray-700">Gustavo Silva Esparza</span>
                          </div>
                        </li>
                        <li className="flex items-center">
                          <span className="w-3 h-3 bg-green-600 rounded-full mr-3"></span>
                          <div>
                            <strong>1º Conselheiro:</strong>
                            <br />
                            <span className="text-gray-700">Vinícius Stuchi</span>
                          </div>
                        </li>
                      </ul>
                      <ul className="space-y-3">
                        <li className="flex items-center">
                          <span className="w-3 h-3 bg-green-600 rounded-full mr-3"></span>
                          <div>
                            <strong>2º Conselheiro:</strong>
                            <br />
                            <span className="text-gray-700">Deny Gabriel Pereira de Lima</span>
                          </div>
                        </li>
                        <li className="flex items-center">
                          <span className="w-3 h-3 bg-green-600 rounded-full mr-3"></span>
                          <div>
                            <strong>Escrivão:</strong>
                            <br />
                            <span className="text-gray-700">Lucas Lazaro Tornai</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed text-lg">
                    A Gestão 69ª assumiu o compromisso de honrar o legado da Gestão 58ª enquanto adaptava a Praça
                    DeMolay às necessidades contemporâneas da comunidade. Sob a liderança inspiradora do Mestre
                    Conselheiro Rafael Costa Ferreira, esta gestão demonstrou que inovação e tradição podem caminhar
                    juntas.
                  </p>
                </div>
              </CardContent>
            </Card>

                  <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                    <h4 className="font-medium text-gray-900 mb-4 flex items-center">
                      <Users className="w-5 h-5 mr-2" />
                      Autoridades Presentes na Reinauguração (29/05/2021)
                    </h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-semibold text-green-900 mb-3">Comunidade Maçônica e DeMolay</h5>
                        <ul className="space-y-2 text-gray-700">
                          <li>
                            • <strong>Presidente Conselho Consultivo:</strong> André Luis Sgrignoli Filho
                          </li>
                          <li>
                            • <strong>Consultor do Capítulo:</strong> David Carlo Yauri Caman
                          </li>
                          <li>
                            • <strong>Consultor:</strong> Francisco Emilio Diniz Centurion
                          </li>
                           <li>
                            • <strong>Consultor:</strong> Silvio Gil Rodrigues
                          </li>
                           <li>
                            • <strong>Consultor:</strong> José Francisco Limone
                          </li>
                           <li>
                            • <strong>Consultor:</strong> Carlos Alberto Patriani Barronuevo
                          </li>
                           <li>
                            • <strong>Consultor:</strong> André Luis Boso Benito
                          </li>
                           <li>
                            • <strong>Consultor:</strong> Siguimar Emilio Pastori Filho
                          </li>
                           <li>
                            • <strong>Consultor:</strong> Gabriel Leite Braga
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

           

            {/* Galeria */}
            <Card id="galeria">
              <CardHeader className="bg-purple-50">
                <CardTitle className="flex items-center text-2xl">
                  <Camera className="w-6 h-6 mr-2 text-purple-700" />
                  Acervo Fotográfico da Praça DeMolay
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-8">
                  {/* Inauguração Photos */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                      <Badge className="bg-blue-100 text-blue-800 border-blue-200 mr-2">Inauguração 2015</Badge>
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {Array.from({ length: 26 }, (_, i) => i + 1).map((i) => (
                        <div key={i} className="cursor-pointer group">
                          <Image
                            src={`/img/ing/${i}.avif`}
                            alt={`Foto da inauguração ${i}`}
                            width={450}
                            height={450}
                            className="rounded-lg shadow-md group-hover:shadow-lg transition-shadow object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Reinauguração Photos */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                      <Badge className="bg-green-100 text-green-800 border-green-200 mr-2">Reinauguração 2021</Badge>
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {Array.from({ length: 13 }, (_, i) => i + 1).map((i) => (
                        <div key={i} className="cursor-pointer group">
                          <Image
                            src={`/img/reg/${i}.avif`}
                            alt={`Foto da reinauguração ${i}`}
                            width={450}
                            height={450}
                            className="rounded-lg shadow-md group-hover:shadow-lg transition-shadow object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Call to Action */}
          <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
            <h3 className="text-xl font-bold text-blue-900 mb-4">Visite a Praça DeMolay</h3>
            <p className="text-gray-700 mb-6">
              Conheça pessoalmente este importante marco histórico do Capítulo Juventude de Catanduva. A Praça DeMolay
              está localizada na Av. Eng. José Nelson Machado, Vila Industrial, em frente ao posto Bicão.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://maps.app.goo.gl/y256sEkCf6jYa72cA" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button className="bg-blue-900 hover:bg-blue-800">
                  <MapPin className="w-4 h-4 mr-2" />
                  Ver no Google Maps
                </Button>
              </a>
              <a 
                href="https://demolaycatanduva.com.br/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="border-blue-900 text-blue-900 hover:bg-blue-100">
                  Conhecer mais sobre o Capítulo
                </Button>
              </a>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}
