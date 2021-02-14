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
            type: DataTypes.INTEGER,
        },
        updated_at : {
            allowNull: true,
            type: DataTypes.INTEGER,
        }
        
    }, 
    {
        tableName: 'locations',
        timestamps: false,
        underscored: true
    });
    locations.associate = function (models) {
        locations.hasMany(models.Seats,{foreignKey: 'location_id'});
        locations.hasMany(models.Prenotations,{foreignKey: 'location_id'});
    };
    return locations;
};
