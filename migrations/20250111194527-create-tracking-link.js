'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TrackingLinks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      trackingId: {
        type: Sequelize.STRING,
        allowNull:false,
        unique:true
      },
      destinationUrl: {
        type: Sequelize.TEXT        
      },
      campaignId: {
        type: Sequelize.STRING
      },
      source: {
        type: Sequelize.STRING
      },
      medium: {
        type: Sequelize.STRING
      },
      customParams: {
        type: Sequelize.JSON
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
    await queryInterface.dropTable('tracking_links');
  }
};