import { Link } from 'react-router-dom'
import Exercicio from '../../../models/Exercicio'

interface CardExerciciosProps {
    exercicio: Exercicio
}

function CardExercicio({ exercicio }: CardExerciciosProps) {
    return (
        <div className='border-slate-900 border 
            flex flex-col rounded overflow-hidden justify-between'>

            <div>
                <div className="flex w-full bg-indigo-400 py-2 px-4 items-center gap-4">
                    <img
                        src={exercicio.aluno?.foto}
                        className='h-12 rounded-full'
                        alt={exercicio.aluno?.nome} />
                    <h3 className='text-lg font-bold text-center uppercase'>
                        {exercicio.aluno?.nome}
                    </h3>
                </div>
                <div className='p-4 '>
                    <h4 className='text-lg font-semibold uppercase'>{exercicio.nome}</h4>
                    <p>{exercicio.descricao}</p>
                    <p>Categoria: {exercicio.categoria?.tipo}</p>
                </div>
            </div>
            <div className="flex">
                <Link to={`/editarexercicio/${exercicio.id}`}
                    className='w-full text-slate-100 bg-indigo-400 hover:bg-indigo-800 
    flex items-center justify-center py-2'>
                    <button>Editar</button>
                </Link>
                <Link to={`/deletarexercicio/${exercicio.id}`}
                    className='text-white bg-red-400 
	hover:bg-red-700 w-full flex items-center justify-center'>
                    <button>Deletar</button>
                </Link>
            </div>
        </div>
    )
}

export default CardExercicio