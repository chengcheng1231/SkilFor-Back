"use strict"
const { Model } = require("sequelize")
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //define association here
      Course.belongsTo(models.Teacher, {
        foreignKey: "teacherId",
        onDelete: "CASCADE"
      })
      Course.belongsTo(models.Category, {
        foreignKey: "categoryId",
        onDelete: "CASCADE"
      })
      Course.hasMany(models.Topic, {
        foreignKey: "courseId"
      })
      Course.hasMany(models.Schedule, {
        foreignKey: "courseId"
      })
    }
  }
  Course.init(
    {
      teacherId: DataTypes.INTEGER,
      categoryId: DataTypes.INTEGER,
      fee: DataTypes.INTEGER,
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      show: DataTypes.BOOLEAN,
      qualify: DataTypes.BOOLEAN
    },
    {
      sequelize,
      modelName: "Course"
    }
  )
  return Course
}
