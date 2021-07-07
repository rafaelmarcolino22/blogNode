const mongoose = require("mongoose");
const Schema = mongoose.Schema

const Categorias = new Schema({
    name: {
        type: String, 
        required: true
    },

    slug: {
        type: String,
        required: true
    }
})

mongoose.model('categorias', Categorias);

