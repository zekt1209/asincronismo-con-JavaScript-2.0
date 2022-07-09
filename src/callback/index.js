// Funcion de suma de 2 numeros
const sum = (num1, num2) => {
return num1 + num2;
};

// Funcion de multiplicacion de 2 numeros
const multiply = (num1, num2) => {
    return num1 * num2;
};


// Ejecutando la funcion callback con suma y multiplicacion
console.log(`Suma de 2 numeros: ${calc(3, 2, sum)}`);
console.log(`Multiplicacion de 2 numeros: ${calc(5, 5, multiply)}`);




// setTimeout()
// Recibe una funcion, parametros y el tiempo que va a tardar en ejecutarse

// setTimeout con funcion anonima
setTimeout(() => {
    console.log(`Hola JavaScript`);
}, 2000);


// setTimeout con funcion definida
const greeting = (name) => {
    console.log(`Hola ${name}, Bienvenido!`);
};

setTimeout(greeting, 2000, 'Victor'); // Recibe como parametros: (funcion, tiempo que tardara en ejecutarse, parametros que necesita la funcion)







// EJEMPLO DE CALLBACK
const calc = (num1, num2, callback) => {
return callback(num1, num2);
};

const calculo = (num1, num2, callback, callback2) => {
    console.log(`Los resultados de las operaciones son: Suma: ${callback(num1, num2)}, 
    Multiplicacion: ${callback2(num1, num2)}`);
    return sum, multiply;
};

console.log(calculo(3, 5, sum, multiply));