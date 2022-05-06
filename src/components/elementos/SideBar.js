import React from "react";
import { Link } from "react-router-dom";
import { DropdownButton, Dropdown } from "react-bootstrap";

const SideBarGrafo = () => {
  return (
    <div className="col-2 mx-3 mt-3">
      <div className="card">
        <div className="container d-grid gap-1 card-body">
          <Link to="../home" className="btn btn-dark">
            Home
          </Link>
          <Link to="" className="btn btn-dark">
            Tablero
          </Link>
          <Link to="aplicacion" className="btn btn-dark">
            Aplicacion
          </Link>
          <Link to="analizar" className="btn btn-dark">
            Analizar
          </Link>

          <Dropdown className= "d-block">
            <Dropdown.Toggle id="dropdown-autoclose-true" className="w-100">
               Guardado 
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#">Guardar</Dropdown.Item>
              <Dropdown.Item href="#">Guardar Como</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown>
            <Dropdown.Toggle id="dropdown-autoclose-true" className="w-100">
               Exportar 
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#">Imegen</Dropdown.Item>
              <Dropdown.Item href="#">Pdf</Dropdown.Item>
              <Dropdown.Item href="#">Excel</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}

export { SideBarGrafo };
