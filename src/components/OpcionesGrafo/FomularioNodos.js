import React from "react";
import { elementContex } from "../../app/ContextState/Estado";

const FormularioNodos = ({ handleSubmit, register, reset}) => {

    const { estadoGrafo, setEstadoGrafo } = React.useContext(elementContex);

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
    }

    return (
        <form onSubmit={handleSubmit(agregarNodo)}>
            <div className="row p-2">
                <div className="col form-group">
                    <label htmlFor="id_nodo">id</label>
                    <input
                        type="text"
                        id="id_nodo"
                        className="form-control"
                        aria-label=""
                        aria-describedby="basic-addon1"
                        {...register(`id`, {
                            valueAsNumber: true,
                        })}
                    />
                </div>
                <div className="col form-group">
                    <label htmlFor="label_nodo">Label</label>
                    <input
                        type="text"
                        id="label_nodo"
                        className="form-control"
                        aria-label=""
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