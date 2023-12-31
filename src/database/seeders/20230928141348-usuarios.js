"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "Admin",
          surname: "Kitchening",
          email: "admin@gmail.com",
          password:
            "$2a$10$qJuExDMLCE/91ynBq8ToBu9upl0FEmozvSJGcrHoDFiEQiLMs30hm",
          roleId: 1,
          birthday: null,
          createdAt : new Date,
          updatedAt : new Date,
        },
        {
          name: "User",
          surname: "Kitchening",
          email: "user@gmail.com",
          password:
            "$2a$10$qJuExDMLCE/91ynBq8ToBu9upl0FEmozvSJGcrHoDFiEQiLMs30hm",
          roleId: 2,
          birthday: null,
          createdAt : new Date,
          updatedAt : new Date,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
