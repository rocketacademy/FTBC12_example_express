"use strict";

const { Model } = require("sequelize");
const students = require("./students");
module.exports = (sequelize, DataTypes) => {
  class Students_Addresses extends Model {}
  // Students_Addresses.belongsTo("students");
  Students_Addresses.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      address: {
        type: DataTypes.STRING,
      },
      student_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "students",
          key: "id",
        },
      },
      // createdAt: {
      //   type: DataTypes.DATE,
      //   allowNull: false,
      //   defaultValue: new Date(),
      // },
      // updatedAt: {
      //   type: DataTypes.DATE,
      //   allowNull: false,
      //   defaultValue: new Date(),
      // },
    },
    {
      sequelize,
      modelName: "student_addresses",
      underscored: true,
      timestamps: false,
    }
  );
  return Students_Addresses;
};
