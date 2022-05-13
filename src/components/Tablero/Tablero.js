import React, { useState } from "react";
import { OpcionesGrafo } from "../OpcionesGrafo/OpcionesGrafo";
import { GrafoUI } from "../Grafo/GrafoUI";
//import { elementContex } from "../../app/ContextState/Estado";

const Tablero = () => {
  //Estado de el nodo seleccionado
  const [selectedNode, setNode] = useState({id: null, label : null});
  //console.log(selectedNode);

  //Estado de la arista seleccionada
  const [selectedEdge, setEdge] = useState({});

  /*useEffect(() => {
    if (selectedNode.id && !selectedNode.label) {
      const { label } = estadoGrafo.nodes.find(
        (eg) => (eg.id = selectedNode.id)
      );
      console.log(label);
      setNode({ ...selectedNode, label });
    }
    if (selectedEdge.id && !selectedNode.label) {
      console.log(estadoGrafo);
      // const { label } = estadoGrafo.nodes.find(
      //   (eg) => (eg.id = selectedNode.id)
      // );
      // console.log(label);
      // setNode({ ...selectedNode, label });
    }
  }, [selectedEdge, selectedNode, estadoGrafo]);
*/
  return (
    <div className="col-9 mt-3">
      <div className="row">
        <h3>Tablero</h3>
        <GrafoUI setEdge={setEdge} setNode={setNode} />
        <OpcionesGrafo
          selectedEdge={selectedEdge}
          selectedNode={selectedNode}
        />
      </div>
    </div>
  );
};

export { Tablero };
