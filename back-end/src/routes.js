const express = require('express');
const OrdersController = require('./controllers/OrdersController');
const routes = express.Router();
const Orders = require('./models/Orders');


function teste() {
    console.log("teste")
}



routes.get('/', (req, res) => res.render("index"));

routes.get('/orders/findall', OrdersController.list)

routes.post('/orders', OrdersController.store)


routes.get('/orders', async (req, res) => {
    const result = await Orders.findAll();
    
    res.render("orders", {results : result});
});



module.exports = routes;