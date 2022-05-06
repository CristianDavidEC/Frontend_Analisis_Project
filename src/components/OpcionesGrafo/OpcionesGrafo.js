import React, { useState } from "react";
import {
  IoMdAddCircleOutline,
  IoIosCheckmarkCircleOutline,
} from "react-icons/io";
import { MdEdit, MdDelete, MdAddCircle } from "react-icons/md";
/**
 *
 * @param {*} addNodo funcion para agregar un nuevo nodo
 * @param {*} addArista funcion para agregar nueva arista
 * @param {*} nodos lista de nodos para concctar
 * @param {*} arista arista seleccionada para editar
 * @param {*} register nodo o arista a agregar
 * @param {*} handleSubmit funcion de control para la data del register guardar nodo o arista
 * @returns
 */
const OpcionesGrafo = ({
  addNodo,
  addArista,
  nodos,
  arista,
  register,
  handleSubmit,
}) => {
  const [camposActiveNodo, setCamposActiveNodo] = useState(false);
  const [camposActiveArista, setCamposActiveArista] = useState(false);

  // Envío de formulario del nodo
  const onSubmitNodo = (data) => {
    addNodo(data.nodo);
    setCamposActiveNodo(false);
  };
  // Envío de formulario de la arista
  const onSubmitArista = (data) => {
    addArista(data);
    setCamposActiveArista(false);
  };
  return (
    <div className="col">
      {/* CRUD ed nodo */}
      <div className="row d-flex justify-content-around">
        <h4>Opciones de Nodos</h4>
        <button
          className="col-2 btn btn-primary"
          type="button"
          onClick={() => {
            // addNodo();
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
      ) : (
        <></>
      )}
      {/* Crud de Aristas */}
      <div className="row d-flex justify-content-around">
        <h4>Opciones de Aristas</h4>
        <button
          className="col-2 btn btn-primary"
          type="button"
          onClick={() => {
            // addNodo();
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
        <form onSubmit={handleSubmit(onSubmitArista)}>
          <div className="row p-2">
            <div className="col form-group">
              <label htmlFor="label_from">from</label>
              <select
                type="text"
                id="label_from"
                className="form-control"
                aria-label=""
                aria-describedby="basic-addon1"
                {...register(`edge.from`, {
                  valueAsNumber: true,
                })}
              >
                {nodos.map((nodo) => (
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
                {...register(`edge.to`, {
                  valueAsNumber: true,
                })}
              >
                {nodos.map((nodo) => (
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
                {...register(`edge.label`)}
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
      ) : (
        <></>
      )}
    </div>
    // <div className="container col  mt-3">
    //   <h4>Opciones de Nodos</h4>
    //   <div className="input-group mt-3">
    //     <div className="input-group-prepend">
    //       <button
    //         className="btn btn-primary"
    //         type="button"
    //         onClick={() => {
    //           addNodo();
    //         }}
    //       >
    //         {" "}
    //         <MdAddCircle />{" "}
    //       </button>
    //     </div>
    //     <input
    //       type="text"
    //       className="form-control"
    //       placeholder="Id"
    //       aria-label=""
    //       aria-describedby="basic-addon1"
    //     />
    //     <input
    //       type="text"
    //       className="form-control"
    //       placeholder="Label"
    //       aria-label=""
    //       aria-describedby="basic-addon1"
    //     />
    //   </div>

    //   <div className="input-group mt-3">
    //     <div className="input-group-prepend">
    //       <button className="btn btn-primary" type="button">
    //         {" "}
    //         <MdEdit />{" "}
    //       </button>
    //     </div>
    //     <input
    //       type="text"
    //       className="form-control"
    //       placeholder="Id"
    //       aria-label=""
    //       aria-describedby="basic-addon1"
    //     />
    //     <input
    //       type="text"
    //       className="form-control"
    //       placeholder="Label"
    //       aria-label=""
    //       aria-describedby="basic-addon1"
    //     />
    //   </div>

    //   <div className="input-group mt-3">
    //     <div className="input-group-prepend">
    //   <button className="btn btn-danger" type="button">
    //     <MdDelete />
    //   </button>
    //     </div>
    //     <input
    //       type="text"
    //       className="form-control disabled"
    //       placeholder="Id"
    //       aria-label=""
    //       aria-describedby="basic-addon1"
    //       disabled="true"
    //     />
    //     <input
    //       type="text"
    //       className="form-control disabled"
    //       placeholder="Label"
    //       aria-label=""
    //       aria-describedby="basic-addon1"
    //       disabled="true"
    //     />
    //   </div>

    //   <h4 className="mt-3">Opciones de Aristas</h4>
    //   <div className="input-group mt-3">
    //     <div className="input-group-prepend">
    //   <button className="btn btn-primary" type="button">
    //     {" "}
    //     <MdAddCircle />{" "}
    //   </button>
    //     </div>
    //     <input
    //       type="text"
    //       className="form-control"
    //       placeholder="From"
    //       aria-label=""
    //       aria-describedby="basic-addon1"
    //     />
    //     <input
    //       type="text"
    //       className="form-control"
    //       placeholder="To"
    //       aria-label=""
    //       aria-describedby="basic-addon1"
    //     />
    //     <input
    //       type="text"
    //       className="form-control"
    //       placeholder="Value"
    //       aria-label=""
    //       aria-describedby="basic-addon1"
    //     />
    //   </div>

    //   <div className="input-group mt-3">
    //     <div className="input-group-prepend">
    //       <button className="btn btn-primary" type="button">
    //         {" "}
    //         <MdEdit />{" "}
    //       </button>
    //     </div>
    //     <input
    //       type="text"
    //       className="form-control"
    //       placeholder="To"
    //       aria-label=""
    //       aria-describedby="basic-addon1"
    //     />
    //     <input
    //       type="text"
    //       className="form-control"
    //       placeholder="Value"
    //       aria-label=""
    //       aria-describedby="basic-addon1"
    //     />
    //   </div>

    //   <div className="input-group mt-3">
    //     <div className="input-group-prepend">
    //       <button className="btn btn-danger" type="button">
    //         <MdDelete />
    //       </button>
    //     </div>
    //     <input
    //       type="text"
    //       className="form-control disabled"
    //       placeholder="To"
    //       aria-label=""
    //       aria-describedby="basic-addon1"
    //       disabled="true"
    //     />
    //     <input
    //       type="text"
    //       className="form-control disabled"
    //       placeholder="Value"
    //       aria-label=""
    //       aria-describedby="basic-addon1"
    //       disabled="true"
    //     />
    //   </div>
    // </div>
  );
};

export { OpcionesGrafo };
