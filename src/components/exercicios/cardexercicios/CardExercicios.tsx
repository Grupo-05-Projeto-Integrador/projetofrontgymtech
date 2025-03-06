import { Link } from "react-router-dom";
import Exercicio from "../../../models/Exercicio";
import { useEffect } from "react";

interface CardExerciciosProps {
  exercicio: Exercicio;
}

function CardExercicio({ exercicio }: CardExerciciosProps) {
  useEffect(() => {
    console.log("Exercício recebido:", exercicio);
  }, [exercicio]);

  const categoria = exercicio.categoria?.tipo || "Sem categoria";

  const quantidadeSeries = exercicio.serie || 0;
  const quantidadeRepeticoes = exercicio.repeticao || 0;

  return (
    <div className="border border-gray-700 bg-[#090D28] text-white rounded-lg p-4 shadow-md flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-4 w-full bg-[#1b1f3e] py-2 px-4 rounded-t-lg">
          {/* Ícone de categoria */}
          <span className="text-xl font-bold text-pink-400">🏋️‍♂️</span>
          <h3 className="text-lg font-bold text-center uppercase">
            {categoria}
          </h3>
        </div>
        <div className="p-4">
          <h4 className="text-lg font-semibold uppercase">{exercicio.nome}</h4>
          <p className="text-gray-300">{exercicio.descricao}</p>
          <p className="text-pink-400 font-semibold">
            Séries: {quantidadeSeries} | Repetições: {quantidadeRepeticoes}
          </p>
        </div>
      </div>
      <div className="flex">
        <Link
          to={`/editarexercicio/${exercicio.id}`}
          className="w-full flex items-center justify-center py-2 bg-[#ea337b] text-white hover:bg-pink-800 rounded-bl-lg"
        >
          <button>Editar</button>
        </Link>
        <Link
          to={`/deletarexercicio/${exercicio.id}`}
          className="w-full flex items-center justify-center bg-red-500 text-white hover:bg-red-700 rounded-br-lg"
        >
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  );
}

export default CardExercicio;
