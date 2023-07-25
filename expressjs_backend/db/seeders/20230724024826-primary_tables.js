"use strict";

const { query } = require("express");

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
    await queryInterface.bulkInsert("students", [
      {
        first_name: "Sam",
        last_name: "O",
        age: 31,
        current_course: "Introduction to machine learning",
      },
      {
        first_name: "Foong",
        last_name: "Leung",
        age: 33,
        current_course: "Introduction to data science",
      },
      {
        first_name: "Jill",
        last_name: "Goh",
        age: 18,
        current_course: "Introduction to Python",
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
    await queryInterface.bulkDelete("students", null, {});
  },
};
