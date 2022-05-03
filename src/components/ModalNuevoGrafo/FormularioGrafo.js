import React from 'react'

const FormularioGrafo = ({ closeModal }) => {
    return (
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Modal titl que pasa si escribo mucho mas</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={closeModal}>
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <p>Modal body text goes here.</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-primary">Iniciar Grafo</button>
                <button type="button" class="btn btn-secondary" data-dismiss="modal" onClick={closeModal}>Close</button>
            </div>
        </div>

    )
}

export { FormularioGrafo };