// importar express
const express = require('express');

// importar schema
const { Pedido } = require('../models');

// criar router
const router = express.Router();

// especificar o que o router faz
router.get('/', (_, res) => {

    Pedido.find({}).then((pedidos) => {

        res.render('pedidos/index', {
            nomeDoUsuario: "Carmella Rose",
            pedidos: pedidos,
        });

    });

});

// exportar módulo
module.exports = router;