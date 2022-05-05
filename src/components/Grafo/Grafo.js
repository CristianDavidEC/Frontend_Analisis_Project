import React, { useState } from 'react';
import Graph from "react-graph-vis";
import { graph } from './Api';
import { elementContex } from '../../app/ContextState/Estado';

const Grafo = () => {
    //State
    const {
        estadoGrafo,
        setEstadoGrafo
    } = React.useContext(elementContex);

    const { nodes, name } = estadoGrafo;
    const [evento, setEvento] = useState();

    let bordes = []
    /**
     * Mapea los nosos del estadoGrafo para darle el formato necesario
     * para renderizar en componente
     */
    const grafoUI = {
        nodes: nodes.map(node => {
            node.linkedTo.forEach(link => {
                bordes.push({
                    from: node.id,
                    to: link.nodeId,
                    label: link.distance
                });
            });
            return {
                id: node.id,
                label: node.label,
            }
        }),
        edges: []
    }
    grafoUI.edges = bordes;
    console.log(grafoUI)

    //Ajustes del grafo y el canva
    const options = {
        layout: {
            hierarchical: false,
        },
        edges: {
            color: "#000000"
        },

        height: "100%",
        width: "100%",
    };

    //Evetos que peude manejar el grafo
    const events = {
        select: function (event) {
            var { nodes, edges } = event;
        }
    };

    //Renderizado el elemento grafo
    return (
        <div className="border border-primary border-4 m-3 p-1 spaceGraph">
            <Graph
                graph={grafoUI}
                options={options}
                events={events}
                getNetwork={network => {
                    //  if you want access to vis.js network api you can set the state in a parent component using this property
                }}
            />
            <p>{evento}</p>
        </div>
    );
}

export { Grafo };

