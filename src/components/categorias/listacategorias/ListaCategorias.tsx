import { useContext, useEffect, useState } from "react";
import { DNA } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import Categoria from "../../../models/Categoria";
import CardCategorias from "../cardcategorias/CardCategorias";
import { buscar } from "../../../service/Service";

function ListaCategorias() {

    const navigate = useNavigate();

    const [categorias, setCategorias] = useState<Categoria[]>([])

    const { aluno, handleLogout } = useContext(AuthContext)
    const token = aluno.token

    async function buscarCategorias() {
        try {
            await buscar('categorias', setCategorias, {
                headers: { Authorization: token }
            })
        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            alert('Você precisa estar logado!')
            navigate('/')
        }
    }, [token])

    useEffect(() => {
        buscarCategorias()
    }, [categorias.length])

    return (
        <>
            {categorias.length === 0 && (
                <DNA
                    visible={true}
                    height="200"
                    width="200"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper mx-auto"
                />
            )}
            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col">

                    <div className="flex justify-center mb-4">
                        <button
                            onClick={() => navigate('/cadastrarcategoria')}
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                        >
                            Cadastrar Categoria
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {categorias.map((categoria) => (
                            <CardCategorias key={categoria.id} categoria={categoria} />
                        ))}
                    </div>
                </div>
            </div>


        </>
    )
}

export default ListaCategorias;