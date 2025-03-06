import { Link } from "react-router-dom";
import Exercicio from "../../../models/Exercicio";

interface CardExerciciosProps {
    exercicio: Exercicio;
}

function CardExercicio({ exercicio }: CardExerciciosProps) {
    return (
        <div className="border border-gray-700 bg-[#090D28] text-white rounded-lg p-4 shadow-md flex flex-col justify-between">
            <div>
                <div className="flex items-center gap-4 w-full bg-[#1b1f3e] py-2 px-4 rounded-t-lg">
                    <img
                        src={exercicio.aluno?.foto}
                        className="h-12 rounded-full"
                        alt={exercicio.aluno?.nome}
                    />
                    <h3 className="text-lg font-bold text-center uppercase">
                        {exercicio.aluno?.nome}
                    </h3>
                </div>
                <div className="p-4">
                    <h4 className="text-lg font-semibold uppercase">{exercicio.nome}</h4>
                    <p className="text-gray-300">{exercicio.descricao}</p>
                    <p className="text-pink-400 font-semibold">
                        Séries: {exercicio.categoria?.tipo}
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