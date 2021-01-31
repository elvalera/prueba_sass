const db = require("../models");
const tipoUsuarioModel = db.tipoUsuario;
const bcrypt = require('bcrypt')

module.exports = () => {
    return tipoUsuarioModel.bulkCreate([
    	{ nombre : "Administrador"},
    	{ nombre : "Analista"}
    ])
}