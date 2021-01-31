const db = require("../models");
const userModel = db.usuario;
const bcrypt = require('bcrypt')

module.exports = () => {
    return userModel.bulkCreate([{
        nombre : "Elvis Valera",
        email : "elvis.tecno@gmail.com",
        password : bcrypt.hashSync("123" , 10),
        sedeId : 1,
        tipoUsuarioId : 1
    }])
}