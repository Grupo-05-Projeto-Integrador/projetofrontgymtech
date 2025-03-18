import { useNavigate } from "react-router-dom";
import "./Login.css";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import AlunoLogin from "../../models/AlunoLogin";
import { RotatingLines } from "react-loader-spinner";
import { Link } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";

function Login() {
  const navigate = useNavigate();

  const { aluno, handleLogin, isLoading } = useContext(AuthContext);

  const [alunoLogin, setAlunoLogin] = useState<AlunoLogin>({} as AlunoLogin);

  useEffect(() => {
    if (aluno.token !== "") {
      navigate("/home");
    }
  }, [aluno]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setAlunoLogin({
      ...alunoLogin,
      [e.target.name]: e.target.value,
    });
  }

  function login(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    handleLogin(alunoLogin);
  }

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 h-screen place-items-center font-bold bg-[#1b1f3e]">
        <div className="flex justify-center items-center">
          <div className="bg-gray-800 p-8 rounded-2xl shadow-lg w-96">
            <h2 className="text-white text-3xl text-center mb-6">Entrar</h2>
            <form className="flex flex-col gap-4" onSubmit={login}>
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
                  value={alunoLogin.usuario}
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
                  className="border-2 border-slate-700 rounded p-2 placeholder-gray-300 text-white bg-gray-700 appearance-none"
                  value={alunoLogin.senha}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    atualizarEstado(e)
                  }
                />
              </div>
              <button
                type="submit"
                className="rounded bg-pink-400 flex justify-center hover:bg-pink-500 text-white w-full py-2"
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
                  <span>Entrar</span>
                )}
              </button>
              <hr className="border-slate-800 w-full" />
              <p className="text-[#ffffff] text-center">
                Ainda não tem uma conta?{" "}
                <Link to="/cadastro" className="text-pink-500 hover:underline">
                  Cadastre-se
                </Link>
              </p>
            </form>
          </div>
        </div>
        <div className="fundoLogin hidden lg:block"></div>
      </div>
    </>
  );
}

export default Login;
