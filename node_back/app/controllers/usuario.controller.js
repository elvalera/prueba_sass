// const userModel = require("../models/usuario.model");
const db = require("../models");
const userModel = db.usuario;
const { validationResult } = require('express-validator');
const bcrypt = require("bcrypt");

module.exports = {

  createUser : (req, res) => {
    const checkErrors = validationResult(req);
    if (!checkErrors.isEmpty()) return res.status(400).send({message : "Error al crear usuario" , data : checkErrors.mapped('param')} )
    const body = {
      nombre: req.body.nombre,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password , 10),
      sedeId: req.body.sedeId,
      tipoUsuarioId : req.body.typeUser
    };

    // res.send({body: body});

    userModel.create(body)
      .then((result) => {
        res.send({ message: "Usuario creado", data: result });
      })
      .catch((err) => {
        console.log(err);
        res.status(400).send({ message: "Un error inesperado por favor intente de nuevo" });
      });
  },


  updateUser : (req, res) => {
    const checkErrors = validationResult(req);
    if (!checkErrors.isEmpty()) return res.status(400).send({message : "Error al actualizar usuario" , data : checkErrors.mapped('param')} )

    const body = {
      nombre: req.body.nombre,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password , 10),
      sedeId: req.body.sedeId,
      tipoUsuarioId : req.body.typeUser
    };

    // res.send({body: body});

    userModel.update(body , {where : {id : req.body.idUser }})
      .then((result) => {
        res.send({ message: "Usuario creado", data: result });
      })
      .catch((err) => {
        res.status(400).send({ message: "Un error inesperado por favor intente de nuevo" });
      });
  },

  listUser : (req, res) => {
    
    userModel.findAll()
      .then((result) => {
        res.send({ message: "Usuario creado", data: result });
      })
      .catch((err) => {
        res.status(400).send({ message: "Un error inesperado por favor intente de nuevo" });
      });
  },


}