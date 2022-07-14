import fetch from 'node-fetch'; // El uso de fetch
const API = 'https://api.escuelajs.co/api/v1';  // El URL de nuestra API

const postData = (urlApi, data) => {    // Funcion que se va a encargar de usar fetch y transformarlo al llamado del metodo POST con las configuraciones minimas que podemos agregar y luego retornarlo
    const response = fetch(urlApi, {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response;
};

const data = {      // Data que queremos almacenar
    "title": "420",
    "price": 420,
    "description": "The Magic Number",
    "categoryId": 2,
    "images": ["https://placeimg.com/640/480/any"]
}

postData(`${API}/products`, data) // Podemos utilizar postData como una promesa para poder usar el then
.then(response => response.json())  // Transformamos la respuesta en un objeto JSON
.then(data => console.log(data)) // Mostramos la informacion en la consola

// id: 240
// 242
// 243