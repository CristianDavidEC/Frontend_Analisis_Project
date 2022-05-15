import React from "react";
import { useForm } from "react-hook-form";
import { elementContex } from "../../app/ContextState/Estado";

const FormulariAristas = ({
    register,
    handleSubmit,
    reset,
    edge,
    cerrar,
    operacion
}) => {

    const { estadoGrafo,
        setEstadoGrafo,
        buscarNodo } = React.useContext(elementContex);

    const { nodes } = estadoGrafo;

    const { from, to, label } = edge;

    /**
     * Agrega una nueva arista entre dos nodos y modifica
     * 
     *  */
    const agregarArista = (arista) => {
        const { from } = arista;
        const nodoFrom = buscarNodo(from);
        let edge = {
            nodeId: arista.to,
            distance: arista.label,
        }
        let grafoActual = { ...estadoGrafo };
        grafoActual.nodes[nodoFrom].linkedTo.push(edge);
        setEstadoGrafo(grafoActual);
        reset();
    }

    const editarArista = (arista) => {
        const newLinked = {nodeId : to, distance : arista.label};
    }

    return (
        <form onSubmit={handleSubmit(operacion ? agregarArista : editarArista)}>
            <div className="row p-2">
                <div className="col form-group">
                    <label htmlFor="label_from">from</label>
                    {operacion ?
                        (
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
                        ) :
                        (
                            <input
                                type="text"
                                id="label_from"
                                className="form-control"
                                aria-describedby="basic-addon1"
                                value={from}
                            />
                        )
                    }
                </div>
                <div className="col form-group">
                    <label htmlFor="label_from">to</label>
                    {operacion ?
                        (
                            <select
                                type="text"
                                id="label_from"
                                className="form-control"
                                aria-label=""
                                aria-describedby="basic-addon1"
                                {...register(`to`, {
                                    valueAsNumber: true,
                                })}>
                                {nodes.map((nodo) => (
                                    <option
                                        key={`to-${nodo.id}`}
                                        value={nodo.id}>
                                        {`${nodo.label}`}
                                    </option>
                                ))}
                            </select>

                        ) :
                        (
                            <input
                                type="text"
                                id="label_from"
                                className="form-control"
                                aria-describedby="basic-addon1"
                                value={to}
                            />
                        )
                    }

                </div>
                <div className="col form-group">
                    <label htmlFor="label_nodo">Weight</label>
                    <input
                        type="text"
                        id="label_nodo"
                        className="form-control"
                        aria-label=""
                        aria-describedby="basic-addon1"
                        defaultValue={label}
                        {...register(`label`)}
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
export { FormulariAristas };