// const userModel = require("../models/usuario.model");
const db = require("../models");
const userModel = db.usuario;
const { validationResult } = require('express-validator');
const bcrypt = require("bcrypt");

const Op = db.Sequelize.Op;

module.exports = {

  createUser : (req, res) => {

    const checkErrors = validationResult(req);
    if (!checkErrors.isEmpty()) return res.send({status: false, message : "Error al crear usuario" , data : checkErrors.mapped('param')} )
    const body = {
      nombre: req.body.nombre,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password , 10),
      sedeId: req.body.sedeId,
      tipoUsuarioId: req.body.tipoUsuarioId,
    };

    userModel.create(body)
      .then((result) => {
        res.send({ status:true, message: "Usuario creado", data: result });
      })
      .catch((err) => {
        errors = err;
        res.send({status: false, message : errors.errors[0].message, errors: errors})
      });
  },

  updateUser : (req, res) => {
    const checkErrors = validationResult(req);
    if (!checkErrors.isEmpty()) return res.send({status: false, message : "Error al actualizar usuario" , data : checkErrors.mapped('param')} )

    const body = {
      nombre: req.body.nombre,
      email: req.body.email,
      sedeId: req.body.sedeId,
    };

    userModel.update(body , {where : {id : req.body.idUsuario }})
      .then((result) => {
        res.send({ status: true, message: "Usuario actualizado", data: result });
      })
      .catch((err) => {
        errors = err;
        res.send({status: false, message : errors.errors[0].message, errors: errors})
      });
  },

  listUser : (req, res) => {

    const nombre = req.query.nombre;

    var condition = nombre && nombre != '' ? { nombre: { [Op.like]: `%${nombre}%` } } : null;

    userModel.findAll({
      where: condition,
      include : [
          db.sede
      ]
    })
    .then((result) => {
      res.send({ status: true, message: "Lista de usuarios", data: result });
    })
    .catch((err) => {
      res.status(400).send({ message: "Un error inesperado por favor intente de nuevo" });
    });
  },

  findOneUser: (req, res) => {
    const id = req.params.id;

    userModel.findByPk(id)
      .then((data) => {
        res.send({status: 200, data: data});
      })
      .catch((err) => {
        res.status(400).send({
          message: "No existe la sede =" + id,
        });
      });
  },

}