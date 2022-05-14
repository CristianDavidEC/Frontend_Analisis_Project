//import React, { useEffect, useState } from "react";
import React from "react";
import Graph from "react-graph-vis";
import { elementContex } from "../../app/ContextState/Estado";
import { opciones } from "./AjustesGrafo";

/**
 * GrafoUI se encarga de la renderizacion de el grafo presente
 * en el estado actual del contexto.
 * */
const GrafoUI = ({ setEdge, setNode }) => {
  //State del grafo
  const { estadoGrafo } = React.useContext(elementContex);
  //Estado de los Nodos del Grafo
  const { nodes } = estadoGrafo;
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
          edgeId: link.id
        });
      });
      return {
        id: node.id,
        label: node.id + ":" + node.label,
      };
    }),
    edges: [],
  };
  grafoUI.edges = bordes;

  const evento = {
    click: (event) => {
      console.log(event);
      if (event.nodes.length > 0) {
        const nodoSelected = nodes.find(nodo => nodo.id === event.nodes[0]);
        setNode(nodoSelected);
      } else {
        setNode({ id: null, label: null });
      }
    }
  }

  /*const interacciones = (network) => {
    network.on("click", function(params) {
      const { nodes, edges } = params;
      if (nodes.length === 0 && edges.length === 0) {
        setEdge({ id: null });
        setNode({ id: null });
      } else if (nodes.length === 0 && edges.length > 0) {
        setNode({ id: null });
        setEdge({ id: edges[0] });
      } else {
        setEdge({ id: null });
        setNode({ id: nodes[0] });
        // const nodesCopy = [...state.graph.nodes];
        // console.log(JSON.stringify(nodesCopy));
        // const m = nodes.find((nc) => nc.id === nodes[0].id);
        // console.log(`the ${m}`);
      }
      console.log(`nodos: ${nodes}, aristas: ${edges}`);
    });
  };
*/

  //Renderizado el elemento grafoUI
  return (
    <div className="border border-primary border-4 my-3 spaceGraph">
      <Graph
        graph={grafoUI}
        options={opciones.options}
        events={evento}
        getNetwork={(network) => {
          {/*interacciones(network);*/ }
        }}
      />
    </div>
  );
};

export { GrafoUI };
