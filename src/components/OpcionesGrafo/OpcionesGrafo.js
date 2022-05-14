import React from "react";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { MdEdit, MdDelete, MdAddCircle } from "react-icons/md";
import { FormularioNodos } from "./FomularioNodos";
import { FormulariAristas } from "./FormularioAristas";
import { elementContex } from "../../app/ContextState/Estado";

const OpcionesGrafo = ({ selectedEdge, selectedNode }) => {
  //Estado del formulario
  const {
    register,
    handleSubmit,
    reset,
  } = useForm();
  
  //Estado de los Nodos del Grafo
  const { estadoGrafo, setEstadoGrafo } = React.useContext(elementContex);

  //Estado de las opciones de boton si estan activos o no
  const [estadoBoton, setEstadoBoton] = useState(false);

  //Estado de el formulario de nodos y aristas, si esta abierto o no
  const [camposActiveNodo, setCamposActiveNodo] = useState(false);
  const [camposActiveArista, setCamposActiveArista] = useState(false);

  /**
   * Controla los cambios en el formulario, refrescandolo si
   * es necesario o actualizando los valores de elementos.
   */
     useEffect(() => {
      if (!selectedNode.id) {
        reset();
        setCamposActiveNodo(false);
      }
      reset();
      setEstadoBoton(false);
    },[selectedNode]);
  

  const eliminarNodo = (nodoEliminar) => {
    let grafoActual = { ...estadoGrafo };
    if (nodoEliminar.id) {
      let nodosFilter = grafoActual.nodes.filter(
        nodo => JSON.stringify(nodo) !== JSON.stringify(nodoEliminar)
      );
      grafoActual.nodes = nodosFilter;
      setEstadoGrafo(grafoActual);
    }
  }

  return (
    <div className="col mx-3">
      {/* Botnotes CRUD de nodo */}
      <div className="row d-flex justify-content-around mt-3">
        <h4>Opciones de Nodos</h4>
        <button
          className="col-2 btn btn-primary"
          type="button"
          disabled={selectedNode.id}
          onClick={() => {
            setEstadoBoton(true);
            setCamposActiveNodo(!camposActiveNodo);
            reset();
          }}
        >
          {" "}
          <MdAddCircle />{" "}
        </button>
        <button
          className="col-2 btn btn-warning"
          type="button"
          disabled={!selectedNode.id}
          onClick={() => {
            setEstadoBoton(false);
            reset();
            setCamposActiveNodo(!camposActiveNodo);
          }}
        >
          {" "}
          <MdEdit />{" "}
        </button>
        <button
          className="col-2 btn btn-danger"
          disabled={!selectedNode.id}
          type="button"
          onClick={() => {
            eliminarNodo(selectedNode);
            reset();
          }}
        >
          <MdDelete />
        </button>
      </div>
      {camposActiveNodo ? (
        <FormularioNodos
          handleSubmit={handleSubmit}
          register={register}
          reset={reset}
          nodo={selectedNode}
          cerrar={setCamposActiveNodo}
          operacion={estadoBoton}
        />
      ) : (
        <></>
      )}

      {/* Crud de Aristas */}
      <div className="row d-flex justify-content-around mt-4">
        <h4>Opciones de Aristas</h4>
        <button
          className="col-2 btn btn-primary"
          type="button"
          onClick={() => {
            setCamposActiveArista(!camposActiveArista);
          }}
        >
          {" "}
          <MdAddCircle />{" "}
        </button>
        <button
          className="col-2 btn btn-warning"
          type="button"
          onClick={() => {
            // addNodo();
            setCamposActiveArista(!camposActiveArista);
          }}
        >
          {" "}
          <MdEdit />{" "}
        </button>
        <button
          className="col-2 btn btn-danger"
          type="button">
          <MdDelete />
        </button>
      </div>
      {camposActiveArista ? (
        <FormulariAristas
          handleSubmit={handleSubmit}
          register={register}
          reset={reset}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export { OpcionesGrafo };
