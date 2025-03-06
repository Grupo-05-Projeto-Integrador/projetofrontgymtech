import { useNavigate } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import { buscar } from "../../../service/Service";
import { DNA } from "react-loader-spinner";
import Exercicio from "../../../models/Exercicio";
import CardExercicio from "../cardexercicios/CardExercicios";

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

  return (
    <div className="bg-[#1b1f3e] min-h-screen w-full">
      {exercicios.length === 0 && (
        <DNA
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
      )}
      <div className="flex justify-center w-full ">
        <div className="container flex flex-col mx-2">
          <div className="w-full flex justify-center mb-4"></div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded self-center mb-4"
            onClick={() => navigate("/cadastrarexercicio")}
          >
            Cadastrar Exercício
          </button>
          <div
            className="container mx-auto my-10
            grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {exercicios.map((exercicio) => (
              <CardExercicio key={exercicio.id} exercicio={exercicio} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListaExercicios;
