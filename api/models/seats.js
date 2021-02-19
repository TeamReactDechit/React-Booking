module.exports = (sequelize, DataTypes) => {
    const seats = sequelize.define('Seats', {
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true
        },
        number: {
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        location_id: {
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        created_at: {
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        updated_at: {
            allowNull: true,
            type: DataTypes.INTEGER,
        }
    }, 
    {
        tableName: 'seats',
        timestamps: false,
        underscored: true
    });
    seats.associate = function (models) {
        seats.belongsTo(models.Locations,{foreignKey: 'location_id'});
        seats.hasMany(models.Prenotations,{foreignKey: 'seat_id'});
    };
    return seats;
};
