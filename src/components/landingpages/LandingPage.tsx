import { Link } from "react-router-dom";
import { FaPlay, FaInfoCircle } from "react-icons/fa";
import treinoVideo from "../../assets/imagens/treinos.mp4";

function PaginaEntrada() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Vídeo de fundo carregado localmente */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={treinoVideo} type="video/mp4" />
        Seu navegador não suporta vídeos em HTML5.
      </video>

      {/* Sobreposição degradê rosa e azul com opacidade maior */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-transparent to-blue-700 opacity-60"></div>

      {/* Conteúdo principal */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center p-10">
        <div className="bg-opacity-10 backdrop-blur-md p-8 rounded-xl border border-pink-500 shadow-lg shadow-pink-500/50">
          <h1 className="text-5xl font-bold mb-6">Bem-vindo ao GymTech</h1>
          <p className="text-lg mb-6">
            O melhor lugar para transformar sua saúde e bem-estar!
          </p>
          <div className="flex gap-4">
            <Link
              to="/cadastro"
              className="flex items-center gap-2 bg-pink-600 text-white px-6 py-3 rounded-full font-bold text-lg hover:bg-pink-700 transition shadow-lg shadow-pink-500/50"
            >
              <FaPlay /> Entrar pro time
            </Link>
            <Link
              to="/Sobre"
              className="flex items-center gap-2 border border-white text-white px-6 py-3 rounded-full font-bold text-lg hover:bg-white hover:text-black transition shadow-lg shadow-white/50"
            >
              <FaInfoCircle /> Informações
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaginaEntrada;
