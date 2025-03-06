import { useState, useContext, useEffect, ChangeEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import Exercicio from "../../../models/Exercicio";
import Categoria from "../../../models/Categoria";
import { buscar, atualizar, cadastrar } from "../../../service/Service";
import { RotatingLines } from "react-loader-spinner";

function FormExercicio() {
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [categorias, setCategorias] = useState<Categoria[]>([]);

    const [categoria, setCategoria] = useState<Categoria>({ id: 0, tipo: "" });
    const [exercicio, setExercicio] = useState<Exercicio>({} as Exercicio);

    const { id } = useParams<{ id: string }>();

    const { aluno, handleLogout } = useContext(AuthContext);
    const token = aluno.token;

    async function buscarExercicioPorId(id: string) {
        try {
            await buscar(`/exercicios/${id}`, setExercicio, {
                headers: { Authorization: token },
            });
        } catch (error: any) {
            if (error.toString().includes("403")) {
                handleLogout();
            }
        }
    }

    async function buscarCategoriaPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategoria, {
                headers: { Authorization: token },
            });
        } catch (error: any) {
            if (error.toString().includes("403")) {
                handleLogout();
            }
        }
    }

    async function buscarCategorias() {
        try {
            await buscar("/categorias", setCategorias, {
                headers: { Authorization: token },
            });
        } catch (error: any) {
            if (error.toString().includes("403")) {
                handleLogout();
            }
        }
    }

    useEffect(() => {
        if (token === "") {
            alert("Você precisa estar logado");
            navigate("/");
        }
    }, [token]);

    useEffect(() => {
        buscarCategorias();

        if (id !== undefined) {
            buscarExercicioPorId(id);
        }
    }, [id]);

    useEffect(() => {
        setExercicio({
            ...exercicio,
            categoria: categoria,
        });
    }, [categoria]);

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setExercicio({
            ...exercicio,
            [e.target.name]: e.target.value,
            categoria: categoria,
            //aluno: aluno,
        });
    }

    function retornar() {
        navigate("/exercicios");
    }

    async function gerarNovoExercicio(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsLoading(true);

        if (id !== undefined) {
            try {
                await atualizar(`/exercicios`, exercicio, setExercicio, {
                    headers: {
                        Authorization: token,
                    },
                });

                alert("Exerciocio atualizado com sucesso");
            } catch (error: any) {
                if (error.toString().includes("403")) {
                    handleLogout();
                } else {
                    alert("Erro ao atualizar o Exercicio");
                }
            }
        } else {
            try {
                await cadastrar(`/exercicios`, exercicio, setExercicio, {
                    headers: {
                        Authorization: token,
                    },
                });

                alert("Exercicio cadastrado com sucesso");
            } catch (error: any) {
                if (error.toString().includes("403")) {
                    handleLogout();
                } else {
                    alert("Erro ao cadastrar o EXercicio");
                }
            }
        }

        setIsLoading(false);
        retornar();
    }

    const carregandoCategoria = categoria.tipo === "";

    return (
        <div className="bg-[#1b1f3e] flex flex-col mx-auto items-center">
            <h1 className="text-4xl text-center my-8 text-white">
                {id !== undefined ? "Editar Exercicio" : "Cadastrar Exercicio"}
            </h1>

            <form className="flex flex-col w-1/2 gap-4" onSubmit={gerarNovoExercicio}>
                <div className="flex flex-col gap-2  text-white">
                    <label htmlFor="titulo" className="text-white">
                        Nome do Exercicio
                    </label>
                    <input
                        type="text"
                        placeholder="Exercicio"
                        name="nome"
                        required
                        className="border-2 border-slate-700 rounded p-2"
                        value={exercicio.nome}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>

                <div className="flex flex-col gap-2  text-white">
                    <label htmlFor="titulo" className="text-white">
                        Repetição
                    </label>
                    <input
                        type="text"
                        placeholder="Quantidade de Repetições"
                        name="repeticao"
                        required
                        className="border-2 border-slate-700 rounded p-2"
                        value={exercicio.repeticao}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>

                <div className="flex flex-col gap-2 text-white ">
                    <label htmlFor="titulo" className="text-white">
                        Série
                    </label>
                    <input
                        type="text"
                        placeholder="Número de Séries"
                        name="serie"
                        required
                        className="border-2 border-slate-700 rounded p-2"
                        value={exercicio.serie}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>

                <div className="flex flex-col gap-2 text-white">
                    <label htmlFor="titulo">Descrição</label>
                    <input
                        type="text"
                        placeholder="Texto"
                        name="descricao"
                        required
                        className="border-2 border-slate-700 rounded p-2"
                        value={exercicio.descricao}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <div className="flex flex-col gap-2 ">
                    <p className="text-white">Categoria do Exercicio</p>
                    <select
                        name="categoria"
                        id="categoria"
                        className="border p-2 border-slate-800 rounded"
                        onChange={(e) => buscarCategoriaPorId(e.currentTarget.value)}
                    >
                        <option value="" selected disabled>
                            <p className="text-border-slate-800">Selecione uma Categoria</p>
                        </option>

                        {categorias.map((categoria) => (
                            <option key={categoria.id} value={categoria.id}>
                                {categoria.tipo}
                            </option>
                        ))}
                    </select>
                </div>
                <button
                    type="submit"
                    className="rounded disabled:bg-[#e1509b] bg-pink-400 hover:bg-pink-500 text-white font-bold w-1/2 mx-auto py-2 flex justify-center"
                    disabled={carregandoCategoria}
                >
                    {isLoading ? (
                        <RotatingLines
                            strokeColor="white"
                            strokeWidth="5"
                            animationDuration="0.75"
                            width="24"
                            visible={true}
                        />
                    ) : (
                        <span>{id !== undefined ? "Atualizar" : "Cadastrar"}</span>
                    )}
                </button>
                <div className="w-full flex justify-center mb-4"></div>
            </form>
        </div>
    );
}

export default FormExercicio;