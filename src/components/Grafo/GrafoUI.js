import React, { useEffect, useState } from "react";
import Graph from "react-graph-vis";
import { elementContex } from "../../app/ContextState/Estado";
import ElGrafo from "../../ensayo/ElGrafo";
import { opciones } from "./AjustesGrafo";

/** 
 * GrafoUI se encarga de la renderizacion de el grafo presente
 * en el estado actual del contexto.
 * */
const GrafoUI = () => {
  //State
  const { estadoGrafo, setEstadoGrafo } = React.useContext(elementContex);

  //Estado de los Nodos del Grafo
  const { nodes } = estadoGrafo;

  //Estado de los eventos del GrafoUI
  const [evento, setEvento] = useState();
  // const [grafoActual, setGrafo] = useState({ nodes: [], edges: [] });
  let bordes = [];
  /**
   * Mapea los nosos del estadoGrafo para darle el formato necesario
   * para renderizar en componente
   */
  let grafoUI = {
    nodes: nodes.map((node) => {
      node.linkedTo.forEach((link) => {
        bordes.push({
          from: node.id,
          to: link.nodeId,
          label: "" + link.distance,
        });
      });
      return {
        id: node.id,
        label: node.label,
      };
    }),
    edges: [],
  };

  grafoUI.edges = bordes;

  //Renderizado el elemento grafoUI
  return (
    <div className="conatiner">
      {/*<ElGrafo grafo={grafoUI} />*/}
      <div className="row">
        <div className="border border-primary border-4 m-3 p-1 spaceGraph">
          <Graph
            graph={grafoUI}
            options={opciones.options}
            events={evento}
            getNetwork={(network) => {
            }}
          />
        </div>
        {/*<div className="col-4">
          <OpcionesGrafoUI
            addNodo={addNew}
            addArista={addNewArista}
            nodos={[...state.graph.nodes]}
            register={register}
            handleSubmit={handleSubmit}
          />
          </div>*/}
      </div>
    </div>
  );
};

export { GrafoUI };
