import { useState } from "react";
import { CalendarCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const categorias = [
    { nome: "YOGA", imagem: "/img/yoga.jpg", rota: "/yoga" },
    { nome: "FITNESS", imagem: "/img/musculacao.jpg", rota: "/fitness" },
    { nome: "CARDIO", imagem: "/img/cardio.jpg", rota: "/cardio" },
    {
      nome: "TREINO ESPECIAL",
      imagem: "/img/especial.jpg",
      rota: "/treinoespecial",
    },
    { nome: "ABDOMINAL", imagem: "/img/abdomen.jpg", rota: "/abdominal" },
    {
      nome: "AUTOIMPACTO",
      imagem: "/img/autoimpacto.jpg",
      rota: "/autoimpacto",
    },
  ];

  const diasSemana = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"];
  const [checkins, setCheckins] = useState(Array(7).fill(false));

  const fazerCheckin = () => {
    const hoje = new Date().getDay();
    const diaIndex = hoje === 0 ? 6 : hoje - 1;

    setCheckins((prev) => {
      const novoCheckins = [...prev];
      novoCheckins[diaIndex] = true;
      return novoCheckins;
    });
  };

  return (
    <div className="min-h-screen bg-[#1b1f3e] text-white">
      {/* Banner Responsivo */}
      <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url("https://yasmin.sirv.com/Images/Banner%20Image.jpg")`,
            backgroundColor: "#1b1f3e",
          }}
        ></div>

        <div className="relative text-center z-10 px-4">
          <h2 className="text-3xl md:text-5xl font-bold">
            Desafie-se todos os dias!
          </h2>
          <p className="text-lg md:text-xl">
            Treinos para te motivar a seguir uma vida mais saudável.
          </p>
        </div>
      </div>

      {/* Check-in Responsivo */}
      <div className="container mx-auto py-8 flex flex-col items-center px-4">
        <h3 className="text-xl md:text-2xl font-bold mb-6 text-center">
          Registre seu Check-in 📅
        </h3>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 w-full max-w-4xl">
          {diasSemana.map((dia, index) => (
            <div
              key={index}
              className={`flex flex-col items-center border-2 rounded-lg p-3 text-center ${
                checkins[index]
                  ? "border-pink-600 bg-pink-100 text-black"
                  : "border-pink-400"
              }`}
            >
              <div
                className={`w-10 h-10 flex items-center justify-center rounded-full border-2 mb-2 ${
                  checkins[index]
                    ? "bg-pink-600 border-pink-600"
                    : "border-pink-400"
                }`}
              >
                {checkins[index] && <CalendarCheck size={20} color="white" />}
              </div>
              <span className="text-sm md:text-base">
                {index === new Date().getDay() - 1 ? "Hoje" : dia}
              </span>
            </div>
          ))}
        </div>

        <button
          onClick={fazerCheckin}
          className="mt-6 bg-pink-600 text-white px-4 py-2 md:px-6 md:py-3 rounded-lg hover:bg-pink-800 transition"
        >
          <strong>Fazer Check-in</strong>
        </button>
      </div>

      {/* Seção de Categorias Responsiva */}
      <div className="container mx-auto py-12 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Escolha sua Categoria
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categorias.map((categoria, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg cursor-pointer"
              onClick={() => categoria.rota && navigate(categoria.rota)}
            >
              <img
                src={categoria.imagem}
                alt={categoria.nome}
                className="w-full h-40 md:h-60 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-center justify-center">
                <span className="text-white text-lg md:text-2xl font-bold">
                  {categoria.nome}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
