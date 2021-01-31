const usuarioController = require("../controllers/usuario.controller");
const userValidation = require("../middleware/validation/userValidation")
var router = require("express").Router();
module.exports = (app) => {

  router.post("/create", userValidation.validate("createUser"), usuarioController.createUser);  
  router.put("/update", userValidation.validate("updateUser"), usuarioController.updateUser);  
  router.get("/list",  usuarioController.listUser);  

  app.use("/api/usuario", router);
  
};
