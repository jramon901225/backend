//Plantilla de Levantar Server

const http = require('http')

const port = 8080

// Creamor un servidor, usando createServer
const server = http.createServer((request, response) => {

    const metodo = request.method
    console.log(metodo)

    const url = request.url
    console.log(`URL: ${url} `)
    // le definimos un todo el header, con writeHead
    // response.writeHead(200, {})
    response.statusCode = 202
    response.setHeader('Content-Type', 'text/json')

    // response.write('Hello World!')
    response.end('{"hola": "a todos"}')
})

// arrancamos el servidor
server.listen(port, () => {
    console.log(`El servidor arranco en el puerto ${port}`)
})


// Ejemplo Hecho por Manu

const http = require('http')

const port = 8080

// Creamor un servidor, usando createServer
const server = http.createServer((request, response) => {
    
    const metodo = request.method 
   
    if(metodo === 'GET') {
        response.end('aqui estan todos los koders')
    }else if (metodo === 'POST') {
        response.end('aqui puede crear koders')
    }else {
        response.end("no se que hacer aiuda")
    }
})

const respuesta = JSON.stringify(mensaje)
response.write(respuesta) // enviar response al cliente

// arrancamos el servidor
server.listen(port, () => {
    console.log(`El servidor arranco en el puerto ${port}`)
})




// Ejemplo de Oscar

const http = require('http')

const port = 8080

const server = http.createServer((request, response) => {
    const metodo = request.method
    const url = request.url

    response.setHeader('Content-Type', 'text/json')
    response.statusCode = 200

    const mensaje = {
        message: '',
    }

    if (metodo === 'GET' && url === '/koders') {
        mensaje.message = 'Aquí están todos los koders'
    } else if (metodo === 'POST' && url === '/koders') {
        mensaje.message = 'Aquí puedes crear koders'
    } else {
        response.statusCode = 400
        mensaje.message = 'No se que hacer, aiuda'
    }

    const respuesta = JSON.stringify(mensaje) // convertir mensaje a JSON
    console.log(respuesta)

    response.write(respuesta) // response.write('{"message": "Aqui estan todos los koders"}')
    response.end()
})

// arrancamos el servidor
server.listen(port, () => {
    console.log(`El servidor arranco en el puerto ${port}`)
})