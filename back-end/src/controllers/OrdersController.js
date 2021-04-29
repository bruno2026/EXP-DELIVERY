const Orders = require('../models/Orders');

module.exports = {
    async list(req, res) {
        const orders = await Orders.findAll();

            return res.json(orders);
    },
    async store(req, res) {
        const {name, price, description, image_uri} = req.body;

        const order = await Orders.create({name, price, description, image_uri});
        
        return res.json(order);
    }
};