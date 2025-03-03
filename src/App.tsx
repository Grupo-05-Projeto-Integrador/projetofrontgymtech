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

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/Sobre" element={<Sobre />} />
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
    </>
  );
}

export default App;
