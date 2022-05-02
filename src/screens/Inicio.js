import React from 'react'
// Componets //
import BotonNuevoGrafo from '../components/ModalNuevoGrafo';


const Home = () => {
    return (
        <>
            <div className = 'container'>
                <div className = 'row d'>
                <h2 className='mt-5'>Software de manejo de grafos</h2
                        >
                        <div className = 'mt-5'>
                    <div className = 'col'>
                        <div className = 'border border-primary border-4 m-3 p-1 spaceGraph'>
                            <Grafo />
                        </div>
                    </div>
                    <div className = 'col text-center'>
                       
                            <BotonNuevoGrafo />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;