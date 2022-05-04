import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SideBarGrafo = () => {
    
    return (
      <div className="col-2 mx-3 mt-3 start-0">
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
          </div>
        </div>
      </div>
    );
  }

export { SideBarGrafo };
