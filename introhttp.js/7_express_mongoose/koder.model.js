
const mongoose = require('mongoose')

const DB_USER = 'oscar'
const DB_PASSWORD = 'kodemia123'
const DB_HOST = 'cluster0.qwmic.mongodb.net'
const DB_NAME = 'kodemia'

const URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`

const koderSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 2,
        maxlength: 100,
        required: true,
    },
    lastName: {
        type: String,
        minlength: 2,
        maxlength: 100,
        required: true,
    },
    age: {
        type: Number,
        min: 0,
        max: 120,
        required: true,
    },
    gender: {
        type: String,
        required: true,
        maxlength: 1,
        enum: ['m', 'f', 'x'],
    },
})

const Koder = mongoose.model('koder', koderSchema)


//Exportamos el modelo koder
module.exports = Koder