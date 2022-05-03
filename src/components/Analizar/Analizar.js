import React from 'react'
import { Grafo } from '../Grafo/Grafo'

const Analizar = () => {
  return (
    <div className='container row'>
        <h1>Analizar grafo</h1>
        <Grafo />
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

export { Analizar };