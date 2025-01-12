'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('click_data', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      trackingId: {
        type: Sequelize.STRING,
        allowNull:false
      },
      gclid: {
        type: Sequelize.STRING,
        unique:true,
        allowNull:false
      },
      ipAdress: {
        type: Sequelize.STRING,
        allowNull:false
      },
      userAgent: {
        type: Sequelize.STRING
      },
      referrer: {
        type: Sequelize.STRING
      },
      timestamp: {
        type:Sequelize.DATE,
        allowNull:false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('click_data');
  }
};