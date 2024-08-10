// importar express
const express = require('express');
// importar path para conseguir navegar pelo sistema de arquivos (nativo do node)
const path = require('path');

// importar routers (módulos)
const routerPrincipal = require('./routes/principal');
const routerPedidos = require('./routes/pedidos');

// iniciar aplicação
const app = express();

// definir porta usada pela aplicação (deve ser diferente da porta do banco de dados)
const porta = 3000;

// configurar EJS (vai ter views, path + nome da pasta + views)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// definir que o app use o router
// colocar rotas mais específicas primeiro
app.use('/pedidos', routerPedidos);
app.use('/', routerPrincipal);


// colocar servidor online
app.listen(porta, () => { 
    console.log(`Servidor ouvindo na porta ${porta}.`);    
});  