'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('events', {
      event_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      event_name: {
        type: Sequelize.STRING
      },
      event_day: {
        type: Sequelize.INTEGER
      },
      cancelled: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      filled: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('events');
  }
};