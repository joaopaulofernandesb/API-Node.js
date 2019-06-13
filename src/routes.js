const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController')


routes.get('/products', ProductController.index); // exibe informações do bd em json
routes.get('/products/:id', ProductController.show ); // busca por id 
routes.post('/products', ProductController.store); // grava informações
routes.put('/products/:id', ProductController.update); // edita e atualiza
routes.delete('/products/:id', ProductController.destroy); // apaga
routes.get('/products/delet/:id',ProductController.destroy);
module.exports = routes;