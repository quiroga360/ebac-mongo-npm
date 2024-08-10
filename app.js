// importar express
const express = require('express');

// importar routers (módulos)
const routerPrincipal = require('./routes/principal');
const routerPedidos = require('./routes/pedidos');



// iniciar aplicação
const app = express();

// definir porta usada pela aplicação (deve ser diferente da porta do banco de dados)
const porta = 3000;

// definir que o app use o router
// colocar rotas mais específicas primeiro
app.use('/pedidos', routerPedidos);
app.use('/', routerPrincipal);


// colocar servidor online
app.listen(porta, () => { 
    console.log(`Servidor ouvindo na porta ${porta}.`);    
});  