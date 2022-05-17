import React from "react";
import { Link } from "react-router-dom";
import { BiChalkboard } from "react-icons/bi";
import { ModalNuevoGrafo } from "../../components/ModalNuevoGrafo/ModalNuevoGrafo";
import { GrafoGUI } from "../../components/GrafoGUI/GrafoGUI";
import { elementContex } from "../../app/ContextState/Estado";
import { AiFillDelete } from "react-icons/ai";

//const g = ['grafo 1', 'grafo 2', 'grafo 3', 'grafo 4', 'grafo 5', 'grafo 6', 'grafo 7', 'grafo 8', 'grafo 9'];
const data = [
  {
    name: "Grafo 1",
    nodes: [
      {
        id: 1,
        label: "N1",
        data: {},
        type: "Object",
        linkedTo: [
          {
            nodeId: 2,
            distance: 120,
          },
          {
            nodeId: 4,
            distance: 87,
          },
          {
            nodeId: 5,
            distance: 101,
          },
        ],
      },
      {
        id: 2,
        label: "N2",
        data: {},
        type: "function",
        linkedTo: [
          {
            nodeId: 1,
            distance: 120,
          },
          {
            nodeId: 7,
            distance: 45,
          },
          {
            nodeId: 3,
            distance: 17,
          },
        ],
      },
      {
        id: 3,
        label: "N3",
        data: {},
        type: "object",
        linkedTo: [
          {
            nodeId: 5,
            distance: 86,
          },
          {
            nodeId: 2,
            distance: 17,
          },
          {
            nodeId: 9,
            distance: 15,
          },
        ],
      },
      {
        id: 12,
        label: "N12",
        data: {},
        type: "function",
        linkedTo: [
          {
            nodeId: 14,
            distance: 120,
          },
          {
            nodeId: 17,
            distance: 87,
          },
          {
            nodeId: 11,
            distance: 101,
          },
          {
            nodeId: 2,
            distance: 30,
          },
        ],
      },
    ],
    generalData1: 100,
    generalData2: "Alg",
    generalData3: 300,
  },
  {
    name: "Grafo 2",
    nodes: [
      {
        id: 1,
        label: "N1",
        data: {},
        type: "Object",
        linkedTo: [
          {
            nodeId: 2,
            distance: 120,
          },
          {
            nodeId: 5,
            distance: 87,
          },
          {
            nodeId: 6,
            distance: 120,
          },
        ],
      },
      {
        id: 2,
        label: "N2",
        data: {},
        type: "function",
        linkedTo: [
          {
            nodeId: 1,
            distance: 120,
          },
          {
            nodeId: 5,
            distance: 30,
          },
        ],
      },
      {
        id: 3,
        label: "N3",
        data: {},
        type: "object",
        linkedTo: [
          {
            nodeId: 2,
            distance: 86,
          },
        ],
      },
      {
        id: 4,
        label: "N4",
        data: {},
        type: "function",
        linkedTo: [
          {
            nodeId: 1,
            distance: 120,
          },
          {
            nodeId: 5,
            distance: 30,
          },
          {
            nodeId: 5,
            distance: 30,
          },
        ],
      },
      {
        id: 5,
        label: "N5",
        data: {},
        type: "function",
        linkedTo: [
          {
            nodeId: 1,
            distance: 87,
          },
          {
            nodeId: 5,
            distance: 10,
          },
        ],
      },
    ],
    generalData1: 100,
    generalData2: "Alg",
    generalData3: 300,
  },
];

const ListaGrafos = () => {
  const { setEstadoGrafo } = React.useContext(elementContex);

  return (
    <div>
      <ModalNuevoGrafo />
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {data.map((gg) => {
          return (
            <div className="col">
              <div className="card">
                {/* <img src="..." className="card-img-top" alt="..."> */}
                <div className="card-body">
                  <h5 className="card-title text-center">
                    Nombre: <br /> {gg.name}
                  </h5>
                  {/* <h6 className="card-title text-center">
                    Descripcion: {gg.descripcion}
                  </h6> */}
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
  );
};

export { ListaGrafos };
