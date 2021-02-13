module.exports = (sequelize, Sequelize) => {
    const prenotations = sequelize.define('Prenotations', {
        id: {
            allowNull: false,
            primaryKey: true,
            type: Sequelize.INTEGER,
            autoIncrement: true
        },
        user_id :{
            allowNull: true,
            type: Sequelize.INTEGER,
        },
        location_id :{
            allowNull: true,
            type: Sequelize.INTEGER,
        },
        seat_id :{
            allowNull: true,
            type: Sequelize.INTEGER,
        },
        start : {
            allowNull: false,
            type: Sequelize.DATE,
        },
        end : {
            allowNull: false,
            type: Sequelize.DATE,
        },
        status : {
            allowNull: false,
            type: Sequelize.STRING,
        },
        created_at : {
            allowNull: false,
            type: Sequelize.DATE,
        },
        updated_at : {
            allowNull: true,
            type: Sequelize.DATE,
        },
        time:{
            allowNull: false,
            type: Sequelize.DATE,
        }
        
    }, 
    {
        tableName: 'prenotations',
        underscored: true
    });
    prenotations.associate = function (models) {
        prenotations.belongsTo(models.Users,{foreignKey: 'user_id'});
        prenotations.belongsTo(models.Locations,{foreignKey: 'location_id'});
        prenotations.belongsTo(models.Seats,{foreignKey: 'seat_id'});
    };
    return prenotations;
};
