import React from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { HiPhotograph } from "react-icons/hi";
import { VscFilePdf, VscSaveAs, VscSave,
         VscHome, VscServerProcess} from "react-icons/vsc";
import { SiMicrosoftexcel } from "react-icons/si";
import { BiChalkboard } from "react-icons/bi";
import { TiExport } from "react-icons/ti";
import { AiTwotoneAppstore } from "react-icons/ai";

const SideBarGrafo = () => {
  return (
    <div className="col-2 mx-3 mt-3">
      <div className="card">
        <div className="container d-grid gap-1 card-body">
          <Link to="../home" className="btn btn-dark">
            <VscHome/> Home
          </Link>
          <Link to="" className="btn btn-dark">
            <BiChalkboard /> Tablero
          </Link>
          <Link to="aplicacion" className="btn btn-dark">
            <AiTwotoneAppstore/> Aplicacion
          </Link>
          <Link to="analizar" className="btn btn-dark">
            <VscServerProcess/> Analizar
          </Link>

          <Dropdown className="d-block">
            <Dropdown.Toggle id="dropdown-autoclose-true" className="w-100">
              <VscSave /> Guardar
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#"><VscSave /> Guardar </Dropdown.Item>
              <Dropdown.Item href="#"><VscSaveAs /> Guardar Como </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown>
            <Dropdown.Toggle id="dropdown-autoclose-true" className="w-100">
            <TiExport/> Exportar
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#"><HiPhotograph /> Imegen </Dropdown.Item>
              <Dropdown.Item href="#"><VscFilePdf /> Pdf </Dropdown.Item>
              <Dropdown.Item href="#"><SiMicrosoftexcel /> Excel </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}

export { SideBarGrafo };
