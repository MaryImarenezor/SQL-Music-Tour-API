'use strict';
const {  Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Stage extends Model {
//ASSOCIATION DEFINING GOES HERE - Many-to-Many relationship between Event and Stage
//One-to-many relationship where Stage is the parent and SetTimes is the child
    static associate({ Event, Stage_Event, Set_Time }) {
      Stage.belongsToMany(Event, {
        foreignKey: 'stage_id',
        as: 'events',
        through: Stage_Event
      })
      /*Stage.belongsToMany(Set_Time, {
        foreignKey: 'stage_id_pk',
        as: 'set_times'
      })*/
    }
  }
  Stage.init({
    stage_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    stage_capacity: {
      type: DataTypes.INTEGER
    },
    filled: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Stage',
    tableName: 'stages',
    timestamps: false
  });
  return Stage;
};