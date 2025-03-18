import { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import Categoria from "../../../models/Categoria";
import { buscar, deletar } from "../../../service/Service";
import { RotatingLines } from "react-loader-spinner";

function DeletarCategoria() {
  const navigate = useNavigate();

  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { aluno, handleLogout } = useContext(AuthContext);
  const token = aluno.token;

  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
    try {
      await buscar(`/categorias/${id}`, setCategoria, {
        headers: {
          Authorization: token,
        },
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
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  async function deletarCategoria() {
    setIsLoading(true);

    try {
      await deletar(`/categorias/${id}`, {
        headers: {
          Authorization: token,
        },
      });

      alert("Categoria apagada com sucesso");
    } catch (error: any) {
      if (error.toString().includes("403")) {
        handleLogout();
      } else {
        alert("Erro ao deletar o tema.");
      }
    }

    setIsLoading(false);
    retornar();
  }

  function retornar() {
    navigate("/categorias");
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0e1129] text-white">
      <button
        onClick={retornar}
        className="bg-pink-400 hover:bg-pink-500 text-white font-bold py-2 px-6 rounded-lg mb-6"
      >
        Voltar
      </button>

      <h1 className="text-3xl font-bold mb-4">Deletar Categoria</h1>
      <p className="text-lg mb-6 text-gray-300">
        Você tem certeza de que deseja apagar a categoria abaixo?
      </p>

      <div className="bg-[#121530] w-[350px] rounded-2xl p-6 shadow-lg">
        <header className="py-2 px-6 bg-pink-600 text-white font-bold text-xl rounded-t-2xl text-center">
          Categoria
        </header>
        <p className="p-6 text-2xl bg-[#1e2246] text-center rounded-b-2xl">
          {categoria.tipo}
        </p>

        <div className="flex mt-4">
          <button
            className="w-1/2 text-white bg-red-500 hover:bg-red-700 py-2 rounded-l-2xl"
            onClick={retornar}
          >
            Não
          </button>
          <button
            className="w-1/2 text-white bg-green-500 hover:bg-green-700 py-2 rounded-r-2xl flex items-center justify-center"
            onClick={deletarCategoria}
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
              <span>Sim</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
export default DeletarCategoria;
