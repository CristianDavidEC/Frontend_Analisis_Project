import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../../components/elementos/SideBar";
const AppPage = () => {
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
      <div className="container">
        <div className="row">
            <SideBar />
            <div className="col">
              <Outlet />
            </div>
        </div>
      </div>
    </div>
  );
};

export default AppPage;
