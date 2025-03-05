import { Link } from "react-router-dom";

function Navbar() {
  return (
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
            <Link to="/postagens">
              <p className="font-montserrat text-base hover:text-[#ea337b]">
                EXERCICIOS
              </p>
            </Link>
            <Link to="/categoria">
              <p className="font-montserrat text-base hover:text-[#ea337b]">
                CATEGORIAS
              </p>
            </Link>
            <Link to='/perfil' className="font-montserrat text-base hover:text-[#ea337b]">PERFIL</Link>
          </div>
          </div>
        </div>
    </>
  );
}

export default Navbar;
