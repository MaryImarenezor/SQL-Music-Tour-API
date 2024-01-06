'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Meet_Greet extends Model {
//ASSOCIATION DEFINING GOES HERE - One-to-Many relationship where Band is the Parent and MeetGreet is the child
//One-to-many relationship where Event is the parent and MeetGreets is the child

    static associate({ Band, Event }) {
      Meet_Greet.belongsTo(Band, {
        /*
        used to specify which fk it's referring to along with renaming that fk.
        renamed to "band" so I could include the related Bands when returned.
        */
        foreignKey: 'band_id',
        as: 'band'
      })
      Meet_Greet.belongsTo(Event, {
        foreignKey: 'event_id',
        as: 'event'
      })      
    }
  }
  Meet_Greet.init({
    meet_greet_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    event_id_fk: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    band_id_fk: {
      type: DataTypes.INTEGER,
      allowNull: false
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
    modelName: 'Meet_Greet',
    tableName:'meet_greets',
    timestamps: false
  });
  return Meet_Greet;
};