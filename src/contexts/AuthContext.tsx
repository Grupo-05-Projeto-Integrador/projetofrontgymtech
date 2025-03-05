import { createContext, ReactNode, useState } from "react";

import AlunoLogin from "../models/AlunoLogin";
import { login } from "../service/Service";

interface AuthContextProps {
  aluno: AlunoLogin;
  handleLogout(): void;
  handleLogin(aluno: AlunoLogin): Promise<void>;
  isLoading: boolean;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: AuthProviderProps) {
  const [aluno, setAluno] = useState<AlunoLogin>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
    token: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  async function handleLogin(alunoLogin: AlunoLogin) {
    setIsLoading(true);
    try {
      await login(`/alunos/logar`, alunoLogin, setAluno);
      alert("O Usuário foi autenticado com sucesso!");
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      alert("Os Dados do usuário estão inconsistentes!");
    }
    setIsLoading(false);
  }

  function handleLogout() {
    setAluno({
      id: 0,
      nome: "",
      usuario: "",
      senha: "",
      foto: "",
      token: "",
    });
  }

  return (
    <AuthContext.Provider
      value={{ aluno, handleLogin, handleLogout, isLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
}
