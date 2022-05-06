import React from "react";
import { elementContex } from "../../app/ContextState/Estado";

const FormulariAristas = ({ handleSubmit, register, reset }) => {

    const { estadoGrafo, setEstadoGrafo, buscarNodo } = React.useContext(elementContex);

    const { nodes } = estadoGrafo;

    /**
     * Agrega una nueva arista entre dos nodos y modifica
     * 
     *  */ 
    const agregarArista = (arista) => {
        const { from } = arista;

        const nodoFrom = buscarNodo(from);
        console.log(nodoFrom);

        let edge = {
            nodeId : arista.to,
            distance : arista.label,
        }
        let grafoActual = {... estadoGrafo};
        grafoActual.nodes[nodoFrom].linkedTo.push(edge);
        console.log(grafoActual);
        setEstadoGrafo(grafoActual);
        reset();
    }

    return (
        <form onSubmit={handleSubmit(agregarArista)}>
            <div className="row p-2">
                <div className="col form-group">
                    <label htmlFor="label_from">from</label>
                    <select
                        type="text"
                        id="label_from"
                        className="form-control"
                        aria-label=""
                        aria-describedby="basic-addon1"
                        {...register(`from`, {
                            valueAsNumber: true,
                        })}
                    >
                        {nodes.map((nodo) => (
                            <option
                                key={`from-${nodo.id}`}
                                value={nodo.id}
                            >{`${nodo.label}`}</option>
                        ))}
                    </select>
                </div>
                <div className="col form-group">
                    <label htmlFor="label_from">to</label>
                    <select
                        type="text"
                        id="label_from"
                        className="form-control"
                        aria-label=""
                        aria-describedby="basic-addon1"
                        {...register(`to`, {
                            valueAsNumber: true,
                        })}
                    >
                        {nodes.map((nodo) => (
                            <option
                                key={`to-${nodo.id}`}
                                value={nodo.id}
                            >{`${nodo.label}`}</option>
                        ))}
                    </select>
                </div>
                <div className="col form-group">
                    <label htmlFor="label_nodo">Weight</label>
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
                >
                    Guardar
                </button>
            </div>
        </form>
    )

}

export { FormulariAristas };