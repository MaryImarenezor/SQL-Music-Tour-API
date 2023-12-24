'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
class Band extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
}
Band.init({
    band_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    band_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    band_members: {
        type: DataTypes.INTEGER
    }
}, {
    sequelize,
    modelName: 'Band',
    tableName: 'bands',
    timestamps: false
});
return Band;
};