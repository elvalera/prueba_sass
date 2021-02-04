const db = require("../models");
const ciudadModel = db.ciudad;


module.exports = () => {
    return ciudadModel.bulkCreate([
    	{ nombre : "Bogotá"},
    	{ nombre : "Cali"},
    	{ nombre : "Medellín"}
    ])
}