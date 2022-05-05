import React from 'react'
import { Outlet } from 'react-router-dom'
import { GrafoUI } from "../Grafo/GrafoUI";

const Aplicacion = () => {
  
  return (
    <div className='container row mt-3'>
        <h3>Aplicacion del grafo</h3>
        <GrafoUI />
    </div>
  )
}

export { Aplicacion };