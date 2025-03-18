import { useNavigate } from "react-router-dom";
import "./Cadastro.css";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Aluno from "../../models/Aluno";
import { cadastrarAluno } from "../../service/Service";
import { RotatingLines } from "react-loader-spinner";

function Cadastro() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [confirmaSenha, setConfirmaSenha] = useState<string>("");

  const [aluno, setAluno] = useState<Aluno>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
    altura: 0,
    peso: 0,
    imc: 0,
  });

  useEffect(() => {
    if (aluno.id !== 0) {
      retornar();
    }
  }, [aluno]);

  function retornar() {
    navigate("/login");
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setAluno({
      ...aluno,
      [e.target.name]: e.target.value,
    });
  }

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
    setConfirmaSenha(e.target.value);
  }

  async function cadastrarNovoUsuario(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (confirmaSenha === aluno.senha && aluno.senha.length >= 8) {
      setIsLoading(true);

      try {
        await cadastrarAluno(`/alunos/cadastrar`, aluno, setAluno);
        alert("Usuário cadastrado com sucesso!");
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        alert("Erro ao cadastrar o usuário!");
      }
    } else {
      alert(
        "Dados do usuário inconsistentes! Verifique as informações do cadastro."
      );
      setAluno({ ...aluno, senha: "" });
      setConfirmaSenha("");
    }

    setIsLoading(false);
  }

  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-2 h-screen 
          place-items-center font-bold bg-[#090d28]"
    >
      <div className="fundoCadastro hidden lg:block "></div>
      <div className="flex justify-center items-center min-h-screen w-full">
        <form className="flex flex-col gap-4" onSubmit={cadastrarNovoUsuario}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <h2 className="text-white text-3xl text-center mb-4 md:col-span-2">
              Cadastrar
            </h2>
            <div className="flex flex-col">
              <label htmlFor="nome" className="text-white">
                Nome
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
                placeholder="Nome"
                className="border-2 border-slate-700 rounded p-2 placeholder-gray-300 text-white bg-gray-700"
                value={aluno.nome}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  atualizarEstado(e)
                }
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="usuario" className="text-white">
                Usuário
              </label>
              <input
                type="text"
                id="usuario"
                name="usuario"
                placeholder="Usuário"
                className="border-2 border-slate-700 rounded p-2 placeholder-gray-300 text-white bg-gray-700"
                value={aluno.usuario}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  atualizarEstado(e)
                }
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="foto" className="text-white">
                Foto
              </label>
              <input
                type="text"
                id="foto"
                name="foto"
                placeholder="Foto"
                className="border-2 border-slate-700 rounded p-2 placeholder-gray-300 text-white bg-gray-700"
                value={aluno.foto}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  atualizarEstado(e)
                }
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="senha" className="text-white">
                Senha
              </label>
              <input
                type="password"
                id="senha"
                name="senha"
                placeholder="Senha"
                className="border-2 border-slate-700 rounded p-2 placeholder-gray-300 text-white bg-gray-700"
                value={aluno.senha}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  atualizarEstado(e)
                }
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="confirmarSenha" className="text-white">
                Confirmar Senha
              </label>
              <input
                type="password"
                id="confirmarSenha"
                name="confirmarSenha"
                placeholder="Confirmar Senha"
                className="border-2 border-slate-700 rounded p-2 placeholder-gray-300 text-white bg-gray-700"
                value={confirmaSenha}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleConfirmarSenha(e)
                }
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="altura" className="text-white">
                Altura
              </label>
              <input
                type="text"
                id="altura"
                name="altura"
                placeholder="Altura"
                className="border-2 border-slate-700 rounded p-2 placeholder-gray-300 text-white bg-gray-700"
                value={aluno.altura}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  atualizarEstado(e)
                }
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="peso" className="text-white">
                peso
              </label>
              <input
                type="text"
                id="peso"
                name="peso"
                placeholder="Peso(Kg)"
                className="border-2 border-slate-700 rounded p-2 placeholder-gray-300 text-white bg-gray-700"
                value={aluno.peso}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  atualizarEstado(e)
                }
              />
            </div>
          </div>
          <div className="flex justify-around gap-4">
            <button
              type="reset"
              className="rounded text-white bg-red-400 
                hover:bg-red-700 w-1/2 py-2"
              onClick={retornar}
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="rounded text-white bg-pink-400 hover:bg-pink-500 w-1/2 py-2"
            >
              {" "}
              {isLoading ? (
                <RotatingLines
                  strokeColor="white"
                  strokeWidth="5"
                  animationDuration="0.75"
                  width="24"
                  visible={true}
                />
              ) : (
                <span>Cadastrar</span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Cadastro;
