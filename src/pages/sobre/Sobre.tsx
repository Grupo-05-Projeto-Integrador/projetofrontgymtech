import { QRCodeCanvas } from "qrcode.react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Arkimedes from "/img/Arkimedes.jpg";
import Francisco from "/img/Francisco.jpeg";
import Rebeka from "/img/Rebeka.jpeg";
import Lucas from "/img/lucas.jpeg";
import Yasmim from "/img/Yasmim.jpeg";

export default function Sobre() {
  const cargos = [
    {
      id: 1,
      nome: "Arkimedes",
      cargo: "Desenvolvedor Full Stack",
      img: Arkimedes,
      qrData: "www.linkedin.com/in/yasmin-da-silva-pontes-011201165",
    },
    {
      id: 2,
      nome: "Francisco",
      cargo: "UX/UI Designer",
      img: Francisco,
      qrData: "www.linkedin.com/in/yasmin-da-silva-pontes-011201165",
    },
    {
      id: 3,
      nome: "Rebeka",
      cargo: "Gerente de Projetos",
      img: Rebeka,
      qrData: "www.linkedin.com/in/yasmin-da-silva-pontes-011201165",
    },
    {
      id: 4,
      nome: "Lucas",
      cargo: "Desenvolvedor Mobile",
      img: Lucas,
      qrData: "www.linkedin.com/in/yasmin-da-silva-pontes-011201165",
    },
    {
      id: 5,
      nome: "Yasmin",
      cargo: "QA Tester",
      img: Yasmim,
      qrData: "www.linkedin.com/in/yasmin-da-silva-pontes-011201165",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <div className="bg-[#1b1f3e] text-white min-h-screen">
      {/* Seção Sobre o Aplicativo */}
      <div className="py-12 px-6 md:px-20">
        {/* Primeira Seção - Sobre o App */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold mb-4">SOBRE O APP</h2>
            <p className="text-gray-300 leading-relaxed">
              Transforme sua jornada fitness com o <strong>Gym Tech</strong>!
              📲💪
              <br />
              Tenha acesso a treinos prontos para facilitar seu dia a dia ou
              personalize seu próprio plano de exercícios.
              <br />
              Acompanhe seu progresso, receba sugestões inteligentes e organize
              sua rotina de treinos para manter o foco sem complicações.
              <br />
              Supere seus limites a cada dia, adote um estilo de vida mais ativo
              e saudável e aproveite a melhor experiência para alcançar a sua
              <strong> melhor versão</strong>! 🚀🔥
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="/img/baixados (1).jpg"
              alt="Treino em Grupo"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>

        {/* Segunda Seção - Sobre os Desenvolvedores */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold mb-4">QUEM SOMOS</h2>
            <p className="text-gray-300">
              Somos um time apaixonado por tecnologia e bem-estar! Criamos
              soluções inovadoras para tornar o fitness acessível e inspirador.
              Nosso compromisso é oferecer ferramentas que transformam vidas,
              ajudando você a se superar a cada dia!
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="/img/equipe.jpg"
              alt="Mulher treinando"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </div>

      {/* Seção de Equipe com Carrossel */}
      <div className="container mx-auto p-6">
        <h2 className="text-2xl font-bold text-center mb-6">Nossa Equipe</h2>
        <Slider {...settings}>
          {cargos.map((cargo) => (
            <div key={cargo.id} className="p-20">
              <div className="relative group bg-white shadow-lg overflow-hidden p-4 rounded-lg flex flex-col items-center transition-all duration-300 hover:shadow-[#EA377B]">
                <img
                  src={cargo.img}
                  alt={cargo.nome}
                  className="w-full h-70 object-cover rounded-md transition-opacity duration-300 group-hover:opacity-80"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-white bg-opacity-90 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <QRCodeCanvas value={cargo.qrData} size={120} />
                  <p className="text-black mt-4 font-semibold">
                    Conheça o nosso LinkedIn
                  </p>
                </div>
                <h3 className="text-lg font-semibold text-center mt-4 text-black">
                  {cargo.nome}
                </h3>
                <p className="text-gray-600 text-sm text-center">
                  {cargo.cargo}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
