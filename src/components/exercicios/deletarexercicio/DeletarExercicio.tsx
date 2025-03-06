import { useState, useContext, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { AuthContext } from "../../../contexts/AuthContext"
import { buscar, deletar } from "../../../service/Service"
import { RotatingLines } from "react-loader-spinner"
import Exercicio from "../../../models/Exercicio"

function DeletarExercicio() {

    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [exercicio, setExercicio] = useState<Exercicio>({} as Exercicio)

    const { id } = useParams<{ id: string }>()

    const { aluno, handleLogout } = useContext(AuthContext)
    const token = aluno.token

    async function buscarPorId(id: string) {
        try {
            await buscar(`/exercicios/${id}`, setExercicio, {
                headers: {
                    'Authorization': token
                }
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            alert('Você precisa estar logado')
            navigate('/')
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    async function deletarExercicio() {
        setIsLoading(true)

        try {
            await deletar(`/exercicios/${id}`, {
                headers: {
                    'Authorization': token
                }
            })

            alert('Exercicio apagado com sucesso')

        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout()
            }else {
                alert('Erro ao deletar o exercicio.')
            }
        }

        setIsLoading(false)
        retornar()
    }

    function retornar() {
        navigate("/exercicios")
    }
    
    return (
        <div className='container w-1/3 mx-auto'>
            <h1 className='text-4xl text-center my-4'>Deletar Exercicio</h1>

            <p className='text-center font-semibold mb-4'>
                Você tem certeza de que deseja apagar o exercicio a seguir?
            </p>

            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header 
                    className='py-2 px-6 bg-indigo-600 text-white font-bold text-2xl'>
                    Exercicio
                </header>
                <div className="p-4">
                    <p className='text-xl h-full'>{exercicio.nome}</p>
                    <p>{exercicio.descricao}</p>
                </div>
                <div className="flex">
                    <button 
                        className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2'
                        onClick={retornar}>
                        Não
                    </button>
                    <button 
                        className='w-full text-slate-100 bg-indigo-400 
                        hover:bg-indigo-600 flex items-center justify-center'
                        onClick={deletarExercicio}>
                        
                        {isLoading ?
                            <RotatingLines
                                strokeColor="white"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="24"
                                visible={true}
                            /> :
                            <span>Sim</span>
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeletarExercicio