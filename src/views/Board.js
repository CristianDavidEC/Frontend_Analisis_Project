import React from "react";
import { Outlet } from "react-router-dom";
import { SideBarGrafo } from "../components/elementos/SideBar";
import { Link } from "react-router-dom";
import { GrGraphQl } from "react-icons/gr";


const Board = () => {
  return (
    <div className="position-relative contenido">
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand">
            <Link to="../home" className="btn btn-dark">
              <GrGraphQl style={{ fontSize: '40px' }} />
            </Link>
          </a>
          <a className="navbar-brand">
            GraPhico
          </a>
        </div>
      </nav>

      <div className="row contenido">
          <SideBarGrafo />
          <Outlet />
      </div>
    </div>
  );
};

export { Board };
