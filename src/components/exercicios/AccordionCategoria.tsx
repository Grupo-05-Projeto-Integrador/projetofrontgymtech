import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Exercicio from "../../models/Exercicio";
import CardExercicio from "./cardexercicios/CardExercicios";

interface Props {
  categoria: string;
  exercicios: Exercicio[];
}

function AccordionCategoria({ categoria, exercicios }: Props) {
  const [aberto, setAberto] = useState(false);

  return (
    <div className="mb-4">
      {/* Cabeçalho do Accordion */}
      <button
        onClick={() => setAberto(!aberto)}
        className="w-full flex items-center justify-between p-8 bg-[#0e1129] text-white text-xl uppercase font-bold shadow-md rounded-lg border"
      >
        <span className="flex items-center gap-3">
          {/* Ícones para cada categoria */}
          {categoria === "Cardio" && "🏃‍♂️"}
          {categoria === "Força" && "💪"}
          {categoria === "Alongamento" && "🧘"}
          {categoria === "Autoimpacto" && "🥋"}
          {categoria === "Outros" && "🏋️‍♂️"}
          {categoria}
        </span>
        {aberto ? <FaChevronUp /> : <FaChevronDown />}
      </button>

      {/* Lista de Cards dentro do Accordion */}
      {aberto && (
        <div className="mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {exercicios.map((exercicio) => (
            <CardExercicio key={exercicio.id} exercicio={exercicio} />
          ))}
        </div>
      )}
    </div>
  );
}

export default AccordionCategoria;
