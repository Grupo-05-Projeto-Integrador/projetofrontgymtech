import Exercicio from "./Exercicio";

export default interface Aluno {
  id: number;
  nome: string;
  usuario: string;
  senha: string;
  foto: string;
  altura: number;
  peso: number;
  imc: number;
  exercicio?: Exercicio[] | null;
}
