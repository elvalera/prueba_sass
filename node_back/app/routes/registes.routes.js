const cedes = require("../controllers/cedes.controllers");
module.exports = (app) => {
  var router = require("express").Router();

  // auth User
  router.post("/crete/cuidad", cedes.createCiudad);
  
};
