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

fetchData(`${API}/products`, function (error1, data1) {
    if (error1) return console.error(error1);
        fetchData(`${API}/products/${data1[0].id}`, function (error2, data2) {
            if (error2) return console.log(error2);
                fetchData(`${API}/categories/${data2?.category?.id}`)
        })
})

