'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('set_times', {
      set_time_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      event_id_pk: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      stage_id_pk: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      set_time_hour: {
        type: Sequelize.INTEGER
      },
      cancelled: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('set_times');
  }
};