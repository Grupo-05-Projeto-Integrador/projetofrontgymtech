import { Link } from "react-router-dom";
import { FaPlay, FaInfoCircle } from "react-icons/fa";

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
        <source src="/videos/treinos.mp4" type="video/mp4" />
      </video>

      {/* Sobreposição degradê rosa e azul com opacidade mais forte */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-transparent to-blue-700 opacity-80"></div>

      {/* Conteúdo principal */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center p-10">
        {/* Caixa com efeito vidro e rosa mais forte */}
        <div className="bg-pink-500/30 backdrop-blur-lg p-8 rounded-xl border border-pink-500 shadow-lg shadow-pink-600/60">
          <h1
            className="text-5xl font-bold mb-6 text-white"
            style={{
              textShadow: "3px 3px 12px rgba(255, 105, 180, 0.9)", // Sombra rosa vibrante
            }}
          >
            Bem-vindo ao GymTech
          </h1>
          <p
            className="text-lg mb-6 text-white"
            style={{
              textShadow: "2px 2px 10px rgba(255, 105, 180, 0.9)", // Sombra rosa mais sutil
            }}
          >
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
