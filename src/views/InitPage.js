import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";

const InitPage = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <Button color="primary" onClick={() => navigate(`/login`)}>
        GO
      </Button>
    </div>
  );
};

export {InitPage};
