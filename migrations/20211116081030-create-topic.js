"use strict"
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Topics", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      courseId: {
        type: Sequelize.STRING,
        onDelete: "CASCADE",
        references: {
          model: "Courses",
          key: "id",
          as: "courseId"
        }
      },
      name: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Topics")
  }
}
