const XMLHttprequest = require('xmlhttprequest').XMLHttpRequest; // Requerimos el componente que instalamos
const API = 'https://api.escuelajs.co/api/v1';  // Guardamos la url de la API donde haremos los llamados


const fetchData = (urlApi, callback) => {
    let xhttp = new XMLHttprequest();

    xhttp.open('GET', urlApi, true); // Abrimos la conexion y le pasamos el METODO que aplicaremos, la URL que le pasaremos y TRUE
    xhttp.onreadystatechange = function (event) {
        if (xhttp.readyState === 4) {
            if (xhttp.status === 200) {
                callback(null, JSON.parse(xhttp.responseText));
            }
        } else {
            const error = new Error('Error' + urlApi);
            return callback(error, null);
        }
    }
    xhttp.send();
}


