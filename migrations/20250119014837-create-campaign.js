'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Campaigns', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      campaignid: {

        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      name: {
        type: Sequelize.STRING,
        allowNull:false
      },
      goal: {
        type: Sequelize.STRING
      },
      audience: {
        type: Sequelize.STRING
      },
      platform: {
        allowNull:false,
        type: Sequelize.JSON,
      },
      budget: {
        allowNull:false,
        type: Sequelize.DECIMAL
      },
      biddingstrategyid: {
        allowNull:false,
        type: Sequelize.BIGINT
      },
      target: {
        allowNull:false,
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
    await queryInterface.dropTable('Campaigns');
  }
};