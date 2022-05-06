import React from "react";

const FormularioNodos = ({ handleSubmit, register, reset, setCamposActiveNodo }) => {

    const onSubmitNodo = (data) => {
        console.log(data);
        reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmitNodo)}>
            <div className="row p-2">
                <div className="col form-group">
                    <label htmlFor="id_nodo">id</label>
                    <input
                        type="text"
                        id="id_nodo"
                        className="form-control"
                        aria-label=""
                        aria-describedby="basic-addon1"
                        {...register(`nodo.id`, {
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
                        {...register(`nodo.label`)}
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

export { FormularioNodos };