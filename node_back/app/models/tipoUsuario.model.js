module.exports = (sequelize, Sequelize) => {
  const TipoUsuario = sequelize.define("tipoUsuario", {
    nombre: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });

  return TipoUsuario;
};
