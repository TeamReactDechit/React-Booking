'use strict';
module.exports = (sequelize, DataTypes) => {
    const prenotations = sequelize.define('Prenotations', {
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true
        },
        user_id :{
            allowNull: true,
            type: DataTypes.INTEGER,
        },
        location_id :{
            allowNull: true,
            type: DataTypes.INTEGER,
        },
        seat_id :{
            allowNull: true,
            type: DataTypes.INTEGER,
        },
        start : {
            allowNull: false,
            type: DataTypes.DATE,
        },
        end : {
            allowNull: false,
            type: DataTypes.DATE,
        },
        status : {
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
        tableName: 'prenotations'
    });
    prenotations.associate = function (models) {
        prenotations.belongsTo(models.Users);
        prenotations.belongsTo(models.Locations);
        prenotations.belongsTo(models.Seats);
    };
    return prenotations;
};
