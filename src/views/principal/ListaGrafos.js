import React from 'react'
import { Link } from 'react-router-dom';
const g = ['grafo 1','grafo 2','grafo 3','grafo 4','grafo 5','grafo 6','grafo 7','grafo 8','grafo 9'];

const ListaGrafos = () => {
  return (
    <div className="row row-cols-1 row-cols-md-4 g-4">
      {g.map((gg)=>{
        return (
          <div className='col'>
          <div className="card">
            {/* <img src="..." className="card-img-top" alt="..."> */}
            <div className="card-body">
              <h5 className="card-title">{gg}</h5>
              <Link to="/board" className='btn btn-dark'>
                Go to the board
              </Link>
            </div>
          </div>
          </div>
        )
      })}
      <div className='col'>
          <div className="card">
            {/* <img src="..." className="card-img-top" alt="..."> */}
            <div className="card-body">
              <h5 className="card-title">Nuevo grafo</h5>
              <Link to="/board" className='btn btn-dark'>
                Go to the board
              </Link>
            </div>
          </div>
          </div>
    </div>
  )
}

export { ListaGrafos };