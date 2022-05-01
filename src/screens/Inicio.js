import React from 'react'
// Componets //
import { Grafo } from '../components/Grafo/Grafo';
import BotonNuevoGrafo from '../components/ModalNuevoGrafo';


function Inicio() {
    return (
        <>
            <div className = 'container'>
                <div className = 'row d'>
                    <div className = 'col'>
                        <div className = 'border border-primary border-4 m-3 p-1 spaceGraph'>
                            <Grafo />
                        </div>
                    </div>
                    <div className = 'col text-center'>
                        <h2 className='mt-5'>Software de manejo de grafos</h2
                        >
                        <div className = 'mt-5'>
                            <BotonNuevoGrafo />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export { Inicio } 