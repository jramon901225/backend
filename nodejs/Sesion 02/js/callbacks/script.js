<<<<<<< HEAD
// Una accion que no sabemos cuando terminara exactamente
function irACasa(callback) {
    console.log('camino a casa...');
    console.log('llegue a casa');

    // veamos que es callback
    console.log(callback);
    if (callback !== undefined) {
        callback();
    } else {
        console.log('y no hizo nada');
    }
}

function avisar() {
    console.log('ya llegue');
}

function dormir() {
    console.log('a mimir');
}

// Como irian a casa y luego avisarian?
irACasa(avisar);

// Como dormir y luego ir a casa?
dormir();
irACasa();


    //ejemplo de factory de roles:

    // Recibe una lista de roles, que regresa?
function generateRoleValidator(roles) {
    return (rol) => {
        if (roles.includes(rol)) {
            console.log('autorizado');
        } else {
            console.log('denegado');
        }
    }
}

// function onlyAdmin(rol) {
//     if (['admin'].includes(rol)) {
//         console.log('autorizado');
//     } else {
//         console.log('denegado');
//     }
// }

const onlyAdmin = generateRoleValidator(['admin'])

const onlyUserAndAdmin = generateRoleValidator(['admin', 'user'])

const onlyDesarrolador = generateRoleValidator(['desarrollador'])

onlyUserAndAdmin('user') // autorizado
onlyUserAndAdmin('admin') // autorizado
onlyUserAndAdmin('desarrollador') // denegado

onlyDesarrolador('desarrollador') // autorizado


const usuarios = [
    {
        nombre: 'balan',
        rol: 'admin'
    },
    {
        nombre: 'jairo',
        rol: 'desarrollador'
    },
    {
        nombre: 'marco',
        rol: 'calidad'
    }
]

const roles = usuarios.map(usuario => usuario.rol);

const usuariosValidos = ['admin', 'desarrollador', 'calidad'];
const validateUsers = generateValidator(usuariosValidos);

const productosValidos = ['sabritas', 'switch'];
const validadorDeProductos = generateValidator(productosValidos);


    //Ejemplo de Create File:

    const fs = require('fs');

fs.writeFile('./carpeta/hola.txt', 'Hola Koders', 'utf8', (error) => {
    if (error) { // {error: 'Todo salio mal'} | false | undefined
        console.error(error)
    } else {
        console.log('Se creo el archivo correctamente');
    }
});

    // Ejemplo de Callbacks

function construir(muro, callback) {
    console.log('construyendo...');

    setTimeout(() => {
        muro.construido = true; // te voy a ejecutar, hasta que pasen 0.5s
        callback(muro);
    }, 500)
}

function aplanar(muro, callback) {
    console.log('status del muro: ', muro);
    console.log('aplanando...');

    setTimeout(() => {
        muro.aplanado = true; // te voy a ejecutar, hasta que pasen 0.5s
        callback(muro);
    }, 200)
}

function pintar(muro, callback) {
    console.log('status del muro: ', muro);
    console.log('pintando...');

    setTimeout(() => {
        muro.pintado = true; // te voy a ejecutar, hasta que pasen 0.5s
        callback(muro)
    }, 100)
}

const muro = {
    construido: false,
    aplanado: false,
    pintado: false
};

construir(muro, (muroConstruido) => { // funcion flecha 1
    aplanar(muroConstruido, (muroAplanado) => { //funcion flecha 2
        pintar(muroAplanado, (muroPintado) => { // funcion flecha 3
            console.log(muroPintado);
            console.log('Se termino el muro!');
        });
    });
});
// const muroAplanado = aplanar(muroConstruido);
// const muroPintado = pintar(muroAplanado);

    //Ejemplo de CRUD

    const fs = require('fs');

    function crearArchivo(nombre, contenido) {
        fs.writeFile(nombre, contenido, 'utf8', (error) => {
            if (error) { // {error: 'Todo salio mal'} | false | undefined
                console.error(error)
            } else {
                console.log('Se creo el archivo correctamente');
            }
        });
    }
    
    function borrar() {
    
    }
    
    function editar() {
    
    }
    
    function leer() {
    
    }
    
    
=======
// Una accion que no sabemos cuando terminara exactamente
function irACasa(callback) {
    console.log('camino a casa...');
    console.log('llegue a casa');

    // veamos que es callback
    console.log(callback);
    if (callback !== undefined) {
        callback();
    } else {
        console.log('y no hizo nada');
    }
}

function avisar() {
    console.log('ya llegue');
}

function dormir() {
    console.log('a mimir');
}

// Como irian a casa y luego avisarian?
irACasa(avisar);

// Como dormir y luego ir a casa?
dormir();
irACasa();


    //ejemplo de factory de roles:

    // Recibe una lista de roles, que regresa?
function generateRoleValidator(roles) {
    return (rol) => {
        if (roles.includes(rol)) {
            console.log('autorizado');
        } else {
            console.log('denegado');
        }
    }
}

// function onlyAdmin(rol) {
//     if (['admin'].includes(rol)) {
//         console.log('autorizado');
//     } else {
//         console.log('denegado');
//     }
// }

const onlyAdmin = generateRoleValidator(['admin'])

const onlyUserAndAdmin = generateRoleValidator(['admin', 'user'])

const onlyDesarrolador = generateRoleValidator(['desarrollador'])

onlyUserAndAdmin('user') // autorizado
onlyUserAndAdmin('admin') // autorizado
onlyUserAndAdmin('desarrollador') // denegado

onlyDesarrolador('desarrollador') // autorizado


const usuarios = [
    {
        nombre: 'balan',
        rol: 'admin'
    },
    {
        nombre: 'jairo',
        rol: 'desarrollador'
    },
    {
        nombre: 'marco',
        rol: 'calidad'
    }
]

const roles = usuarios.map(usuario => usuario.rol);

const usuariosValidos = ['admin', 'desarrollador', 'calidad'];
const validateUsers = generateValidator(usuariosValidos);

const productosValidos = ['sabritas', 'switch'];
const validadorDeProductos = generateValidator(productosValidos);


    //Ejemplo de Create File:

    const fs = require('fs');

fs.writeFile('./carpeta/hola.txt', 'Hola Koders', 'utf8', (error) => {
    if (error) { // {error: 'Todo salio mal'} | false | undefined
        console.error(error)
    } else {
        console.log('Se creo el archivo correctamente');
    }
});

    // Ejemplo de Callbacks

function construir(muro, callback) {
    console.log('construyendo...');

    setTimeout(() => {
        muro.construido = true; // te voy a ejecutar, hasta que pasen 0.5s
        callback(muro);
    }, 500)
}

function aplanar(muro, callback) {
    console.log('status del muro: ', muro);
    console.log('aplanando...');

    setTimeout(() => {
        muro.aplanado = true; // te voy a ejecutar, hasta que pasen 0.5s
        callback(muro);
    }, 200)
}

function pintar(muro, callback) {
    console.log('status del muro: ', muro);
    console.log('pintando...');

    setTimeout(() => {
        muro.pintado = true; // te voy a ejecutar, hasta que pasen 0.5s
        callback(muro)
    }, 100)
}

const muro = {
    construido: false,
    aplanado: false,
    pintado: false
};

construir(muro, (muroConstruido) => { // funcion flecha 1
    aplanar(muroConstruido, (muroAplanado) => { //funcion flecha 2
        pintar(muroAplanado, (muroPintado) => { // funcion flecha 3
            console.log(muroPintado);
            console.log('Se termino el muro!');
        });
    });
});
// const muroAplanado = aplanar(muroConstruido);
// const muroPintado = pintar(muroAplanado);

    //Ejemplo de CRUD

    const fs = require('fs');

    function crearArchivo(nombre, contenido) {
        fs.writeFile(nombre, contenido, 'utf8', (error) => {
            if (error) { // {error: 'Todo salio mal'} | false | undefined
                console.error(error)
            } else {
                console.log('Se creo el archivo correctamente');
            }
        });
    }
    
    function borrar() {
    
    }
    
    function editar() {
    
    }
    
    function leer() {
    
    }
    
    
>>>>>>> fe3b69a27110ce41853c10b7240c50f7ddfd51f8
    crearArchivo('ejercicio.txt', 'Este sera su ejercicio de manana')