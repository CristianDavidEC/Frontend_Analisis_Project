import React from "react";

const elementContex = React.createContext ();
function ElementEstado (props){ 

    const [estadoGrafo, setEstadoGrafo] = React.useState('');

    //Este es el Provider
    //En el value van todas las propiedades y estados que queramos compartir
    return (
        <elementContex.Provider value = {{
            estadoGrafo,
            setEstadoGrafo
        }}>
            {/**Envuelve todos los componenetes que vayan ausar en consumer */} 
            {props.children}
        </elementContex.Provider> 
    );
}

export{ elementContex, ElementEstado };

//<Provider></Provider> -- Se usa par envolver la apliacion y para definir su estado
//<Consumer></Consumer> -- Se usa cada vez que llame aun estado