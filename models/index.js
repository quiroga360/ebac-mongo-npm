// importar o mongoose
const mongoose = require('mongoose');

// importar Schemas
const PedidoSchema = require('./pedido');
const PerfilSchema = require('./perfil');

// criar conexão dos schemas
const Pedido = mongoose.model('Pedido', PedidoSchema);
const Perfil = mongoose.model('Perfil', PerfilSchema);

// função que executa a conexão com o Mongo a partir de uma URL
const connect = () => {
    mongoose.connect('mongodb://localhost:27017/ebacpizza');
};

// exportar a função connect e conexão dos schemas
module.exports = {
    connect,
    Pedido,
    Perfil,
}