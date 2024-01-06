'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
class Band extends Model {
//ASSOCIATION DEFINING GOES HERE - One-to-Many relationship where Band is the Parent and MeetGreet is the child
//One-to-many relationship where Band is the parent and SetTimes is the child
    static associate({ Meet_Greet, Set_Time }) {
        Band.hasMany(Meet_Greet, {
            /*
            used to specify which fk it's referring to along with renaming that fk.
            renamed to "meet_greets" so I could include the related MeetGreets when returned.
            */
            foreignKey: 'band_id',
            as: 'meet_greets'
        })
        Band.hasMany(Set_Time, {
            foreignKey: 'band_id',
            as: 'set_times'
        })        
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