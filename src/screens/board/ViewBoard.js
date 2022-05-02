import React from "react";
import { Grafo } from '../../components/Grafo/Grafo';

const ViewBoard = () => {
  return (
    <div className="border border-primary border-4 m-3 p-1 spaceGraph">
      <Grafo />
    </div>
  );
};

export default ViewBoard;
