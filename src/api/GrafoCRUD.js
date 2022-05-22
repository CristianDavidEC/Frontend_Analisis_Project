import React from "react";
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

