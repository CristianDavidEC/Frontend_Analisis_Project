import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { BiChalkboard } from "react-icons/bi";
import { ModalNuevoGrafo } from "../../components/ModalNuevoGrafo/ModalNuevoGrafo";
import { GrafoGUI } from "../../components/GrafoGUI/GrafoGUI";
import { elementContex } from "../../app/ContextState/Estado";
import { AiFillDelete } from "react-icons/ai";

import { todosGrafos } from '../../api/GrafoCRUD'

//const g = ['grafo 1', 'grafo 2', 'grafo 3', 'grafo 4', 'grafo 5', 'grafo 6', 'grafo 7', 'grafo 8', 'grafo 9'];
const ListaGrafos = () => {
  const { setEstadoGrafo } = React.useContext(elementContex); 

  const [grafos, setGrafos] = React.useState([]);

  useEffect(() => {
    todosGrafos(setGrafos);
  },[]);

  return (
    <div>
      <ModalNuevoGrafo />
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {grafos.map((gg) => {
          return (
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title text-center">
                    Nombre: <br /> {gg.name}
                  </h5>
                  
                  <GrafoGUI grafoJSON={gg} />
                  <h6 className="card-title text-center">
                    Numero de Nodos: {gg.nodes.length}
                  </h6>

                  <div className='d-flex justify-content-between'>
                    <Link
                      to="/board"
                      className="btn btn-dark"
                      onClick={() => {
                        setEstadoGrafo(gg);
                      }}
                    >
                      Go to board <BiChalkboard />
                    </Link>
                    <button className='btn btn-dark mx-1'>
                      <AiFillDelete />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { ListaGrafos };
