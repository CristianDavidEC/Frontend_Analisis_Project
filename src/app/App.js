import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

// Routes //
import { Inicio } from '../screens/Inicio';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio/>} /> {/**Esto va en el /inicio */}
      </Routes>
    </BrowserRouter>
  )
}
export default App;
