const { Model, DataTypes } = require('sequelize');

class Orders extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            price: DataTypes.DOUBLE,
            description: DataTypes.STRING,
            image_uri: DataTypes.STRING,
        },{
            sequelize
        })
    }
}

module.exports = Orders;