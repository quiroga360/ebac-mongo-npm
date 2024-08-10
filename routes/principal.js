// importar express
const express = require('express');

// criar router
const router = express.Router();

// especificar o que o router faz (qual verbo http vai responder)
router.get('/', (_, res) => { 
    res.send('Olá mundo!');
});

// exportar módulo
module.exports = router;