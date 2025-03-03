import Aluno from "./Aluno";
import Categoria from "./Categoria";

export default interface Exercicio {
  id: number;
  nome: string;
  repeticao: number;
  serie: number;
  descricao: string;
  aluno: Aluno | null;
  categoria: Categoria | null;
}
