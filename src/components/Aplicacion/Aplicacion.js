import React from 'react'
import { Outlet } from 'react-router-dom'
import { Grafo } from "../Grafo/Grafo";

const Aplicacion = () => {
  return (
    <div className='container row'>
        <h1>Aplicacion del grafo</h1>
        <Grafo />
    </div>
  )
}

export { Aplicacion };