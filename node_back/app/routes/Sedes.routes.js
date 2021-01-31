const sedes = require("../controllers/sedes.controllers");
const tokenMiddleware = require("../middleware/tokenmiddleware")
const sedeValidation = require("../middleware/validation/sedesValidation")
module.exports = (app) => {
  var router = require("express").Router();

  // auth User
  router.post("/ciudad/create", tokenMiddleware(1), sedeValidation.validate("createCiudad"), sedes.createCiudad);
  router.put("/ciudad/update", tokenMiddleware(1), sedeValidation.validate("updateCiudad"), sedes.updateCiudad);
  router.get("/ciudad/index", tokenMiddleware(1), sedes.listCiudad);
  router.get("/ciudad/:id" ,  sedes.findOneCiudad);

  router.post("/sede/create" , sedeValidation.validate("createSede"), sedes.createSede);
  router.put("/sede/update" , sedeValidation.validate("updateSede"), sedes.updateSede);
  router.get("/sede/index" ,  sedes.listSede);
  router.get("/sede/:id" ,  sedes.findOneSede);

  app.use("/api", router);
  
};
