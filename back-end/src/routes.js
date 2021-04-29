const express = require('express');
const OrdersController = require('./controllers/OrdersController');

const routes = express.Router();

routes.get('/orders', OrdersController.list);

routes.post('/orders',OrdersController.store);
    

module.exports = routes;