import React, { useState } from 'react';
import Graph from "react-graph-vis";
import { graph } from './Api';

const Grafo = () => {
    const [evento, setEvento] = useState();
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
                graph={graph}
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

