import React from "react";
import { Outlet } from "react-router-dom";
import { SideBarMenu } from "../../components/elementos/SideBarHome";
import { ModalNuevoGrafo } from "../../components/ModalNuevoGrafo/ModalNuevoGrafo";
import { GrGraphQl } from "react-icons/gr";
const HomePage = () => {

  return (
    
    <div className="position-relative contenido">
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand">
            <GrGraphQl style={{fontSize: '40px'}}/>
          </a>
          <a className="navbar-brand">
            GraPhico
          </a>
        </div>
      </nav>

      <div className="row contenido">
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
