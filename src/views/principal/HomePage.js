import React from "react";
import { Outlet } from "react-router-dom";
import { SideBarMenu } from "../../components/elementos/SideBarHome";
import { elementContex } from "../../app/ContextState/Estado";
import { ModalNuevoGrafo } from "../../components/ModalNuevoGrafo/ModalNuevoGrafo";

const HomePage = () => {

  return (
    
    <div className="position-relative top-0 start-0">
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand">
            |-|
          </a>
          <a className="navbar-brand">
            GraPhico
          </a>
        </div>
      </nav>

      <div className="row">
        <SideBarMenu />
        <div className="col">
          <ModalNuevoGrafo></ModalNuevoGrafo>
          <Outlet />
        </div>
      </div>

    </div>
  );
};

export { HomePage };
