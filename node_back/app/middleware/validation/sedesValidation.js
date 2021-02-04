const { check } = require('express-validator');

exports.validate = (method) => { 
    
    switch (method) {
        case 'createCiudad':{
            return [
                check('nombre')
                        .exists().withMessage("Debe enviar el parametro nombre")
                        .not().isEmpty().withMessage( 'Debe enviar el nombre de la ciudad')
                        .isString().withMessage("Debe ser un string")
            ]
        }
        case 'updateCiudad':{
            return [
                check('nombre')
                        .exists().withMessage("Debe enviar el parametro nombre")
                        .not().isEmpty().withMessage( 'Debe enviar el nombre de la ciudad')
                        .isString().withMessage("Debe ser un string"),
                check('ciudadId')
                        .exists().withMessage("Debe enviar el parametro Identificacion de ciudad")
                        .not().isEmpty().withMessage( 'Debe decir que ciudad desea modificar')
                        .isNumeric().withMessage("Debe el identificador de ciudad debe ser numerico")
            ]
        }

        case 'createSede':{
            return [
                check('nombre')
                        .exists().withMessage("Debe enviar el parametro nombre")
                        .not().isEmpty().withMessage( 'Debe enviar el nombre de la sede')
                        .isString().withMessage("Debe ser un string"),
                        // .isUnique().withMessage("El nombre de la sede ya está registrado"),
                check('ciudadId')
                        .exists().withMessage("Debe enviar el parametro Identificacion de ciudad")
                        .not().isEmpty().withMessage( 'Debe decir que ciudad desea modificar')
                        .isNumeric().withMessage("Debe el identificador de ciudad debe ser numerico")
            ]
        }

        case 'updateSede':{
            return [
                check('nombre')
                        .exists().withMessage("Debe enviar el parametro nombre")
                        .not().isEmpty().withMessage( 'Debe enviar el nombre de la sede')
                        .isString().withMessage("Debe ser un string"),
                        // .isUnique().withMessage("El nombre de la sede ya está registrado"),
                check('ciudadId')
                        .exists().withMessage("Debe enviar el parametro Identificacion de ciudad")
                        .not().isEmpty().withMessage( 'Debe decir que ciudad desea modificar')
                        .isNumeric().withMessage("Debe el identificador de ciudad debe ser numerico"),
                check('idSede')
                        .exists().withMessage("Debe enviar el parametro Identificacion de sede")
                        .not().isEmpty().withMessage( 'Debe decir que sede desea modificar')
                        .isNumeric().withMessage("Debe el identificador de sede debe ser numerico")
            ]
        }

        
        default:
            return[
                check("erro")
                    .exists().withMessage("callo en default")
            ]
            break;
    }

}
