module.exports = (sequelize, Sequelize) => {
  const Usuario = sequelize.define("usuario", {
    nombre: {
      type: Sequelize.STRING,
      allowNull: false,
			required: [true, "El nombre es requerido"],
    },
    email: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false,
      required: [true, "El correo electrónico es requerido"],
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
      required: [true, "La contraseña es requerida"],
    },
  });

  return Usuario;
};
