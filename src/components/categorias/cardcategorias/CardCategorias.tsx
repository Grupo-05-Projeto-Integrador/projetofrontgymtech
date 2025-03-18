import { Link } from "react-router-dom";
import Categoria from "../../../models/Categoria";
import { Pencil, Trash2 } from "lucide-react";

interface CardCategoriasProps {
  categoria: Categoria;
}

function CardCategorias({ categoria }: CardCategoriasProps) {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-3/4 flex justify-between items-center bg-[#0B0D20] text-white p-4 rounded-lg border border-gray-500 mb-3">
        {/* Nome da categoria */}
        <span className="font-bold">{categoria.tipo}</span>

        {/* Ícones de Editar e Deletar */}
        <div className="flex gap-4">
          <Link
            to={`/editarcategoria/${categoria.id}`}
            className="text-blue-400 hover:text-blue-600"
          >
            <Pencil size={20} />
          </Link>

          <Link
            to={`/deletarcategoria/${categoria.id}`}
            className="text-red-400 hover:text-red-600"
          >
            <Trash2 size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CardCategorias;
