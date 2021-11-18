//     //Ejemplo de Create File:

//     const fs = require('fs');

// fs.writeFile('./carpeta/hola.txt', 'Hola Koders', 'utf8', (error) => {
//     if (error) { // {error: 'Todo salio mal'} | false | undefined
//         console.error(error)
//     } else {
//         console.log('Se creo el archivo correctamente');
//     }
// });


   // Usar WriteFile con Async/ await

const fs = require('fs').promises;

async function crearArchivo(nombre,contenido) {
	try{
		await fs.writeFile(nombre, contenido);
		console.log('archivo creado correctamente');
	}	catch (error) {
		console.log(error);
	}
}




// usar Writefile (oscar)

const fs = require('fs/promises');// acceder a metodos que no usan callback sino promises

const encoding = 'utf8';

//ToDo usar async/await
async function crearArchivo(nombre, contenido) {
	const result = await fs.writeFile(nombre, contenido, encoding);
	console.log(result);
	console.log('archivo creado')
}
crearArchivo('manuel', 'hola koders')

// Ejercicio



//Funcion Update
// async function updateFile(archivo, nuevoContenido) {
// 	try {
// 		const result = await fs.appendFile(archivo, nuevoContenido, (error))
// 	console.log(`${nuevoContenido} ha sido agregado a ${archivo}`)
// 	console.log(result)
// 	}
// 	catch {
// 		console.log(error)
// 	}
// }

// updateFile();

// //funcion read 
// async function readFile(archivo) {
// 	if (error) {
// 		console.log('eror')
// 	} else {
// 	const result = await fs.readFile(archivo)
// 	console.log(result) 
// 	}
// }	
// readFile()

// //funcion Delete
// async function borrar (archivo) {
// 	const result = await	fs.unlink (archivo, encoding)
// 	if (error) {
// 		console.log('eror')
// 	} else {
// 		console.log('archivo eliminado')
// 	}
// }
// borrar()

