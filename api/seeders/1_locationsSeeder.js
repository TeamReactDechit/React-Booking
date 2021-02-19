module.exports = {
  up: (queryInterface, Sequelize) => {
    let locationsData = [];
    for (let j = 1; j <= 6; j++) {
      locationsData.push({
        name: "room_" + j,
        created_at: Date.now(),
        updated_at: Date.now()
      });
    }
  
    return queryInterface.bulkInsert("Locations", locationsData, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Locations", null, {});
  },
};
