'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('stage_events', {
      stage_event_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      stage_id_pk: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      event_id_pk: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      stage_event_name: {
        type: Sequelize.STRING
      },
      stage_event_day: {
        type: Sequelize.INTEGER
      },
      filled: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('stage_events');
  }
};