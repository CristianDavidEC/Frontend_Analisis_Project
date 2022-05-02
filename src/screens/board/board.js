import React from "react";
import { Outlet } from "react-router-dom";

const Board = () => {
  return (
    <>
      <div className="container">
        <div className="row d">
          <h2 className="mt-5">Software de manejo de grafos</h2>
          <div className="mt-5">
            <div className="col">
              <Outlet />
            </div>
            {/* <div className="col text-center">
              <BotonNuevoGrafo />
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Board;
