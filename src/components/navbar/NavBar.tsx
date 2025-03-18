import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";

function Navbar() {
  const navigate = useNavigate();
  const { aluno, handleLogout } = useContext(AuthContext);

  function logout() {
    handleLogout();
    alert("O Usuário foi desconectado com sucesso!");
    navigate("/");
  }

  return (
    <div className="w-full flex justify-center py-4 bg-[#090D28] text-white box-border max-h-18">
      <div className="container flex justify-between items-center text-lg">
        <img
          src="https://i.imgur.com/gZryJLB.png"
          className="max-h-24 w-auto pt-1"
          alt="Logo"
        />

        <div className="flex gap-8">
          {aluno.token !== "" ? (
            <>
              <Link to="/home">
                <p className="font-sans text-base hover:text-[#ea337b]">HOME</p>
              </Link>
              <Link to="/exercicios">
                <p className="font-montserrat text-base hover:text-[#ea337b]">
                  EXERCÍCIOS
                </p>
              </Link>
              <Link to="/categorias">
                <p className="font-montserrat text-base hover:text-[#ea337b]">
                  CATEGORIAS
                </p>
              </Link>
              <Link to="/perfil">
                <p className="font-montserrat text-base hover:text-[#ea337b]">
                  PERFIL
                </p>
              </Link>
              <Link
                to=""
                onClick={logout}
                className="font-montserrat text-base hover:text-[#ea337b]"
              >
                SAIR
              </Link>
            </>
          ) : (
            <>
              <Link to="/login">
                <button className="bg-pink-600 text-white font-bold px-6 py-1 rounded-full hover:bg-pink-700 transition shadow-lg shadow-pink-500/50">
                  ÁREA DO ALUNO
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
