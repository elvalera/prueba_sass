const AuthController = require("../controllers/auth.controller.js");
var router = require("express").Router();
module.exports = (app) => {
  
  
    // auth User
    router.post("/", AuthController.login);
  
    app.use("/api/login", router);
  };
  