import { useNavigate } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import { buscar } from "../../../service/Service";
import { DNA } from "react-loader-spinner";
import Exercicio from "../../../models/Exercicio";
import AccordionCategoria from "../AccordionCategoria";

function ListaExercicios() {
  const navigate = useNavigate();
  const [exercicios, setExercicios] = useState<Exercicio[]>([]);
  const { aluno, handleLogout } = useContext(AuthContext);
  const token = aluno.token;

  async function buscarExercicios() {
    try {
      await buscar("/exercicios", setExercicios, {
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
    buscarExercicios();
  }, [exercicios.length]);

  // Agrupar exercícios por categoria
  const categorias = exercicios.reduce((acc, exercicio) => {
    const categoria = exercicio.categoria?.tipo || "Outros";
    if (!acc[categoria]) {
      acc[categoria] = [];
    }
    acc[categoria].push(exercicio);
    return acc;
  }, {} as Record<string, Exercicio[]>);

  return (
    <div className="bg-[#1b1f3e] min-h-screen w-full">
      {exercicios.length === 0 && (
        <DNA
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperClass="dna-wrapper mx-auto"
        />
      )}
      <div className="flex justify-center w-full ">
        <div className="container flex flex-col items-center py-8">
          <button
            className="bg-pink-600 hover:bg-pink-400 text-white font-bold py-3 px-6 rounded-full self-center mb-4transition-all shadow-lg mb-6 "
            onClick={() => navigate("/cadastrarexercicio")}
          >
            Cadastrar Exercício
          </button>

          {/* Renderizar os exercícios organizados por categoria */}
          <div className="container mx-auto my-10 space-y-4">
            {Object.entries(categorias).map(([categoria, listaExercicios]) => (
              <AccordionCategoria
                key={categoria}
                categoria={categoria}
                exercicios={listaExercicios}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListaExercicios;
