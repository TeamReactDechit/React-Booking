module.exports = (sequelize, DataTypes) => {
    const users = sequelize.define('Users', {
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.INTEGER,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: 'Column name cannot be empty'
                },
                len: {
                    args: [6, 255],
                    msg: 'Name length must be between 6 and 255'
                }
            }
        },
        surname: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: 'Column surname cannot be empty'
                },
                len: {
                    args: [6, 255],
                    msg: 'Surname length must be between 6 and 255'
                }
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: {
                args: true,
                msg: 'Email already taken!'
            },
            validate: {
                notEmpty: {
                    msg: 'Column name cannot be empty'
                },
                isEmail: {
                    msg: 'Please add a valid email'
                }
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: 'Column name cannot be empty'
                },
                len: {
                    args: [6, 255],
                    msg: 'Name length must be between 6 and 255'
                }
            }
        },
        birthdate : {
            allowNull: true,
            type: DataTypes.DATE,
        },
        type:{
            allowNull: false,
            type: DataTypes.STRING,
        }
    }, {
        /*
      hooks :{
        beforeCreate(users) {
          users.password = bc.hashSync(users.password, 12)
        }
      },*/
        tableName: 'users',
        timestamps: false,
        underscored: true
    });
    users.associate = function (models) {
        users.hasMany(models.Prenotations,{foreignKey: 'user_id'});
    };
    return users;
};
