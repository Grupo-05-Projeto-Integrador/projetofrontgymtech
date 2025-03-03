import React from "react";
import { useNavigate } from "react-router-dom";

export default function ExerciciosEspeciais() {
  const navigate = useNavigate();

  const exercicios = {
    Idosos: [
      {
        nome: "Caminhada Leve",
        descricao: "Caminhar por 15-30 minutos em ritmo confortável.",
        series: "15-30 min",
      },
      {
        nome: "Alongamento de Braços",
        descricao:
          "Estenda os braços para frente e depois para os lados, segurando por 10 segundos.",
        series: "3x10 seg",
      },
      {
        nome: "Levantamento de Perna Sentado",
        descricao:
          "Sentado em uma cadeira, levante uma perna de cada vez, segurando por alguns segundos.",
        series: "3x12 repetições",
      },
      {
        nome: "Rotação de Ombros",
        descricao: "Faça movimentos circulares lentos com os ombros.",
        series: "3x15 repetições",
      },
      {
        nome: "Flexão de Tornozelo",
        descricao:
          "Movimente os pés para cima e para baixo para melhorar a circulação.",
        series: "3x20 repetições",
      },
    ],
    "Abaixo do Peso": [
      {
        nome: "Treino de Força Leve",
        descricao:
          "Exercícios com halteres leves para ganho de massa muscular.",
        series: "4x10",
      },
      {
        nome: "Agachamento Assistido",
        descricao: "Use uma cadeira para apoio e faça agachamentos leves.",
        series: "3x12",
      },
      {
        nome: "Flexões de Parede",
        descricao: "Apoie as mãos na parede e faça flexões controladas.",
        series: "3x15",
      },
      {
        nome: "Elevação de Gêmeos",
        descricao: "Fique na ponta dos pés e desça lentamente.",
        series: "3x20",
      },
      {
        nome: "Remada com Halteres",
        descricao:
          "Puxe os halteres em direção ao corpo para fortalecer as costas.",
        series: "3x12",
      },
    ],
    "Acima do Peso": [
      {
        nome: "Caminhada Rápida",
        descricao: "Ande em ritmo acelerado por 20-40 minutos.",
        series: "20-40 min",
      },
      {
        nome: "Agachamento Parcial",
        descricao: "Flexione levemente os joelhos sem forçar muito.",
        series: "3x15",
      },
      {
        nome: "Polichinelos Modificados",
        descricao:
          "Abra e feche os braços e pernas lentamente para evitar impacto excessivo.",
        series: "3x20",
      },
      {
        nome: "Step no Degrau",
        descricao: "Suba e desça de um degrau lentamente.",
        series: "3x12",
      },
      {
        nome: "Prancha Adaptada",
        descricao: "Mantenha-se na posição de prancha com apoio nos joelhos.",
        series: "3x30 seg",
      },
    ],
  };

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
        Exercícios Especiais
      </h2>

      {Object.entries(exercicios).map(([categoria, listaExercicios]) => (
        <div key={categoria} className="mb-8 w-full max-w-4xl">
          <h3 className="text-2xl font-semibold mb-4 text-center">
            {categoria}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {listaExercicios.map((exercicio, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-lg shadow-lg text-center"
              >
                <h4 className="text-xl font-semibold text-white">
                  {exercicio.nome}
                </h4>
                <p className="text-gray-300">{exercicio.descricao}</p>
                <p className="text-pink-400 font-bold mt-2">
                  {exercicio.series}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
