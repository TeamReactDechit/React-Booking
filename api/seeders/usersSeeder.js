'use strict';

const md5 = require("md5");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users',[{
        name: 'Admin',
        surname: 'Admin',
        email: 'test.admin@test.tst',
        password: md5('admin'),
        birthdate: Date.UTC(1950,0,1),
        role: 'ADMIN',
        created_at: Date.now(),
        updated_at: null
      },{
        name: 'User',
        surname: 'User',
        email: 'test.user@test.tst',
        password: md5('user'),
        birthdate: Date.UTC(1990,2,15),
        role: 'USER',
        created_at: Date.now(),
        updated_at: null
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    await queryInterface.bulkDelete('Users', {
        name: {[Op.in]: ['Admin','User']} }, {});
  }
};
