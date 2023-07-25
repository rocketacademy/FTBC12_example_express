"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert("student_addresses", [
      {
        address: "45 Island Ave",
        student_id: 1,
        phone_number: "99999999",
      },
      {
        address: "CWB 55 Victoria Road",
        student_id: 2,
        phone_number: "99099999",
      },
      {
        address: "Novena, Near the TB out patient",
        student_id: 3,
        phone_number: "99999990",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("student_addresses", null, {});
  },
};
