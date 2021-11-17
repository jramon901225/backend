const { rejects } = require("assert")
const { Resolver } = require("dns");
const { seteuid } = require("process");

console.log('Promesas')

//PROMESA: Es algo que se espera, sea cumplido.

// Las promesas pueden tener dos stauts: RESOLVED O REJECTED.

//PENDING: Estado inicial, aun no se sabe su resaultado.

//RESOLVED: Estado de aceptacion, se ejecuto satisfactoriamente.

//REJECTED: Estado de rechazo, aocurrio algun error en la ejecucion.

//crear nueva promesa:

// const promise = new Promise((resolve, reject) => {
//     if(success){
//     resolve(valor)// Pasa la promesa a resuelta y retorna el valor
//     }else {
//     reject('error') // Pasa la promesa rechazada y retorna el error
//     }
// });

// Metodos del objeto Promise:

// Then: Se ejecuta cuando la promesa se resuelve. Recibe lo que pase en la funcion result

// catch: se ejecuta cuando la promesa se rechaza. Recibe lo que manda en la funcion reject.Promise

// promesa
// .then ((result) =>{
//     console.log('Resultado: ', result)
// })
// .catch ((error) => {
//     console.log(error);
// });

        // ejemplo de PROMISE

// function construir(muro) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() =>{
//             muro.construido = true;

//             const error = muro.construido
//             ? null
//             :new Error ('No se pudo construir')

//             if (error) 
//                 reject(error); // Se termina la ejecucion con reject
//             else
//                 resolve(muro);          
//         },1000)
//     })
// }

function aplanar(muro) {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            muro.aplanado = true;

            const error = muro.construido && muro.aplanado
            ? null
            :new Error ('No se pudo construir')

            if (error) 
                reject(error); // Se termina la ejecucion con reject
            else
                resolve(muro);          
        },1000)
    })
}

function pintar(muro) {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            muro.pintado = true;

            const error = muro.aplanado && muro.pintado
            ? null
            :new Error ('No se pudo pintar')

            if (error) 
                reject(error); // Se termina la ejecucion con reject
            else
                resolve(muro);          
        },1000)
    })
}

const muro = {}; //es un objeto
const promesa = construir(muro);

promesa
    .then((muroConstruido) => {
        aplanar(muroConstruido)
        console.log('Muro construido', muroConstruido);

        //Podemos mandar a llamar directamente sin una const
        aplanar(muroConstruido)
            .then((muroAplanado) => { //
              console.log(('Ya se aplano:', muroAplanado));

              pintar((muroAplanado) 
                .then((muroPintado) =>{

                })
                .catch((error) =>{
                    console.error(error);
                    throw error;
                })
                .catch((error) => {
                console.error(error);
            })); 
    })
            .catch((error) => {
                console.error(error);
    });