import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { MdEdit, MdDelete, MdAddCircle } from "react-icons/md";
import { FormularioNodos } from "./OpcionesNodos";

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
            {/* CRUD de nodo */}
            <div className="row d-flex justify-content-around">
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
                    handleSubmit = {handleSubmit}
                    register = {register}
                    reset = {reset}
                    setCamposActiveNodo = {setCamposActiveNodo}
                />
            ) : (
                <></>
            )}
        </div>
    );
}

export { OpcionesGrafo };