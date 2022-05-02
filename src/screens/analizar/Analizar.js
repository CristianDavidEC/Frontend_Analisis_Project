import React from 'react'
import { Outlet } from 'react-router-dom'

const Analizar = () => {
  return (
    <div className='container row'>
        <h1>Analizar grafo</h1>
        <Outlet/>
        <div className='container row'>
            <div className='col'>
                <select>
                    <option>
                        seleccione uno
                    </option>
                </select>
            </div>
            <div className='col'>
            <select>
                    <option>
                        seleccione uno
                    </option>
                </select>
            </div>
        </div>
    </div>
  )
}

export default Analizar