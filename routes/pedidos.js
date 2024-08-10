// importar express
const express = require('express');

// criar router
const router = express.Router();

// especificar o que o router faz
router.get('/', (_, res) => {
    res.render('pedidos/index',{
        nomeDoUsuario: "Carmella Rose"
    });
});

// exportar módulo
module.exports = router;