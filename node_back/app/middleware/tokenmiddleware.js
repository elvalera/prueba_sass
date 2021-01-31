const jwt = require("jsonwebtoken")

module.exports =(key) => (req, res , next) => {
    const token = req.headers.token;

    jwt.verify(token, 'prueba', function(err, decoded) {
       if(err) {  
       	console.log(err);
        return  res.status(400).json({messaje : "token expirado"})
       }else{ 
           //decoded te trae informacion dentor del token
           if(decoded.rol == key ){
               next()
           }else {
            return  res.status(400).json({messaje : "no tiene permisos para esta accion"})
           }
       }

    });

}