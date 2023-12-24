'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('meet_greets', {
      meet_greet_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      event_id_fk: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      band_id_fk: {
        type: Sequelize.INTEGER,
        allowNull: false
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
    await queryInterface.dropTable('meet_greets');
  }
};