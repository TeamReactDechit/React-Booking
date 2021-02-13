module.exports = (sequelize, DataTypes) => {
    const seats = sequelize.define('Seats', {
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true
        },
        number : {
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        location_id : {
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        created_at : {
            allowNull: true,
            type: DataTypes.DATE,
        },
        updated_at : {
            allowNull: true,
            type: DataTypes.DATE,
        }
        
    }, 
    {
        tableName: 'seats',
        underscored: true
    });
    seats.associate = function (models) {
        seats.belongsTo(models.Locations,{foreignKey: 'location_id'});
        seats.hasMany(models.Prenotations,{foreignKey: 'seat_id'});
    };
    return seats;
};
