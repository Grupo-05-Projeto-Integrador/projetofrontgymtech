import { useNavigate } from "react-router-dom";

export default function Abdominal() {
  const navigate = useNavigate();

  const exercicios = [
    {
      nome: "Abdominal Tradicional",
      descricao: "Deitado, flexione o tronco em direção aos joelhos.",
      series: "4x20",
    },
    {
      nome: "Prancha",
      descricao: "Mantenha o corpo reto apoiado nos cotovelos.",
      series: "3x1min",
    },
    {
      nome: "Bicicleta no Ar",
      descricao: "Movimente as pernas como se estivesse pedalando.",
      series: "4x15 cada lado",
    },
  ];

  return (
    <div className="min-h-screen bg-[#1b1f3e] text-white p-8 flex flex-col items-center">
      <div className="w-full flex justify-center mb-4">
        <button
          onClick={() => navigate(-1)}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Voltar
        </button>
      </div>
      <h2 className="text-3xl font-bold text-center mb-6">
        Treino de Abdominal
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        {exercicios.map((exercicio, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg text-center"
          >
            <h4 className="text-xl font-semibold text-white">
              {exercicio.nome}
            </h4>
            <p className="text-gray-300">{exercicio.descricao}</p>
            <p className="text-pink-400 font-bold mt-2">
              Séries: {exercicio.series}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
