const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Orders = require('../models/Orders');

const connection = new Sequelize(dbConfig);

Orders.init(connection);

module.exports = connection;