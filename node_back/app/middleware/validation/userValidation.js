const { check } = require('express-validator');

exports.validate = (method) => {

    switch (method) {
        case 'createUser': {
            return [
                check('nombre')
                    .exists().withMessage("Debe enviar el parametro nombre")
                    .not().isEmpty().withMessage('Debe enviar el nombre de la ciudad')
                    .isString().withMessage("Debe ser un string"),
                check('email')
                    .exists().withMessage("Debe enviar el parametro nombre")
                    .not().isEmpty().withMessage('Debe enviar el email')
                    .isEmail().withMessage("Debe ser un email valido"),
                check('password')
                    .exists().withMessage("Debe enviar el parametro nombre")
                    .not().isEmpty().withMessage('Debe enviar el email')
                    .isString().withMessage("Debe enviar su clave"),
                check('confirmPassword')
                    .exists().withMessage("Debe enviar el parametro nombre")
                    .not().isEmpty().withMessage('Debe enviar el email')
                    .isString().withMessage("Debe enviar su clave")
                    .custom((value, { req }) => {
                        console.log(value !== req.body.password);
                        if (value !== req.body.password) {
                          throw new Error('Contrasena no coinciden');
                        }
                        return true
                    }),
                check('sedeId')
                    .exists().withMessage('Debe enviar el id de sede')
                    .not().isEmpty().withMessage("Debe enviar la sede")
                    .isNumeric().withMessage("Debe enviar ser numerico"),
                check('tipoUsuarioId')
                    .exists().withMessage('Debe enviar el id del tipo de usuario')
                    .not().isEmpty().withMessage("Debe enviar el tipo de usuario")
                    .isNumeric().withMessage("Debe enviar el tipo de usuario"),
            ]
        }

        case 'updateUser': {
            return [
                check('nombre')
                    .exists().withMessage("Debe enviar el parametro nombre")
                    .not().isEmpty().withMessage('Debe enviar el nombre de la ciudad')
                    .isString().withMessage("Debe ser un string"),
                check('email')
                    .exists().withMessage("Debe enviar el parametro nombre")
                    .not().isEmpty().withMessage('Debe enviar el email')
                    .isEmail().withMessage("Debe ser un email valido"),
                check('sedeId')
                        .exists().withMessage('Debe enviar el id de sede')
                        .not().isEmpty().withMessage("Debe enviar la sede")
                        .isNumeric().withMessage("Debe enviar ser numerico"),
                check('idUsuario')
                        .exists().withMessage("Debe enviar el parametro Identificacion de sede")
                        .not().isEmpty().withMessage( 'Debe que sede desea modificar')
                        .isNumeric().withMessage("Debe el identificador del usuario que desa modificar"),
            ]
        }





        default:
            return [
                check("erro")
                    .exists().withMessage("callo en default")
            ]
            break;
    }

}
