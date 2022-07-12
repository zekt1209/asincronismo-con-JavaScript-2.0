const promise = new Promise(function (resolve, reject) {
    resolve('Hey!');
});

// Ejemplo con promesas, saber si tenemos las suficientes vacas

const cows = 15;

const countCows = new Promise (function (resolve, reject) {
    if (cows > 10) {
        resolve(`We have ${cows} cows on the farm`);
    } else {
        reject(`There are no cows on the darm`);
    }
});

countCows.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log('Finally');
});


// Ejemplo con promises y objetos:
// imprimir los nombres de personas mayores de edad y decir quienes son menores de edad.


const personas = [
    {
        'nombre': 'Carlos',
        'edad': '30',
        'country': 'Mexico',
    },
    {
        'nombre': 'Paty',
        'edad': '26',
        'country': 'Mexico',
    },
    {
        'nombre': 'Paulina',
        'edad': '29',
        'country': 'Colombia',
    },
    {
        'nombre': 'Rubi',
        'edad': '17',
        'country': 'Ecuador',
    },
];

const countPeople = new Promise((resolve, reject) => {
    let personasAceptadas = [];
    let personasNoAceptadas = [];

    personas.forEach(element => {
        if (parseInt(element.edad) < 18) {
            personasNoAceptadas.push(element.nombre);
        } else {
            personasAceptadas.push(element.nombre);
        }
    });

        let nombresNoAceptados = personasNoAceptadas.join(', ');
        let nombresAceptados = personasAceptadas.join(', ');

        resolve(`SI pueden entrar: ${nombresAceptados}, NO pueden entrar: ${nombresNoAceptados}`);
        reject(`Hey. algo salio mal! `);
});

countPeople.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error);
});