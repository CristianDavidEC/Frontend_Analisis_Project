import React from "react";
import { Outlet } from "react-router-dom";
import { SideBarGrafo } from "../components/elementos/SideBar";
import { Link } from "react-router-dom";
import { OpcionesGrafoUI } from "../components/OpcionesGrafo/OpcionesGrafoUI";


const Board = () => {
  return (
    <div className="position-relative top-0 start-0">
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand">
            <Link to="../home" className="btn btn-dark">
              Home
            </Link>
          </a>
          <a className="navbar-brand">
            GraPhico
          </a>
        </div>
      </nav>

      <div className="row">
        <SideBarGrafo />
        <div className="col">
          <Outlet />
        </div>
        <div className="col">
          <OpcionesGrafoUI />
        </div>
      </div>
    </div>
  );
};

export { Board };
