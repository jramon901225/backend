const express = require('express');

const app = express();

const port = 3000;

 
app.get('/',(req, res) => {
    const Mesagge = {
       'mesagge': 'Aqui puedes obtener todos los koders'
    }
    res.json(Mesagge)})
app.post('/',(req, res) => {
    const Mesagge = {
        'mesagge': 'Aqui puedes crear todos los koders'
     }
    res.json(Mesagge)})   
app.put('/',(req, res) => {
    const Mesagge = {
        'mesagge': 'Aqui puedes modificar todos los koders'
     }
    res.json(Mesagge)})
        
//Aqui se inicia el server o app
app.listen(port, () => {
    console.log(`example app listening at http://localhost:${port}`)
})
