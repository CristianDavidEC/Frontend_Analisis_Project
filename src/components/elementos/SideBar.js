import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
      <div className="col-3 top-0 start-0">
        <div className="card p-4">
          <div className="container d-grid gap-1 card-body">
            <Link to="" className="btn btn-dark">
              Home
            </Link>
            <Link to="board" className="btn btn-dark">
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
};

export default SideBar;
