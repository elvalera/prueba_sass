const usuarioController = require("../controllers/usuario.controller");
const userValidation = require("../middleware/validation/userValidation")
var router = require("express").Router();
module.exports = (app) => {

  router.post("/create", userValidation.validate("createUser"), usuarioController.createUser);  
  router.put("/update", userValidation.validate("updateUser"), usuarioController.updateUser);  
  router.get("/index",  usuarioController.listUser);  
  router.get("/:id" ,  usuarioController.findOneUser);

  app.use("/api/usuarios", router);
  
};
