import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Routes //
// import Home from "../screens/Inicio";
import InitPage from "../views/InitPage";
import Opciones from "../views/external/Opciones";
import Login from "../views/external/Login";
import AppPage from "../views/app/AppPage";
import Inicio from "../views/app/views/Inicio";
import Analizar from "../views/app/views/Analizar";
import Aplicacion from "../views/app/views/Aplicacion";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InitPage />} />
        <Route path="/login">
          <Route path="" element={<Login />} />
          <Route path="opciones" element={<Opciones />} />
        </Route>
        <Route path="app" element={<AppPage />}>
          {/* <Route path="" element={<Home />}></Route> */}
          <Route path="inicio" element={<Inicio />}></Route>
          <Route path="aplicacion" element={<Aplicacion />}></Route>
          <Route path="analizar" element={<Analizar />}></Route>
        </Route>
        {/* <Route path="*" element={<Navigate replace to="/" />} /> */}
      </Routes>
    </Router>
  );
}
export default App;
