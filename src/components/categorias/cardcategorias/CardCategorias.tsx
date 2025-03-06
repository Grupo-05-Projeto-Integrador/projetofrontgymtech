import { Link } from "react-router-dom";
import Categoria from "../../../models/Categoria";

interface CardCategoriasProps {
  categoria: Categoria;
}

function CardCategorias({ categoria }: CardCategoriasProps) {
  return (
    <div className="border bg-[#0e1129] text-white rounded-2xl overflow-hidden flex flex-col justify-between shadow-lg">
      <header className="py-4 px-6 bg-[#1e2246] text-white font-bold text-xl text-center">
        {categoria.tipo}
      </header>
      <p className="p-6 text-lg text-center bg-[#121530] h-full">
        {categoria.tipo}
      </p>

      <div className="flex">
        <Link
          to={`/editarcategoria/${categoria.id}`}
          className="w-full text-white bg-pink-500 hover:bg-pink-700 flex items-center justify-center py-2 rounded-bl-2xl"
        >
          <button>Editar</button>
        </Link>

        <Link
          to={`/deletarcategoria/${categoria.id}`}
          className="w-full text-white bg-red-500 hover:bg-red-700 flex items-center justify-center py-2 rounded-br-2xl"
        >
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  );
}

export default CardCategorias;