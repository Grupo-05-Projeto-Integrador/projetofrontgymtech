import Exercicio from "./Exercicio";

export default interface Categoria {
  id: number;
  tipo: string;
  exercicio?: Exercicio[] | null;
}
