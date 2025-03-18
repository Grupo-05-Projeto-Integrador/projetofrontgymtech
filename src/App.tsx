import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/NavBar";
import Home from "./pages/home/Home";
import Sobre from "./pages/sobre/Sobre";

import Yoga from "./pages/treinos/Yoga";
import Fitness from "./pages/treinos/Fitness";
import Autoimpacto from "./pages/treinos/AutoImpacto";
import Cardio from "./pages/treinos/Cardio";
import Abdominal from "./pages/treinos/Abdominal";
import TreinoEspecial from "./pages/treinos/TreinoEspecial";
import { AuthProvider } from "./contexts/AuthContext";
import Login from "./components/login/Login";
import Cadastro from "./components/cadastro/Cadastro";
import Perfil from "./pages/perfil/Perfil";

import ListaCategorias from "./components/categorias/listacategorias/ListaCategorias";
import FormCategoria from "./components/categorias/formcategoria/FormCategoria";
import DeletarCategoria from "./components/categorias/deletarcategoria/DeletarCategoria";
import ListaExercicios from "./components/exercicios/listaexercicios/ListaExercicios";
import FormExercicio from "./components/exercicios/formexercicio/FormExercicio";
import DeletarExercicio from "./components/exercicios/deletarexercicio/DeletarExercicio";
import PaginaEntrada from "./components/landingpages/LandingPage";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <NavBar />
          <div className="min-h-80vh]">
            <Routes>
              <Route path="/" element={<PaginaEntrada />} />

              <Route path="/home" element={<Home />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/login" element={<Login />} />
              <Route path="/Sobre" element={<Sobre />} />

              <Route path="/perfil" element={<Perfil />} />
              <Route path="/yoga" element={<Yoga />} />
              <Route path="/fitness" element={<Fitness />} />
              <Route path="/autoimpacto" element={<Autoimpacto />} />
              <Route path="/cardio" element={<Cardio />} />
              <Route path="/abdominal" element={<Abdominal />} />
              <Route path="/treinoespecial" element={<TreinoEspecial />} />

              <Route path="/categorias" element={<ListaCategorias />} />
              <Route path="/cadastrarcategoria" element={<FormCategoria />} />
              <Route path="/editarcategoria/:id" element={<FormCategoria />} />
              <Route
                path="/deletarcategoria/:id"
                element={<DeletarCategoria />}
              />

              <Route path="/exercicios" element={<ListaExercicios />} />
              <Route path="/cadastrarexercicio" element={<FormExercicio />} />
              <Route path="/editarexercicio/:id" element={<FormExercicio />} />
              <Route
                path="/deletarexercicio/:id"
                element={<DeletarExercicio />}
              />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
