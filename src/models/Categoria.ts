import Exercicio from "./Exercicio";

export default interface Tema {
  id: number;
  tipo: string;
  exercicio?: Exercicio[] | null;
}
