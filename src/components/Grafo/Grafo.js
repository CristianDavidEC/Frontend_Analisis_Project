import React from 'react';
import Graph from "react-graph-vis";
import { graph } from './Api';


function Grafo() {
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
        <Graph
            graph={graph}
            options={options}
            events={events}
            getNetwork={network => {
                //  if you want access to vis.js network api you can set the state in a parent component using this property
            }}
        />
    );
}

export {Grafo};

