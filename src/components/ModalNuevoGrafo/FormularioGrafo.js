import React from 'react'
import { useNavigate } from 'react-router-dom';
import { elementContex } from '../../app/ContextState/Estado';

const FormularioGrafo = ({ closeModal }) => {
    //Estado del contexto del grafo
    const {
        setEstadoGrafo
    } = React.useContext(elementContex);

    const [estadoInput, setInput] = React.useState(null);

    const navigate = useNavigate();

    const leerArchivo = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.readAsText(file);
            reader.onload = function () {
                const text = reader.result;
                const obj = JSON.parse(text);
                setInput(obj);
            }
        }
    }

    const setGrafo = () => {
        if (estadoInput){
            console.log(estadoInput);
            setEstadoGrafo(estadoInput);
            navigate('/board')
        }else {
            alert('No selecciono ningun archivo')
        }
    }

    const grafoVacio = () => {
        setEstadoGrafo({
            name: '',
            nodes: []
        });
        navigate('/board')
    }

    return (
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title">Opciones de Creacion de grafos</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={closeModal}>
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body d-grid gap-3">
                <button className="btn btn-primary" onClick={grafoVacio}>
                    Grafo vacío
                </button>

                <button className="btn btn-primary" 
                        onClick={setGrafo}>
                    Importar
                </button>
                <div class="custom-file">
                    <input
                        type="file"
                        className="custom-file-input"
                        id="inputGroupFile01"
                        accept=".json"
                        onChange={leerArchivo}
                    />
                    <label className="custom-file-label" for="inputGroupFile01">Choose file</label>
                </div>

                <div className="container-sm p-5 card d-grid gap-3">
                    {/*TODO: Validaciones de los campos a seleccionar*/}
                    <button className="btn btn-primary" onClick={() => navigate('/board')}>
                        Aleatorio
                    </button>
                    <div className="row">
                        <div className="col">
                            <select>
                                <option>a</option>
                                <option>a</option>
                            </select>
                        </div>
                        <div className="col">
                            <select>
                                <option>a</option>
                                <option>a</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            {/* {<div className="modal-footer">
                {/<button type="button" className="btn btn-primary">Iniciar Grafo</button}
                <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={closeModal}>Cancelar</button>
            </div>} */}
        </div>

    )
}
export { FormularioGrafo };