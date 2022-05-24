import React from "react";
import { elementContex } from '../../app/ContextState/Estado';

const FormularioGuardarGrafo = ({ setIsOpen }) => {
    const { estadoGrafo } = React.useContext(elementContex);

    const guardarGrafo = () => {
        console.log(estadoGrafo);
    }
    return (
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title">Guardar Grafo</h5>
                <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                    onClick={() => setIsOpen(false)}
                >
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form>
                    <div class="form-group">
                        <label for="recipient-name" class="col-form-label">Nombre</label>
                        <input type="text" class="form-control" id="recipient-name"/>
                    </div>
                    <div class="form-group">
                        <label for="message-text" class="col-form-label">Descripcion</label>
                        <textarea class="form-control" id="message-text"></textarea>
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" 
                    data-dismiss="modal"
                    onClick={() => setIsOpen(false)}
                >
                    Cancelar 
                </button>
                <button 
                    type="button" 
                    class="btn btn-primary"
                    onClick={guardarGrafo}
                >
                    Guardar
                </button>
            </div>
        </div>

    )
}

export { FormularioGuardarGrafo };

