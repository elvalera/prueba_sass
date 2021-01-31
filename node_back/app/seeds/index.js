const usuarioSeed = require('./usuarioSeed');
const ciudadSeed = require('./ciudadSeed');
const cedesSeed = require('./sedesSeed');
const tipoUsuarioSeed = require('./tipoUsuarioSeed');

module.exports = function() {
    return Promise.all([ 
        ciudadSeed(),
        cedesSeed(),
        tipoUsuarioSeed(),
        usuarioSeed(),
    ]).then(() => {
        // More seeds that require IDs from the seeds above
    }).then(() => {
        console.log('********** Successfully seeded db **********');
    });
}