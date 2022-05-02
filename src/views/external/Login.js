import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  
  onsubmit = () => {
    navigate("/login/opciones")
  }

  return (
    <>
    <div className="container-sm  p-5 card position-absolute top-50 start-50 translate-middle">
      <form>
        <fieldset>
          <legend>Inicia a Graphico</legend>
          <div className="mb-3">
            <label for="username_fiel" className="form-label">
              Nombre de usuario
            </label>
            <input
              type="text"
              id="username_fiel"
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Ingresar
          </button>
        </fieldset>
      </form>
      </div>
    </>
  );
};

export default Login;
