import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";

function Footer() {
  let data = new Date().getFullYear();

  return (
    <div className="w-full h-[355px] bg-[#090D28] text-white flex justify-center items-center">
      <div className="max-w-[1440px] w-full flex justify-between items-center px-10">
        <div className="w-1/1 flex flex-col justify-center items-center text-center">
          <img
            src="https://i.imgur.com/gZryJLB.jpg"
            alt="Gym Logo"
            className="h-40"
          />
          <p className="text-sm max-w-sm text-center self-center">
            Bem-vindos ao GymTech, aqui te desafiamos a ser 1% melhor todos os
            dias, fazendo um treino ou um esporte e incentivando outras pessoas.
          </p>
        </div>

        <div className="w-1/2 flex justify-around text-sm">
          <div className="flex flex-col items-center">
            <h3 className="font-bold text-xl mb-2">Compania</h3>
            <a
              href="/Sobre"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition-colors duration-300"
            >
              Sobre nós
            </a>
            <a
              href="https://linktr.ee/linkedingrupo"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition-colors duration-300"
            >
              Contatos
            </a>
          </div>
        </div>

        <div className="w-1/1 flex flex-col items-center">
          <h3 className="font-bold text-xl mb-2">Social Media Link</h3>
          <div className="flex gap-4 mt-2">
            <a
              href="https://github.com/Grupo-05-Projeto-Integrador"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition-colors duration-300"
            >
              <GithubLogo size={30} weight="bold" />
            </a>
            <a
              href="https://linktr.ee/linkedingrupo"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition-colors duration-300"
            >
              <LinkedinLogo size={30} weight="bold" />
            </a>
          </div>
        </div>

        <div className="w-1/2 flex flex-col items-center">
          <p className="text-XL font-bold">GYM TECH | Copyright: {data}</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
