import React from 'react'
import { Link } from 'react-router-dom';
import { BiChalkboard } from "react-icons/bi";
import { ModalNuevoGrafo } from "../../components/ModalNuevoGrafo/ModalNuevoGrafo";

//const g = ['grafo 1', 'grafo 2', 'grafo 3', 'grafo 4', 'grafo 5', 'grafo 6', 'grafo 7', 'grafo 8', 'grafo 9'];
const data = [
  {
    name: 'grafo 1',
    descripcion: 'descripcion del grafo 1',
    nodes: [1, 2, 3, 4, 5]
  },
  {
    name: 'grafo 2',
    descripcion: 'descripcion del grafo 2',
    nodes: [1, 2, 3]
  },
  {
    name: 'grafo Interestelar',
    descripcion: 'Grafo de movimiento vehicular interestelar',
    nodes: [1]
  },
  {
    name: 'grafo 4',
    descripcion: 'descripcion del grafo 4',
    nodes: [1, 2]
  }
]



const ListaGrafos = () => {
  return (
    <div>
      <ModalNuevoGrafo />
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {data.map((gg) => {
          return (
            <div className='col'>
              <div className="card">
                {/* <img src="..." className="card-img-top" alt="..."> */}
                <div className="card-body">
                  <h5 className="card-title text-center">Nombre: <br /> {gg.name}</h5>
                  <h6 className="card-title text-center">Descripcion: {gg.descripcion}</h6>
                  <h6 className="card-title text-center">Numero de Nodos: {gg.nodes.length}</h6>
                  <Link to="/board" className='btn btn-dark'>
                    Go to the board <BiChalkboard />
                  </Link>
                </div>
              </div>
            </div>
          )
        })}
        {/*<div className='col'>
        <div className="card">
          <img src="..." className="card-img-top" alt="..."> 
          <div className="card-body">
            <h5 className="card-title">Nuevo grafo</h5>
            <Link to="/board" className='btn btn-dark'>
              Go to the board
            </Link>
          </div>
        </div>
      </div>*/}
      </div>
    </div>
  )
}

export { ListaGrafos };