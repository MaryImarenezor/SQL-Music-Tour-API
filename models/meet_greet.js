'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Meet_Greet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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