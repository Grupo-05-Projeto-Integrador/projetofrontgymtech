import { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import { buscar, deletar } from "../../../service/Service";
import { RotatingLines } from "react-loader-spinner";
import Exercicio from "../../../models/Exercicio";

function DeletarExercicio() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [exercicio, setExercicio] = useState<Exercicio>({} as Exercicio);
  const { id } = useParams<{ id: string }>();
  const { aluno, handleLogout } = useContext(AuthContext);
  const token = aluno.token;

  async function buscarPorId(id: string) {
    try {
      await buscar(`/exercicios/${id}`, setExercicio, {
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

  async function deletarExercicio() {
    setIsLoading(true);
    try {
      await deletar(`/exercicios/${id}`, {
        headers: {
          Authorization: token,
        },
      });
      alert("Exercício apagado com sucesso");
    } catch (error: any) {
      if (error.toString().includes("403")) {
        handleLogout();
      } else {
        alert("Erro ao deletar o exercício.");
      }
    }
    setIsLoading(false);
    retornar();
  }

  function retornar() {
    navigate("/exercicios");
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#1b1f3e] text-white">
      <h1 className="text-3xl font-bold mb-6">Deletar Exercício</h1>
      <p className="text-lg mb-4">
        Tem certeza que deseja apagar o exercício abaixo?
      </p>
      <div className="bg-[#1b1f3e] p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-semibold text-center mb-2">
          {exercicio.nome}
        </h2>
        <p className="text-gray-300 text-center mb-4">{exercicio.descricao}</p>
        <div className="flex">
          <button
            className="w-1/2 bg-red-500 hover:bg-red-700 py-2 rounded-l-lg"
            onClick={retornar}
          >
            Não
          </button>
          <button
            className="w-1/2 bg-pink-500 hover:bg-pink-700 py-2 rounded-r-lg flex items-center justify-center"
            onClick={deletarExercicio}
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

export default DeletarExercicio;
