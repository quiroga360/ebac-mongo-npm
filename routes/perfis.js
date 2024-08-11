// importar o express
const express = require('express');

const { Perfil } = require('../models');

// criar router
const router = express.Router();

// especificar o que o router faz
router.get('/', (_, res) => {


    Perfil.find({nome: "Pablo"}).then((perfil) => { 
        res.render('perfis/index', {perfis: perfil})
    });



})

// exportar módulo
module.exports = router;