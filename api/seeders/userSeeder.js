'use strict';

const md5 = require("md5");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users',[{
        name: 'Gianmarco',
        surname: 'Scaletta',
        email: 'gian.scal@test.it',
        password: md5('test'),
        birthdate: Date.UTC(1989,2,16),
        role: 'ADMIN',
        created_at: Date.now(),
        updated_at: Date.now()
      },{
        name: 'Marco',
        surname: 'Decarlo',
        email: 'marco.deca@test.it',
        password: md5('pass'),
        birthdate: Date.UTC(1990,2,10),
        role: 'USER',
        created_at: Date.now(),
        updated_at: Date.now()
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    await queryInterface.bulkDelete('Users', {
        name: {[Op.in]: ['Gianmarco','Marco']} }, {});
  }
};
