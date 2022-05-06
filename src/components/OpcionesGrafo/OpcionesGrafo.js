import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { MdEdit, MdDelete, MdAddCircle } from "react-icons/md";
import { FormularioNodos } from "./FomularioNodos";
import { FormulariAristas } from "./FormularioAristas";

const OpcionesGrafo = () => {
    //Estado del formulario
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const [camposActiveNodo, setCamposActiveNodo] = useState(false);
    const [camposActiveArista, setCamposActiveArista] = useState(false);

    return (
        <div className="col">
            {/* Botnotes CRUD de nodo */}
            <div className="row d-flex justify-content-around mt-3">
                <h4>Opciones de Nodos</h4>
                <button
                    className="col-2 btn btn-primary"
                    type="button"
                    onClick={() => {
                        setCamposActiveNodo(!camposActiveNodo);
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
                        setCamposActiveNodo(!camposActiveNodo);
                    }}
                >
                    {" "}
                    <MdEdit />{" "}
                </button>
                <button className="col-2 btn btn-danger" type="button">
                    <MdDelete />
                </button>
            </div>
            {camposActiveNodo ? (
                <FormularioNodos
                    handleSubmit={handleSubmit}
                    register={register}
                    reset={reset}
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
                <button className="col-2 btn btn-danger" type="button">
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
}

export { OpcionesGrafo };