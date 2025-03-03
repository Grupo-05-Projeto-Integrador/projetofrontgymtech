import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Cadastro from "./components/cadastro/Cadastro";
import Login from "./components/login/Login";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <div className="min-h-80vh]">
            <Routes>
              <Route path="/login" element={<Login />} />
              {/* <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} /> */}
              <Route path="/cadastro" element={<Cadastro />} />
            </Routes>
          </div>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
