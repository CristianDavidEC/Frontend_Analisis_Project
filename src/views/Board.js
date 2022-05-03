import React from "react";
import { Outlet } from "react-router-dom";
import { SideBarGrafo } from "../components/elementos/SideBar";
import { Link } from "react-router-dom";

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
      <div className="container">
        <div className="row">
            <SideBarGrafo />
            <div className="col">
              <Outlet />
            </div>
        </div>
      </div>
    </div>
  );
};

export { Board };