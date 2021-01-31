'use strict';
const Ciudad = require("./ciudad.model");
module.exports = (sequelize, Sequelize) => {
  const Sede = sequelize.define("sede", {
    nombre: {
      type: Sequelize.STRING,
      allowNull: false,
      required: [true, "nombre es requerido"],
      defaultValue: false,
    },
   

  });
   

 

  return Sede;
};
