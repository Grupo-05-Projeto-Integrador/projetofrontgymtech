import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { ReactNode, useContext } from "react";
import Perfil from "../../pages/perfil/Perfil";

function Navbar() {
  const navigate = useNavigate();

  const { aluno, handleLogout } = useContext(AuthContext);

  function logout() {
    handleLogout();
    alert("O Usuário foi desconectado com sucesso!");
    navigate("/");
  }

  let component: ReactNode;

  if (aluno.token !== "") {
    component = (
      <>
        <div className="w-full flex justify-center py-4 bg-[#090D28] text-white box-border max-h-18">
          <div className="container flex justify-between items-center text-lg">
            <img
              src="src/assets/LOGO3.png"
              className="max-h-24 w-auto pt-1"
              alt="Logo"
            />

            <div className="flex gap-8">
              <Link to="/home">
                <p className="font-sans text-base hover:text-[#ea337b]">HOME</p>
              </Link>
              <Link to="/Sobre">
                <p className="font-montserrat text-base hover:text-[#ea337b]">
                  SOBRE
                </p>
              </Link>
              <Link to="exercicios">
                <p className="font-montserrat text-base hover:text-[#ea337b]">
                  EXERCICIOS
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
            </div>

          </div>
        </div>
      </>
    );
  } else {
    component = null;
  }

  return <>{component}</>;
}

export default Navbar;