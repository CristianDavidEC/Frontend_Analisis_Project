import axios from 'axios';

const url = 'http://127.0.0.1:8000'

export function todosGrafos(callback) {
    axios.get(url + '/grafos')
        .then(res => {
            callback(res.data);
        })
        .catch(err => {
            console.log(err);
        });
}

export function eliminarGrafo(id) {
    axios.delete(url + '/grafos/' + id)
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        });
}

export function guardarNuevoGrafo(grafoNuevo) {
    axios.post(url + '/grafos/', grafoNuevo)
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        });
}

export function guardarGrafoEditado(id, grafoEditado) {
    axios.put(url + '/grafos/' + id, grafoEditado)
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        });
}

