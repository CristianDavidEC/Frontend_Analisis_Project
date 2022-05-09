import React from 'react';
import { OpcionesGrafo } from '../OpcionesGrafo/OpcionesGrafo';
import { GrafoUI } from "../Grafo/GrafoUI";



const Tablero = () => {
  return (
    <div className="col-9 mt-3">
      <div className = "row">
        <h3>Tablero</h3>
        <GrafoUI />
        <OpcionesGrafo />
      </div>
    </div>
  )
}

export { Tablero };