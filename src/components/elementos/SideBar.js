import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="container">
      <div className="card p-4">
        <div className="row d-grid gap-1 card-body">
          <Link to="inicio" className="btn btn-dark">
            Home
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
