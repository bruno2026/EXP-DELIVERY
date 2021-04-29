'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     return queryInterface.createTable('orders', { 
       id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
       },
       name: {
         type: Sequelize.STRING,
         allowNull: false,
       },
       price: {
         type: Sequelize.DOUBLE,
         allowNull: false,
       },
       description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      image_uri: {
        type: Sequelize.STRING,
        allowNull: false,
      },
       created_at: {
         type: Sequelize.DATE,
         allowNull: false,
       },
       updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('orders');
  }
};
