import React from "react";
import { elementContex } from "../../app/ContextState/Estado";

const FormularioNodos = ({ handleSubmit, register, reset,nodo, cerrar}) => {

    const { estadoGrafo, setEstadoGrafo } = React.useContext(elementContex);
    console.log(nodo);
    const agregarNodo = (nodo) => {
        let nodoNew = {
            "id": nodo.id,
            "label": nodo.label,
            "data": {},
            "type": " ",
            "linkedTo": []
        }
        let grafoActual = {... estadoGrafo};
        grafoActual.nodes.push(nodoNew);
        setEstadoGrafo(grafoActual);
        reset();
        cerrar(false);
    }

    return (
        <form onSubmit={handleSubmit(agregarNodo)}>
            <div className="row p-2">
                <div key="nodos_id_form" className="col form-group">
                    <label htmlFor="id_nodo">id</label>
                    <input
                        type="text"
                        id="id_nodo"
                        className="form-control"
                        aria-label=""
                        defaultValue={nodo.id}
                        aria-describedby="basic-addon1"
                        {...register(`id`, {
                            valueAsNumber: true,
                        })}
                    />
                </div>
                <div key="nodos_label_form" className="col form-group">
                    <label htmlFor="label_nodo">Label</label>
                    <input
                        type="text"
                        id="label_nodo"
                        className="form-control"
                        aria-label=""
                        defaultValue={nodo.label}
                        aria-describedby="basic-addon1"
                        {...register(`label`)}
                    />
                </div>
            </div>
            <div className="row p-2">
                <button
                    className="col btn btn-success align-self-center"
                    type="submit"
                > Guardar
                </button>
            </div>
        </form>
    )
}

export { FormularioNodos };