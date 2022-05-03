import React from "react";
import { Link } from "react-router-dom";

const SideBarMenu = () => {
  return (
      <div className="col-3 mt-3">
        <div className="card p-3">
          <div className="container d-grid gap-1 card-body">
            <h3>Nombre de Usuario</h3>
            <Link to="" className="btn btn-dark">
              Lista de Grafos
            </Link>
            <Link to="/ayuda" className="btn btn-dark">
              Ayuda
            </Link>
            <Link to="/acercade" className="btn btn-dark">
              Acerca de
            </Link>
          </div>
        </div>
      </div>
  );
};
export { SideBarMenu };
