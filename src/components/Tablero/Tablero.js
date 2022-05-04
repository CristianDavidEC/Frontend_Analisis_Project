import React from 'react';
import { Grafo } from "../Grafo/Grafo";


const Tablero = () => {
  return (
    <div className='container row mt-3 p-0'>
        <h4>Tablero</h4>
        <Grafo />
    </div>
  )
}

export { Tablero };