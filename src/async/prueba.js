const personas = [
    {
    nombre: 'Victor',
    age: 22
    },
    {
    nombre: 'Elizabeth',
    age: 23
    },
    {
    nombre: 'Marco',
    age: 19
    },
];


personas[0].age = 23;
personas.push({nombre: 'Juan Perez', age: 32});


console.log(personas);