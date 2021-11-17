// 1. Haz una función que reciba un arreglo de números y retorne el número más grande en el arreglo. Ejemplo: [1, 4, 3, 5, 2] -> 5
// Nota: No usar: Math.max ni array.prototype.sort

// 2. Haz una función que revierta un String. Ejemplo: 'hola' -> 'aloh'
// Nota: No usar String.reverse

// // 3. Haz una función que divida dos números a y b. Si b = 0 regresa un mensaje de error.
// Ejemplo: 10/2 -> 5
//          6/0 -> 'Error'

    //ejemplo forEach
const resultado1 = forEach([2, 3, 4], val => val * 2);
console.log(resultado1);

const resultado2 = forEach([2, 3, 4], (val) => {
    return 'mucho texto ' + val;
});
console.log(resultado2);

function forEach(arreglo, callback) {
    const resultado = [];

    for (let index = 0; index < arreglo.length; index++) {
        resultado.push(callback(arreglo[index]));
    }

    return resultado;
}

    //Ejercicio para implementar filter

    const arreglo = [2, 3, 4, 5];
const texto = ['a', 'b', 'c'];

// Si el callback retorna verdadero, añade el valor al array de resultado
// Si el callback retorna falso, ignora el valor
function filter(arr, callback) {
    const resultado = [];
    // Su codigo va aqui
    return resultado;
}

// El callback debe de recibir un valor, que sera un elemento del arreglo

const resultado1 = filter(arreglo, x => x % 2 === 0); // [2, 4]
const soloUnos = filter(arreglo, x => x === 1); // [1]