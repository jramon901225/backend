const express = require('express')
const mongoose = require('mongoose')
const Koder = require('./koder.model')

const URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`


const app = express()

app.get ('/', (req,res) => {
    res.end('endpoint de express')
})

app.get ('/koders', async (req,res) => {
    //cargar los koders
    const koders = await Koder.find({
        age: 12
    })
    res.json(koders)
})

mongoose
    .connect(URL)
    .then(async (connection) => {
        console.log('DB Connected!')
    
    })
    .catch((error) => {
        console.error(error)
    })