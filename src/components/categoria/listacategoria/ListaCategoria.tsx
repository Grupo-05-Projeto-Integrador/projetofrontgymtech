import { useContext, useEffect, useState } from "react";
import { DNA } from "react-loader-spinner";
import Categoria from "../../../models/Categoria";
import CardCategoria from "../cardcategoria/CardCategoria";
import { buscar } from "../../../service/Service";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";

function ListaCategoria() {

  const navigate = useNavigate();
  
  const [categoria, setCategoria] = useState<Categoria[]>([]);

  const { aluno, handleLogout } = useContext(AuthContext);
  const token = aluno.token;

  async function buscarCategoria() {
    try {
      await buscar("/categoria", setCategoria, {
        headers: { Authorization: token },
      });
    } catch (error: any) {
      if (error.toString().includes("403")) {
        handleLogout();
      }
    }
  }

  useEffect(() => {
    if (token === "") {
      alert("Voçe precisa esta logado!");
      navigate("/");
    }
  }, [token]);
  useEffect(() => {
    buscarCategoria();
  }, [categoria.length]);

  return (
    <>
      {categoria.length === 0 && (
        <DNA
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
      )}
      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoria.map((categoria) => (
              <CardCategoria key={categoria.id} categoria={categoria} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default ListaCategoria;
