//const sedeModel = require("./sede.model");

module.exports = (sequelize, Sequelize) => {
  const Ciudad = sequelize.define("ciudad", {
    nombre: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false,
      required: [true, "nombre es requerido"],
    },
  });

  //Ciudad.belongsTo(sedeModel , {sourceKey : "id"});
  
  return Ciudad;
};
