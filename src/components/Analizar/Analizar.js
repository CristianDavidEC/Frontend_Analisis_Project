import React from 'react'
import { Grafo } from '../Grafo/Grafo'

const Analizar = () => {
  return (
    <div className='container row mt-3'>
        <h3>Analizar grafo</h3>
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