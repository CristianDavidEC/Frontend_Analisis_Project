import axios from 'axios';
const url = 'http://localhost:8000'

//Obtiene todas las facturas
export function findAllGrafos(callback) {
    axios.get(url + "/grafos/")
        .then((res) => {
            console.log(res.data);
            callback(res.data);
        })
        .catch((err) => {
            callback(err);
        })
}

export function todosGrafos() {
    axios.get(`http://localhost:8000/grafos/`)
      .then(res => {
        const persons = res.data;
        console.log(persons);
      })
  }

