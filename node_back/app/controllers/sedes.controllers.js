
const { validationResult } = require('express-validator');
const db = require("../models");
const {sede , ciudad} = db;

const Op = db.Sequelize.Op;

module.exports = { 
    
    createCiudad : (req, res) => {
        const checkErrors = validationResult(req);
        if (!checkErrors.isEmpty()) return res.status(200).send({status: false, message : "Error al crear ciudad" , data : checkErrors.mapped('param')} )
        const body = { 
            nombre : req.body.nombre
        }
        ciudad.create(body)
            .then((result) => {
                res.send({status: true, message : "Ciudad Creada" , data: result})
            }).catch((err) => {
                errors = err;
                res.send({status: false, message : errors.errors[0].message, errors: errors})
            });
    },

    updateCiudad : (req, res) => {
        const checkErrors = validationResult(req);
        if (!checkErrors.isEmpty()) return res.status(200).send({status: false, message : "Error al crear ciudad" , data : checkErrors.mapped('param')} )
        const body = { 
            nombre : req.body.nombre
        }
        ciudad.update(body , {where : { id : req.body.idCiudad}})
            .then((result) => {
                res.send({status: true, message : "Ciudad actualizada" , data: result})
            }).catch((err) => {
                res.send({status: false, message : "Un error inesperado por favor intente de nuevo"})
            });
    },

    getCiudad  :(req ,res) => {

        const nombre = req.query.id;
        var condition = nombre && nombre != '' ? { nombre: { [Op.like]: `%${nombre}%` } } : null;

        ciudad.findAll({ where: condition })
        .then((result) => {
            res.send({status: true, message : "Lista de ciudades" , data: result})
        }).catch((err) => {
            res.send({message : "Un error inesperado por favor intente de nuevo"})
        });
    },

    findOneCiudad: (req, res) => {
      const id = req.params.id;

      ciudad.findByPk(id)
        .then((data) => {
          res.send({status: 200, data: data});
        })
        .catch((err) => {
          res.status(400).send({
            message: "No existe la ciudad =" + id,
          });
        });
    },

    listCiudad  :(req ,res) => {

        const nombre = req.query.nombre;
        var condition = nombre && nombre != '' ? { nombre: { [Op.like]: `%${nombre}%` } } : null;

        ciudad.findAll({ where: condition })
        .then((result) => {
            res.send({status: true, message : "Lista de ciudades" , data: result})
        }).catch((err) => {
            res.send({message : "Un error inesperado por favor intente de nuevo"})
        });
    },


    createSede : (req , res) => {
        const checkErrors = validationResult(req);
        if (!checkErrors.isEmpty()) return res.status(200).send({status: false, message : "Error al crear sede" , data : checkErrors.mapped('param')} )

        const body = { 
            nombre : req.body.nombre,
            ciudadId : req.body.idCiudad
        }

        sede.create(body) 
            .then((result) => {
                res.send({status: true, message : "Sede Creada" , data: result})
            }).catch((err) => {
                res.send({status: false, message : "Un error inesperado por favor intente de nuevo"})
            });

    },

    updateSede : (req , res) => {
        const checkErrors = validationResult(req);
        if (!checkErrors.isEmpty()) return res.status(200).send({status: false, message : "Error al crear sede" , data : checkErrors.mapped('param')} )

        const body = { 
            nombre : req.body.nombre,
            ciudadId : req.body.idCiudad
        }

        sede.update(body , {where : { id : req.body.idSede}}) 
            .then((result) => {
                res.send({status: true, message : "Sede actualizada" , data: result})
            }).catch((err) => {
                res.send({status: false, message : "Un error inesperado por favor intente de nuevo"})
            });

    },

    findOneSede: (req, res) => {
      const id = req.params.id;

      sede.findByPk(id)
        .then((data) => {
          res.send({status: 200, data: data});
        })
        .catch((err) => {
          res.status(400).send({
            message: "No existe la sede =" + id,
          });
        });
    },

    listSede : (req , res) => {
        const nombre = req.query.nombre;
        var condition = nombre && nombre != '' ? { nombre: { [Op.like]: `%${nombre}%` } } : null;

        sede.findAll({ where: condition })
        .then((result) => {
            res.send({status: true, message : "Lista de sedes" , data: result})
        }).catch((err) => {
            res.send({status: false, message : "Un error inesperado por favor intente de nuevo"})
        });
    },

}