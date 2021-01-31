const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const Seed = require('./app/seeds/index');
const app = express();

var corsOptions = {
  origin: "*",
};
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(...);
const db = require("./app/models");
db.sequelize.sync({force: true })
  .then((result) => {
    return Seed()
  }).catch((err) => {
    console.log(err)
  });


//


// simple route
app.get("/", (req, res) => {
  res.json({ message: "Bienvenido, prueba Elvis para SASS." });
});

require("./app/routes/turorial.routes")(app);
require("./app/routes/auth.routes")(app);
require("./app/routes/usuario.routes")(app);
require("./app/routes/Sedes.routes")(app)

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
