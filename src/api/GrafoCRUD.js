import axios from 'axios';

const url = 'http://127.0.0.1:8000'

export function todosGrafos() {
    axios.get(url + '/grafos')
        .then(res => {
            const persons = res.data;
            console.log(persons);
        })
}

