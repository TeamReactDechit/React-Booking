module.exports = {
  up: (queryInterface, Sequelize) => {
    let prenotations = [];

    prenotations.push({
      user_id: 1,
      location_id: 1,
      seat_id: 1,
      date: Date.UTC(2021, 4, 1, 0, 0, 0, 0),
      hour: 9,
      status: "ACTIVE",
      created_at: Date.now(),
      updated_at: Date.now()
    });

    prenotations.push({
      user_id: 1,
      location_id: 1,
      seat_id: 1,
      date: Date.UTC(2021, 4, 1, 0, 0, 0, 0),
      hour: 15,
      status: "ACTIVE",
      created_at: Date.now(),
      updated_at: Date.now()
    });

    prenotations.push({
      user_id: 1,
      location_id: 1,
      seat_id: 4,
      date: Date.UTC(2021, 4, 1, 0, 0, 0, 0),
      hour: 15,
      status: "ACTIVE",
      created_at: Date.now(),
      updated_at: Date.now()
    });

    prenotations.push({
      user_id: 1,
      location_id: 1,
      seat_id: 4,
      date: Date.UTC(2021, 4, 1, 0, 0, 0, 0),
      hour: 10,
      status: "ACTIVE",
      created_at: Date.now(),
      updated_at: Date.now()
    });

    prenotations.push({
      user_id: 1,
      location_id: 2,
      seat_id: 1,
      date: Date.UTC(2021, 4, 1, 0, 0, 0, 0),
      hour: 10,
      status: "ACTIVE",
      created_at: Date.now(),
      updated_at: Date.now()
    });

    prenotations.push({
      user_id: 1,
      location_id: 1,
      seat_id: 1,
      date: Date.UTC(2021, 4, 2, 0, 0, 0, 0),
      hour: 15,
      status: "ACTIVE",
      created_at: Date.now(),
      updated_at: Date.now()
    });

    prenotations.push({
      user_id: 1,
      location_id: 1,
      seat_id: 1,
      date: Date.UTC(2021, 4, 2, 0, 0, 0, 0),
      hour: 9,
      status: "ACTIVE",
      created_at: Date.now(),
      updated_at: Date.now()
    });
    return queryInterface.bulkInsert("Prenotations", prenotations, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Prenotations", null, {});
  },
};
