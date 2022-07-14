// Callbacks mejorado

// Iniciamos ...
const XMLHttprequest = require('xmlhttprequest').XMLHttpRequest; // Requerimos el componente que instalamos
const API = 'https://api.escuelajs.co/api/v1';  // Guardamos la url de la API donde haremos los llamados


const fetchData = (urlApi, callback) => {
    let xhttp = new XMLHttprequest(); // La referencia a XMLHttprequest

    xhttp.open('GET', urlApi, true); // Abrimos la conexion y le pasamos el METODO que aplicaremos, la URL que le pasaremos y TRUE
    xhttp.onreadystatechange = function (event) {   // Escuchamos por los cambios que pueda llegar a tener
        if (xhttp.readyState === 4) {   // Validar el estado dentro de los que tenemos
            if (xhttp.status === 200) { // Validamos el Status que nos entrega el servidor
                callback(null, JSON.parse(xhttp.responseText)); // Recibimos un responseText
            }else {
                const error = new Error('Error' + urlApi); // Mandamos un error en caso de que el servidor nos entregue algun estado diferente al 200
                return callback(error, null);
            }
        } 
    }
    xhttp.send();
}

// Llamamos a la funcion fetchData y le indicamos que datos son los que queremos traer

fetchData(`${API}/products`, function (error1, data1) {
    if (error1) return console.error(error1);
        fetchData(`${API}/products/${data1[0].id}`, function (error2, data2) {
            if (error2) return console.log(error2);
                fetchData(`${API}/categories/${data2?.category?.id}`, function (error3, data3) {
                    if (error3) return console.error(error3);
                    console.log(data1[0]);  // Imprimimos la informacion deseada que previamente nos trajimos 
                    console.log(data2.title);
                    console.log(data3.name);
                });
        });
});

