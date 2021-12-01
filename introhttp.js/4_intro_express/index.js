// const express = require('express');

// const app = express(); // Creamos un servidor con express

// const port = 3000;

 
// app.get('/',(req, res) => {
//     const Mesagge = {
//        'mesagge': 'Aqui puedes obtener todos los koders'
//     }
//     res.json(Mesagge)})
// app.post('/',(req, res) => {
//     const Mesagge = {
//         'mesagge': 'Aqui puedes crear todos los koders'
//      }
//     res.json(Mesagge)})     
// app.put('/',(req, res) => {
//     const Mesagge = {
//         'mesagge': 'Aqui puedes modificar todos los koders'
//      }
//     res.json(Mesagge)})
        
// //Aqui se inicia el server o app
// app.listen(port, () => {
//     console.log(`example app listening at http://localhost:${port}`)
// })


// const createDocument = async (name, content) => {
//     try {
//       await fs.writeFile(name, content, encoding)
//       console.log('Archivo creado con exito')
//     } catch (error) {
//       console.log(error)
//     }
//   }



    /*
        Repo Oscar
    */

        const express = require('express')
        const fs = require('fs/promises')
        
        const PORT = 3000
        const ENCODING = 'utf8'
        const KODERS_FILE = 'koders.json'
        
        const app = express()
        // Middleware para convertir request a JSON
        app.use(express.json())
        
        // ROUTES
     
        app.listen(PORT, () => {
            console.log(`Koders API listening at http://localhost:${PORT}`)
        })
        
        // HELPERS
        /*
            Loads KODERS_FILE and returns the koders property value
        */
        function isValidKoder(koder) {
            return koder.nombre && koder.genero
        }
        



        /*
            Reto Delete y GET
        */

                app.get('/koders/:name', async(req, res) => {
                    const koders = await loadKoders()
                    const koderName = req.params.name
                    const getKoder = req?.body

                    // if (!isValidKoder(getKoder)) {
                    //     res.statusCode = 400
                    //     res.end('Please provide a valid Koder name')
                
                    //     return
                    // }

                        const koderFinder = getKoder.forEach((koder) => {
                            if(koder.name === koderName) {
                                koderName = koder.name
                            }
                        })
                    res.json(koderFinder)
                })