const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);
db.ciudad = require("./ciudad.model.js")(sequelize, Sequelize);
db.sede = require("./sede.model.js")(sequelize, Sequelize);
db.tipoUsuario = require("./tipoUsuario.model.js")(sequelize, Sequelize);
db.usuario = require("./usuario.model.js")(sequelize, Sequelize);

db.sede.belongsTo(db.ciudad , {foreignKey: {allowNull: false }})
db.ciudad.hasMany(db.sede );

db.usuario.belongsTo(db.sede , {foreignKey: {allowNull: false }})
db.sede.hasMany(db.usuario );

db.usuario.belongsTo(db.tipoUsuario , {foreignKey: {allowNull: false }})
db.tipoUsuario.hasMany(db.usuario );


module.exports = db;