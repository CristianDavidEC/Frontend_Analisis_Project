import React from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import { MdEdit, MdDelete, MdAddCircle } from "react-icons/md";


const OpcionesGrafo = () => {
    return (
        <div class='container col  mt-3'>
            <h4>Opciones de Nodos</h4>
            <div class="input-group mt-3">
                <div class="input-group-prepend">
                    <button class="btn btn-primary" type="button"> <MdAddCircle /> </button>
                </div>
                <input type="text" class="form-control" placeholder="Id" aria-label="" aria-describedby="basic-addon1" />
                <input type="text" class="form-control" placeholder="Label" aria-label="" aria-describedby="basic-addon1" />
            </div>

            <div class="input-group mt-3">
                <div class="input-group-prepend">
                    <button class="btn btn-primary" type="button"> <MdEdit /> </button>
                </div>
                <input type="text" class="form-control" placeholder="Id" aria-label="" aria-describedby="basic-addon1" />
                <input type="text" class="form-control" placeholder="Label" aria-label="" aria-describedby="basic-addon1" />
            </div>

            <div class="input-group mt-3">
                <div class="input-group-prepend">
                    <button class="btn btn-danger" type="button"><MdDelete /></button>
                </div>
                <input type="text" class="form-control disabled" placeholder="Id" aria-label="" aria-describedby="basic-addon1" disabled="true" />
                <input type="text" class="form-control disabled" placeholder="Label" aria-label="" aria-describedby="basic-addon1" disabled="true" />
            </div>

            <h4 class = "mt-3">Opciones de Aristas</h4>
            <div class="input-group mt-3">
                <div class="input-group-prepend">
                    <button class="btn btn-primary" type="button"> <MdAddCircle/> </button>
                </div>
                <input type="text" class="form-control" placeholder="From" aria-label="" aria-describedby="basic-addon1" />
                <input type="text" class="form-control" placeholder="To" aria-label="" aria-describedby="basic-addon1" />
                <input type="text" class="form-control" placeholder="Value" aria-label="" aria-describedby="basic-addon1" />
            </div>

            <div class="input-group mt-3">
                <div class="input-group-prepend">
                    <button class="btn btn-primary" type="button"> <MdEdit/> </button>
                </div>
                <input type="text" class="form-control" placeholder="To" aria-label="" aria-describedby="basic-addon1" />
                <input type="text" class="form-control" placeholder="Value" aria-label="" aria-describedby="basic-addon1" />
            </div>

            <div class="input-group mt-3">
                <div class="input-group-prepend">
                    <button class="btn btn-danger" type="button"><MdDelete/></button>
                </div>
                <input type="text" class="form-control disabled" placeholder="To" aria-label="" aria-describedby="basic-addon1" disabled="true"/>
                <input type="text" class="form-control disabled" placeholder="Value" aria-label="" aria-describedby="basic-addon1" disabled="true" />
            </div>
        </div>
    );
};

export { OpcionesGrafo };
