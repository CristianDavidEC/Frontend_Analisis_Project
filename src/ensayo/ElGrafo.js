import React, { useState } from "react";
import { OpcionesGrafoUI } from "../components/OpcionesGrafo/OpcionesGrafoUI";
import Graph from "react-graph-vis";
import { useForm } from "react-hook-form";
/**
 * Funcion de prueba para renderizado e interacción de grafo
 * @param {*} grafo el grafo importado o nuevo
 * @returns 
 */
const ElGrafo = ({ grafo }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const graphRef = React.createRef();
  const [state, setState] = useState({
    options: {
      clickToUse: false,
      layout: {
        hierarchical: {
          enabled: false,
          direction: "UD",
          sortMethod: "hubsize",
          shakeTowards: "roots",
          levelSeparation: 150,
          nodeSpacing: 150,
          treeSpacing: 200,
        },
      },
      interaction: {
        tooltipDelay: 10000,
        navigationButtons: true,
        keyboard: false,
        hover: true,
        multiselect: true,
        hoverConnectedEdges: false,
      },
      physics: {
        forceAtlas2Based: {
          gravitationalConstant: -26,
          centralGravity: 0.005,
          springLength: 230,
          springConstant: 0.18,
          avoidOverlap: 1.5,
        },
        maxVelocity: 146,
        solver: "forceAtlas2Based",
        timestep: 0.35,
        stabilization: {
          enabled: true,
          iterations: 1000,
          updateInterval: 25,
        },
      },
      nodes: {
        fixed: {
          x: false,
          y: false,
        },
        color: {
          hover: {
            border: "darkcyan",
            background: "rgba(255,255,255,1)",
          },
        },
        font: {
          size: 20,
        },
        shape: "dot",
        size: 25,
        scaling: {
          min: 10,
          max: 60,
          label: {
            enabled: true,
            min: 20,
            max: 32,
          },
        },
      },
      edges: {
        hoverWidth: 1.5,
        arrows: {
          to: {
            enabled: true,
            scaleFactor: 1,
            type: "arrow",
          },
        },
        color: {
          color: "#000000",
          highlight: "#000000",
          hover: "#000000",
          // inherit: 'from',
          inherit: false,
        },
        font: {
          size: 20,
          color: "black",
          // color: 'white',
          strokeWidth: 6,
          strokeColor: "white",
          // strokeColor: 'black',
        },
        smooth: true,
      },
    },
    graph: grafo,
  });

  const addNew = (newNodo) => {
    const nodesCopy = [...state.graph.nodes];
    const edgesCopy = [...state.graph.edges];
    nodesCopy.push(newNodo);
    setState({
      graph: {
        nodes: nodesCopy.slice(),
        edges: edgesCopy.slice(),
      },
    });
    reset();
  };


  const addNewArista = (newArista) => {
    const nodesCopy = [...state.graph.nodes];
    const edgesCopy = [...state.graph.edges];

    edgesCopy.push(newArista);
    setState({
      graph: {
        nodes: nodesCopy.slice(),
        edges: edgesCopy.slice(),
      },
    });
    reset();
  };

  const removeLast=()=> {
    let nodesCopy = [...this.state.graph.nodes];
    let edgesCopy = [...this.state.graph.edges];
    const id = nodesCopy.length;

    nodesCopy = nodesCopy.filter(n => n.id !== id);
    edgesCopy = edgesCopy.filter(e => e.to !== id);

    setState(...state, {
      graph: {
        nodes: nodesCopy.slice(),
        edges: edgesCopy.slice()
      }
    });
  }
  const interacciones = (network) => {
    network.on("click", function(params) {
      const { nodes, edges } = params;
      if(nodes.length===0 && edges.length===0){

      }else if(nodes.length===0 && edges.length>0){

      }else{
        const nodesCopy = [...state.graph.nodes];
        console.log(JSON.stringify(nodesCopy));
        const m = nodes.find((nc)=> nc.id===nodes[0].id);
        console.log(`the ${m}`);
      }
      console.log(`nodos: ${nodes}, aristas: ${edges}`);
    });
  };

  return (
    <>
      <div className="row">
        <div className="border border-primary border-4 m-3 p-1 spaceGraph">
          <Graph
            ref={graphRef}
            graph={state.graph}
            options={state.options}
            events={state.events}
            getNetwork={(network) => {
              interacciones(network);
            }}
          />
        </div>
        <div className="col-4">
          <OpcionesGrafoUI
            addNodo={addNew}
            addArista={addNewArista}
            nodos={[...state.graph.nodes]}
            register={register}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
    </>
  );
};

export default ElGrafo;
