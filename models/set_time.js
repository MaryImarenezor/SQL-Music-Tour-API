'use strict';
const {  Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Set_Time extends Model {
//ASSOCIATION DEFINEMENT GOES HERE - One-to-many relationship where Band is the parent and SetTimes is the child
//One-to-many relationship where Event is the parent and the SetTimes is the child
//One-to-many relationship where Stage is the parent and SetTimes is the child
    static associate({ Band, Event, Stage }) {
      Set_Time.belongsTo(Band, {
        foreignKey: 'band_id',
        as: 'band'
      })
      Set_Time.belongsTo(Event, {
        foreignKey: 'event_id',
        as: 'event'
      })    
      Set_Time.belongsTo(Stage, {
        foreignKey: 'stage_id',
        as: 'stage'
      })        
    }
  }
  Set_Time.init({
    set_time_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    event_id_pk: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    stage_id_pk: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    set_time_hour: {
      type: DataTypes.INTEGER
    },
    cancelled: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Set_Time',
    tableName: 'set_times',
    timestamps: false
  });
  return Set_Time;
};