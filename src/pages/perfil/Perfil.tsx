import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import Aluno from "../../models/Aluno"; 
import { buscar } from "../../service/Service";

function Perfil() {
  const navigate = useNavigate()

	const { aluno } = useContext(AuthContext);

  const [usuario, setUsuario] = useState({} as Aluno);

  async function buscaDadosUsuario(){
    try {
      await buscar(`alunos/calcular-imc/${aluno.id}`, setUsuario, {
        headers: {
          Authorization: aluno.token
        }
      });
    } catch (error) {
      alert("Erro")
    }
  }

  function classificarIMC(imc) {
    if (imc < 18.5) return "Abaixo do peso";
    if (imc >= 18.5 && imc < 24.9) return "Peso normal";
    if (imc >= 25 && imc < 29.9) return "Sobrepeso";
    if (imc >= 30 && imc < 34.9) return "Obesidade grau 1";
    if (imc >= 35 && imc < 39.9) return "Obesidade grau 2";
    if (imc >= 40) return "Obesidade grau 3";
    return "Indefinido";
  }

  useEffect(() => {
    buscaDadosUsuario()
  }, [aluno.id]);

	useEffect(() => {
		if (aluno.token === "") {
			alert("Você precisa estar logado")
			navigate("/")
		}
	}, [aluno.token])

  console.log(usuario)

  return (
    <div className="flex flex-col items-center bg-[#1b1f3e]">
      
      <div className="w-full bg-[#ea377b] text-white py-4 text-center text-xl font-semibold hover:h-25">
        <p>Central do Aluno</p>
        <div className="text-sm m-2">
          <p>Onde seu progresso se encontra com seu potencial!</p>
        </div>
      </div>

      <div className="container mx-auto my-8 p-4">
        <div className="flex gap-8 justify-center">
          
          <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-md w-1/2 m-4">
            
            <img
              className="w-32 h-32 rounded-full border-4 border-white mb-4"
              src="https://i.imgur.com/VpwApCU.png"
              alt={`Foto de perfil de ${usuario.nome}`}
            />
            
            <div className="text-center text-lg text-gray-700">
              <p className="font-bold text-xl">{usuario.nome}</p>
              <p>{usuario.usuario}</p>
            </div>
          </div>

         
          <div className="flex flex-col items-center bg-[#4b4e68] text-white p-6 rounded-lg shadow-md w-100 m-4">
            <p className="font-semibold text-lg m-5">IMC</p>

            <div className="flex space-x-4 mb-4">
              <p> Peso (kg):{usuario.peso}</p>
            </div>

            <div className="flex flex-col items-center">
              <p> Altura (kg):{usuario.altura ? usuario.altura.toFixed(2): "N/A"}</p>
            </div>

            <div className="bg-[#1b1f3e] p-3 rounded-md w-50 mt-4 text-center hover:bg-[#090d28]">
            <p className="text-bold">IMC: { usuario.imc ? usuario.imc.toFixed(2): "N/A"}</p>
            </div>

            <p className="font-bold mt-2">
                Classificação: {usuario.imc ? classificarIMC(usuario.imc) : "N/A"}
              </p>
            </div>

    </div>
    </div>
    </div>
  );
}

export default Perfil;




{/* Paleta de cor // bg-[#1b1f3e] */}