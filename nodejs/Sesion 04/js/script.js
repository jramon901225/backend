const fs = require('fs')

  // Funcion Update

function editar(archivo, nuevoContenido) {
    const fs = Require('fs') 
    fs.appendFile(archivo, nuevoContenido, (err) => {
        if(err){
            console.log('error al editor el archivo')
        }else{
            console.log(`${nuevoContenido} ha sido agregado a ${archivo}`)
        }

} )
}
editar()

    // funcion Read

    function leer(archivo) {
        fs.readFile(archivo, 'utf-8', (err, data) => {
            if(err){
                console.log('error al leer el archivo')
            }else{
                console.log(data)
            }
        })
    
    }

    leer() 
  // Funcion Delete

    function borrar(archivo) {
        fs.unlink (archivo, 'utf-8', (err) => {
            if (err) {
                console.log('error')
            } else {
                console.log('archivo eliminado')
            }
        })
    }s

    borrar()
    // funcion create

    function crear(archivo) {
        fs.writeFile (archivo,utf8, 'contenido',(error) => {
            if (error){
                console.log('error')
            } else {
                console.log('archivo creado')
            }
        })
    }

    crear()