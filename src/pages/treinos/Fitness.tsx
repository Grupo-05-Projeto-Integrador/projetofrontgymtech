import React from "react";
import { useNavigate } from "react-router-dom";

export default function Academia() {
  const navigate = useNavigate();

  const exercicios = {
    A: [
      {
        nome: "Agachamento",
        descricao: "Pés afastados na largura dos ombros, desça até 90 graus.",
        series: "4x12",
      },
      {
        nome: "Stiff",
        descricao:
          "Segure a barra, desça o tronco mantendo as pernas levemente flexionadas.",
        series: "4x10",
      },
      {
        nome: "Elevação Pélvica",
        descricao: "Deite-se, flexione os joelhos e eleve o quadril.",
        series: "4x15",
      },
    ],
    B: [
      {
        nome: "Supino Reto",
        descricao: "Deite-se no banco, segure a barra e empurre para cima.",
        series: "4x8",
      },
      {
        nome: "Crucifixo",
        descricao: "Abra e feche os braços segurando halteres.",
        series: "3x12",
      },
      {
        nome: "Flexão de Braço",
        descricao: "Apoie as mãos no chão e desça o tronco.",
        series: "3x15",
      },
    ],
    C: [
      {
        nome: "Leg Press",
        descricao:
          "Sente-se na máquina, posicione os pés na plataforma e empurre.",
        series: "4x12",
      },
      {
        nome: "Agachamento Hack",
        descricao: "Use a máquina Hack para realizar o agachamento.",
        series: "3x10",
      },
      {
        nome: "Extensora",
        descricao: "Sente-se na máquina e estenda as pernas.",
        series: "4x15",
      },
    ],
    D: [
      {
        nome: "Puxada Alta",
        descricao: "Segure a barra da polia alta e puxe até o peito.",
        series: "4x10",
      },
      {
        nome: "Remada Curvada",
        descricao: "Segure a barra e puxe em direção ao abdômen.",
        series: "4x8",
      },
      {
        nome: "Remada Baixa",
        descricao: "Utilize a máquina de polia baixa e puxe o cabo.",
        series: "3x12",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#1b1f3e] text-white p-8 flex flex-col items-center">
      {/* Botão de voltar centralizado */}
      <div className="w-full flex justify-center mb-4">
        <button
          onClick={() => navigate(-1)}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Voltar
        </button>
      </div>

      <h2 className="text-3xl font-bold text-center mb-6">Ficha de Treino</h2>

      {Object.entries(exercicios).map(([grupo, listaExercicios]) => (
        <div key={grupo} className="mb-8 w-full max-w-4xl">
          <h3 className="text-2xl font-semibold mb-4 text-center">
            {grupo} -{" "}
            {grupo === "A"
              ? "Glúteos e Posterior"
              : grupo === "B"
              ? "Peito"
              : grupo === "C"
              ? "Quadríceps"
              : "Costas"}
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
                  Séries: {exercicio.series}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
