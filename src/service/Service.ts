import axios from "axios";

const api = axios.create({
  baseURL: "https://projetointegradorgymtech.onrender.com/",
});

export const cadastrarAluno = async (
  url: string,
  dados: object,
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  setDados: Function
) => {
  const resposta = await api.post(url, dados);
  setDados(resposta.data);
};

// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export const login = async (url: string, dados: object, setDados: Function) => {
  const resposta = await api.post(url, dados);
  setDados(resposta.data);
};

export const buscar = async (url: string, setDados: Function, header: Object) => {
  const resposta = await api.get(url, header);
  setDados(resposta.data);
};