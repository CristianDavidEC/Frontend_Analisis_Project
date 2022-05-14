import React from "react";
import { elementContex } from "../../app/ContextState/Estado";

const FormularioNodos = ({
    handleSubmit,
    register, 
    reset, 
    nodo, 
    cerrar, 
    operacion}) => {

    const { id, label } = nodo;
    const { estadoGrafo, setEstadoGrafo }= React.useContext(elementContex);

    const agregarNodo = (nodeCreated) => {
        let nodoNew = {
            "id": nodeCreated.id,
            "label": nodeCreated.label,
            "data": {},
            "type": " ",
            "linkedTo": []
        }
        let grafoActual = {...estadoGrafo};
        grafoActual.nodes.push(nodoNew);
        setEstadoGrafo(grafoActual);
        reset();
        cerrar(false);
    }

    const editarNodo = (nodeEdit) => {
        console.log(nodeEdit);
        cerrar(false);
    }

    return (
        <form onSubmit={handleSubmit(operacion ? agregarNodo : editarNodo)}>
            <div className="row p-2">
                <div key="nodos_id_form" className="col form-group">
                    <label htmlFor="id_nodo">id</label>
                    <input
                        type="text"
                        id="id_nodo"
                        className="form-control"
                        defaultValue={id}
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
                        defaultValue={label}
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