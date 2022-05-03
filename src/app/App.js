import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Routes //
// import Home from "../screens/Inicio";
import { Login } from "../views/external/Login";
import { HomePage } from "../views/HomePage";
import { Board } from "../views/Board";

import { Tablero } from "../components/Tablero/Tablero";
import { Aplicacion } from "../components/Aplicacion/Aplicacion";
import { Analizar } from "../components/Analizar/Analizar";
import { Grafo } from "../components/Grafo/Grafo";


function App() {
  return (
    <Router>

      <Routes>

        <Route path = "" element={ <Login /> }/>
        
        <Route path = "home" element={ <HomePage/> }>  
        
        </Route>

        <Route path = "board" element = { <Board/> }> 
          <Route path = "" element = { <Tablero/> }/>
          <Route path = "aplicacion" element = { <Aplicacion/> }/>
          <Route path = "analizar" element = { <Analizar/> }/> 
        </Route>

      </Routes>
    </Router>
  );
}
export default App;
