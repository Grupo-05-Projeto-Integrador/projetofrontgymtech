import { useState } from "react";
import { CalendarCheck } from "lucide-react";

function Home() {
  const categorias = [
    { nome: "YOGA", imagem: "/img/yoga.jpg" },
    { nome: "FITNESS", imagem: "/img/musculacao.jpg" },
    { nome: "CARDIO", imagem: "/img/cardio.jpg" },
    { nome: "TREINO ESPECIAL", imagem: "/img/especial.jpg" },
    { nome: "ABDOMINAL", imagem: "/img/abdomen.jpg" },
    { nome: "AUTOIMPACTO", imagem: "/img/autoimpacto.jpg" },
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
      {/* Banner */}
      <div className="relative w-full h-[500px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('src/assets/imagens/Banner Image.jpg')",
          }}
        ></div>

        <div className="relative text-center z-10">
          <h2 className="text-5xl font-bold">Se Desafie todos os dias!</h2>
          <p className="text-xl">
            Treinos para te motivar a seguir uma vida mais saudável.
          </p>
        </div>
      </div>

      {/* Check-in abaixo do banner */}
      <div className="container mx-auto py-8 flex flex-col items-center">
        <h3 className="text-2xl font-bold mb-6 text-center">
          Registre seu Check-in 📅
        </h3>

        <div className="flex justify-center gap-4 w-full max-w-4xl">
          {diasSemana.map((dia, index) => (
            <div
              key={index}
              className={`flex flex-col items-center border-2 rounded-lg p-4 w-32 h-32 text-center ${
                checkins[index]
                  ? "border-pink-600 bg-pink-100 text-black"
                  : "border-pink-400"
              }`}
            >
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-full border-2 mb-2 ${
                  checkins[index]
                    ? "bg-pink-600 border-pink-600"
                    : "border-pink-400"
                }`}
              >
                {checkins[index] && <CalendarCheck size={24} color="white" />}
              </div>
              <span>{index === new Date().getDay() - 1 ? "Hoje" : dia}</span>
            </div>
          ))}
        </div>

        <button
          onClick={fazerCheckin}
          className="mt-6 bg-pink-600 text-white px-6 py-2 rounded-lg hover:bg-pink-800 transition"
        >
          <strong>Fazer Check-in</strong>
        </button>
      </div>

      {/* Seção de Categorias */}
      <div className="container mx-auto py-12">
        <h2 className="text-3xl font-bold text-center mb-8">
          Escolha sua Categoria
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categorias.map((categoria, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg"
            >
              <img
                src={categoria.imagem}
                alt={categoria.nome}
                className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-center justify-center">
                <span className="text-white text-2xl font-bold">
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
