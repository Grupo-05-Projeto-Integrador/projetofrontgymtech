import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Cadastro from "./components/cadastro/Cadastro";
import Login from "./components/login/Login";
import { AuthProvider } from "./contexts/AuthContext";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/NavBar";
import Home from "./pages/home/Home";
import Sobre from "./pages/sobre/Sobre";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <div className="min-h-80vh]">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/Sobre" element={<Sobre />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
