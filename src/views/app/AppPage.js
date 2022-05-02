import React from "react";
import { Link, Outlet } from "react-router-dom";
import SideBar from "../../components/elementos/SideBar";
const AppPage = () => {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand">
              |-|
            </Link>
          <Link className="navbar-brand">
            GraPhico
          </Link>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col">
            <SideBar />
          </div>
          <div className="col">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default AppPage;
