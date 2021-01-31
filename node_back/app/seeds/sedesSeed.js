const db = require("../models");
const sedeModel = db.sede;


module.exports = () => {
    return sedeModel.bulkCreate([{
        nombre : "Sede Principal",
        ciudadId  :1
    }])
}