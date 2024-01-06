'use strict';
const {  Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
//ASSOCIATION DEFINING GOES HERE - Many-to-Many relationship between Event and Stage
//One-to-many relationship where Event is the parent and MeetGreets is the child
//One-to-many relationship where Event is the parent and the SetTimes is the child
    static associate({ Stage, Stage_Event, Meet_Greet, Set_Time }) {
      Event.belongsToMany(Stage, {
        foreignKey: 'event_id',
        as: 'stages',
        through: Stage_Event
      })
      /*Event.belongsToMany(Meet_Greet, {
        foreignKey: 'event_id_fk',
        as: 'meet_greets'
      }) */
      /*Event.belongsToMany(Set_Time, {
        foreignKey: 'event_id_pk',
        as: 'set_times'
      })*/    
    }
  }
  Event.init({
    event_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    event_name: {
      type: DataTypes.STRING
    },
    event_day: {
      type: DataTypes.INTEGER
    },
    cancelled: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    filled: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Event',
    tableName: 'events',
    timestamps: false
  });
  return Event;
};