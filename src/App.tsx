import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/NavBar";
import Home from "./pages/home/Home";
import "./App.css";
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


function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <div className="min-h-80vh]">
            <Routes>
              <Route path="/" element={<Login />} />
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
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
