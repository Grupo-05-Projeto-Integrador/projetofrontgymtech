import { ChangeEvent, useContext, useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import Categoria from "../../../models/Categoria";
import { atualizar, buscar, cadastrar } from "../../../service/Service";

function FormCategorias() {
  const navigate = useNavigate();
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { aluno, handleLogout } = useContext(AuthContext);
  const token = aluno.token;

  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
    try {
      console.log("Buscando categoria com ID:", id);
      await buscar(`/categorias/${id}`, setCategoria, {
        headers: { Authorization: token },
      });
    } catch (error: any) {
      console.error("Erro ao buscar categoria:", error);
      if (error.toString().includes("403")) {
        handleLogout();
      }
    }
  }

  useEffect(() => {
    if (!token) {
      alert("Você precisa estar logado!");
      navigate("/");
    }
  }, [token]);

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value,
    });
  }

  function retornar() {
    navigate("/categorias");
  }

  async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    try {
      console.log("Dados enviados para a API:", categoria);

      if (id !== undefined) {
        if (!categoria.id) {
          throw new Error("ID da categoria não definido.");
        }

        await atualizar(
          `/categorias/${categoria.id}`,
          categoria,
          setCategoria,
          {
            headers: { Authorization: token },
          }
        );
        alert("Categoria atualizada com sucesso!");
      } else {
        await cadastrar(`/categorias`, categoria, setCategoria, {
          headers: { Authorization: token },
        });
        alert("Categoria cadastrada com sucesso!");
      }
      retornar();
    } catch (error: any) {
      console.error("Erro ao salvar categoria:", error);
      if (error.toString().includes("403")) {
        handleLogout();
      } else {
        alert(
          "Erro ao salvar a categoria. Verifique os dados e tente novamente."
        );
      }
    }

    setIsLoading(false);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#1b1f3e] text-white">
      <button
        onClick={retornar}
        className="bg-pink-400 hover:bg-pink-600 text-white font-bold py-2 px-6 rounded-lg mb-6"
      >
        Voltar
      </button>

      <h1 className="text-3xl font-bold mb-6">
        {id === undefined ? "Cadastrar Categoria" : "Editar Categoria"}
      </h1>

      <form
        className="w-1/3 bg-[#121530] p-8 rounded-xl shadow-md flex flex-col gap-4"
        onSubmit={gerarNovaCategoria}
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="tipo" className="text-lg font-semibold">
            Descrição da Categoria
          </label>
          <input
            type="text"
            placeholder="Descreva aqui a categoria do exercício"
            name="tipo"
            className="border-2 border-gray-500 rounded-lg p-3 bg-[#1e2246] text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={categoria.tipo || ""}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            required
          />
        </div>
        <button
          className="rounded-xl text-white bg-pink-500 hover:bg-pink-700 w-full py-3 flex justify-center font-semibold"
          type="submit"
          disabled={isLoading}
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
            <span>{id === undefined ? "Cadastrar" : "Atualizar"}</span>
          )}
        </button>
      </form>
    </div>
  );
}

export default FormCategorias;
