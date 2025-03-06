import Popup from "reactjs-popup";
import FormExercicio from "../formexercicio/FormExercicio";

import "reactjs-popup/dist/index.css";
import "./ModalExercicio.css";

function ModalExercicio() {
  return (
    <>
      <Popup
        trigger={
          <button className="border rounded px-4 py-2 hover:bg-white hover:text-indigo-800">
            Novo Exercicio
          </button>
        }
        modal
      >
        <FormExercicio />
      </Popup>
    </>
  );
}

export default ModalExercicio;
