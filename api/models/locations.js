'use strict';
module.exports = (sequelize, DataTypes) => {
    const locations = sequelize.define('Locations', {
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true
        },
        name : {
            allowNull: false,
            type: DataTypes.STRING,
        },
        created_at : {
            allowNull: false,
            type: DataTypes.DATE,
        },
        updated_at : {
            allowNull: true,
            type: DataTypes.DATE,
        }
        
    }, 
    {
        tableName: 'locations'
    });
    locations.associate = function (models) {
        locations.hasMany(models.Seats);
        locations.hasMany(models.Prenotations);
    };
    return locations;
};
