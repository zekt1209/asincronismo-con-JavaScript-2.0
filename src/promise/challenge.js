import fetch from 'node-fetch'; // Importamos a fetch
const API = 'https://api.escuelajs.co/api/v1'; // Declaramos la variable con la url de la API

// Funcion de fetch
const fetchData = (urlApi) => {
    return fetch(urlApi);
};

// Hacemos el llamado de la funcion fetch utilizando promesas, no iniciamos la estructura de promesa porque el metodo fetch ya lo trae integrado y sabe que usa promesas
// fetchData(`${API}/products`)
//     .then(response => response.json())
//     .then(products => {
//         console.log(products);
//     })
//     .then(() => {
//         console.log('Hola')
//     })
//     .catch(error => console.log(error))


// Hacemos el llamado a la funcion fetch utilizando promesas
fetchData(`${API}/products`)
    .then(response => response.json())
    .then(products => {
        console.log(products);
        return fetchData(`${API}/products/${products[0].id}`)
    })
    .then(response => response.json())
    .then(product => {
        console.log(product.title);
        return fetchData(`${API}/categories/${product.category.id}`)
    })
    .then(response => response.json())
    .then(category => {
        console.log(category.name);
    })
    .catch(err => console.log(err))
    .finally(() => console.log('Finally'));