// const userModel = require("../models/usuario.model");
const db = require("../models");
const userModel = db.usuario;
// const Op = db.Sequelize.Op;

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// module.exports = {

//     login : (req, res) => {

exports.login = async (req, res) => {
  console.log(req.body.email);

  var salt = await bcrypt.genSalt(10);
  pass = bcrypt.hashSync(req.body.password, salt);
  console.log(pass);

  userModel.findOne({ where: { email: req.body.email } })
    .then((result) => {
      result = result.get({ plain: true });
      if (bcrypt.compareSync(req.body.password, result.password)) {
      // if (1 == 1) {
        const token = jwt.sign({ name: result.nombre , email : result.email , rol : result.tipoUsuarioId }, "prueba");

        const data = {
          token: token
        }

        res.send({ data, status: true, message: "Cuenta iniciada" });
      } else {
        res.status(200).send({ status: false, message: "Usuario o contraseña incorrecta" });
      }
    })
    .catch((err) => {
      res.status(200).send({ status: false, message: "Usuario o contraseña incorrecta..." });
    });
};
