module.exports = {
  up: (queryInterface, Sequelize) => {
    let seats = [];
    for (let j = 1; j <= 4; j++) {
      seats.push({
        number: j,
        location_id: 1,
        created_at: Date.now(),
        updated_at: Date.now()
      });
    }

    for (let j = 1; j <= 4; j++) {
      seats.push({
        number: j,
        location_id: 2,
        created_at: Date.now(),
        updated_at: Date.now()
      });
    }

    for (let j = 1; j <= 4; j++) {
      seats.push({
        number: j,
        location_id: 3,
        created_at: Date.now(),
        updated_at: Date.now()
      });
    }

    for (let j = 1; j <= 10; j++) {
      seats.push({
        number: j,
        location_id: 4,
        created_at: Date.now(),
        updated_at: Date.now()
      });
    }

    for (let j = 1; j <= 18; j++) {
      seats.push({
        number: j,
        location_id: 5,
        created_at: Date.now(),
        updated_at: Date.now()
      });
    }

    for (let j = 1; j <= 6; j++) {
      seats.push({
        number: j,
        location_id: 6,
        created_at: Date.now(),
        updated_at: Date.now()
      });
    }

    return queryInterface.bulkInsert("Seats", seats, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Seats", null, {});
  },
};
