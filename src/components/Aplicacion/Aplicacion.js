import React from 'react'
import { Outlet } from 'react-router-dom'
import { Grafo } from "../Grafo/Grafo";

const Aplicacion = () => {
  
  return (
    <div className='container row mt-3'>
        <h3>Aplicacion del grafo</h3>
        <Grafo />
    </div>
  )
}

export { Aplicacion };