import { useContext, useEffect, useState } from "react";
import { DNA } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import Categoria from "../../../models/Categoria";
import CardCategorias from "../cardcategorias/CardCategorias";
import { buscar } from "../../../service/Service";

function ListaCategorias() {
  const navigate = useNavigate();
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const { aluno, handleLogout } = useContext(AuthContext);
  const token = aluno.token;

  async function buscarCategorias() {
    try {
      const resposta = await buscar("categorias", setCategorias, {
        headers: { Authorization: token },
      });

      // Verifica se a resposta é um array antes de definir o estado
      if (Array.isArray(resposta)) {
        setCategorias(resposta);
      } else {
        console.error("A resposta da API não é um array:", resposta);
      }
    } catch (error: any) {
      if (error.toString().includes("403")) {
        handleLogout();
      }
      console.error("Erro ao buscar categorias:", error);
    }
  }

  useEffect(() => {
    if (!token) {
      alert("Você precisa estar logado!");
      navigate("/");
    } else {
      buscarCategorias();
    }
  }, [token]);

  return (
    <div className="flex flex-col items-center min-h-screen bg-[#1b1f3e] text-white">
      {categorias.length === 0 && (
        <DNA
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperClass="dna-wrapper mx-auto"
        />
      )}

      <div className="container flex flex-col items-center py-8">
        <button
          onClick={() => navigate("/cadastrarcategoria")}
          className="bg-pink-600 text-white px-6 py-3 rounded-full 
                               hover:bg-pink-700 transition-all shadow-lg mb-6"
        >
          <strong>Cadastrar Categoria</strong>
        </button>

        <div className="grid grid-cols-1 gap-4 w-full px-4">
          {categorias.map((categoria) => (
            <CardCategorias key={categoria.id} categoria={categoria} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ListaCategorias;
