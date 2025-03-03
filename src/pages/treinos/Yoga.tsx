import React from "react";
import { useNavigate } from "react-router-dom";

const exercicios = [
  {
    id: 1,
    nome: "Postura da Montanha (Tadasana)",
    descricao:
      "Fique em pé com os pés juntos, braços ao lado do corpo e coluna ereta. Ajuda na postura e equilíbrio.",
  },
  {
    id: 2,
    nome: "Postura do Cão Olhando para Baixo (Adho Mukha Svanasana)",
    descricao:
      "Forme um 'V' invertido com o corpo, mantendo as mãos e pés no chão. Fortalece braços e pernas, alonga as costas.",
  },
  {
    id: 3,
    nome: "Postura da Criança (Balasana)",
    descricao:
      "Ajoelhe-se e abaixe o tronco para frente, apoiando a testa no chão. Relaxa a coluna e acalma a mente.",
  },
  {
    id: 4,
    nome: "Postura da Árvore (Vrikshasana)",
    descricao:
      "Equilibre-se em um pé, colocando o outro na coxa e junte as mãos em oração. Melhora equilíbrio e concentração.",
  },
];

export default function Yoga() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#1b1f3e] min-h-screen p-6 flex flex-col items-center text-white">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Voltar
      </button>
      <div className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-2xl">
        <h1 className="text-2xl font-bold text-center mb-6">
          Exercícios de Yoga
        </h1>
        <div>
          {exercicios.map((exercicio) => (
            <div
              key={exercicio.id}
              className="mb-4 pb-4 border-b border-gray-600"
            >
              <h2 className="text-xl font-semibold text-white">
                {exercicio.nome}
              </h2>
              <p className="text-gray-300">{exercicio.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
