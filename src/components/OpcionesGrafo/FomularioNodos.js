import React from "react";
import { useForm } from "react-hook-form";
import { elementContex } from "../../app/ContextState/Estado";


const FormularioNodos = ({
    register,
    handleSubmit,
    reset,
    nodo,
    setNodo,
    cerrar,
    operacion }) => {

  //Estado Nodo seleciionado
  const { id, label } = nodo;

  //Estado del grafo
  const { estadoGrafo,
          setEstadoGrafo,
          buscarNodo } = React.useContext(elementContex);

  let grafoActual = {...estadoGrafo };

  //---------------- Funciones -------------------//
  const agregarNodo = (nodeCreated) => {
    let nodoNew = {
      "id": nodeCreated.id,
      "label": nodeCreated.label,
      "data": {},
      "type": " ",
      "linkedTo": []
    }
    grafoActual.nodes.push(nodoNew);
    setEstadoGrafo(grafoActual);
    reset();
    cerrar(false);
  }

  const editarNodo = (newNodeEdit) => {
    const indexNodo = buscarNodo(nodo.id);
    let nodoEditar = { ...grafoActual.nodes[indexNodo] };
    console.log(nodoEditar);
    nodoEditar.id = newNodeEdit.id;
    nodoEditar.label = newNodeEdit.label;
    console.log(nodoEditar);
    grafoActual.nodes[indexNodo] = nodoEditar;
    setEstadoGrafo(grafoActual);
    console.log(estadoGrafo);
    reset();
    cerrar(false);
    setNodo({ id: null, label: null })
  }

  return (
    <form onSubmit={handleSubmit(operacion ? agregarNodo : editarNodo)}>
      <div className="row p-2">
        <div key="nodos_id_form" className="col form-group">
          <label htmlFor="id_nodo">id</label>
          <input
            type="number"
            id="id_nodo"
            className="form-control"
            defaultValue={id}
            aria-describedby="basic-addon1"
            {...register(`id`, {
              valueAsNumber: true,
              required:true
            })}
          />
        </div>
        <div key="nodos_label_form" className="col form-group">
          <label htmlFor="label_nodo">Label</label>
          <input
            type="text"
            id="label_nodo"
            className="form-control"
            defaultValue={label}
            aria-describedby="basic-addon1"
            {...register(`label`,{
              required:true
            })}
          />
        </div>
      </div>
      <div className="row p-2">
        <button
          className="col btn btn-success align-self-center"
          type="submit"
        >
          {operacion ? "Guardar" : "Actualizar"}
        </button>
      </div>
    </form>
  )
}

export { FormularioNodos };