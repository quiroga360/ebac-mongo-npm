// importar Schema
const { Schema } = require('mongoose');

const Perfil = new Schema({

    perfil: {
        nome: {
            type: String,
            required: true,
        },
        idade: {
            type: Number,
            required: true,
        }
    }

});

module.exports = Perfil;