const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
}

const crear = {
    descripcion
}

const actualizar = {
    descripcion,
    completado
}

const borrar = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea por hacer'
    }
}


const argv = require('yargs')
    .command('crear', 'Crear una tarea por hacer', crear)
    .command('actualizar', 'Actualizar el estado completado de una tarea', actualizar)
    .command('borrar', 'Borrar una tarea por hacer', borrar)
    .help()
    .argv;

module.exports = {
    argv
}