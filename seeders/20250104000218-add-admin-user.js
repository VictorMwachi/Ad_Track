'use strict';
const bcrypt = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const hashedPassword = await bcrypt.hash('ad_track254',10)
    await queryInterface.bulkInsert('admin_users', [{
     username: 'victor',
     password:hashedPassword,
     email:'mudakizevictor@gmail.com',
     created_at:new Date(),
     updated_at:new Date()
     }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('admin_users', null, {});
  }
};
