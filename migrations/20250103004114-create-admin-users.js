'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('admin_users', {
      id: {
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false 
      },
      email: {
        type:Sequelize.STRING,
        unique:true,
        allowNull:false
      },
      username: {
        type:Sequelize.STRING,
        allowNull:false
      },
      password: {
        type:Sequelize.STRING,
        allowNull:false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      }
  });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('admin_users');
  }
};
