//const argv = require('Yargs').argv;
const argv = require('./config/yargs').argv;
const colors = require('colors');

const porHacer = require(`./todo/todo`);


console.log(argv);

let comando = argv._[0];


switch (comando) {

    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        break;

    case 'listar':
        let listado = porHacer.getListado();
        console.log();
        console.log("=========== TODO ============".green);
        listado.forEach(element => {
            console.log(element.descripcion);
            console.log('Estado: ', element.completado);
            console.log(`   -------------------`);
        });
        console.log("=============================".green);
        console.log();
        break;

    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        break;

    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;

    default:
        console.log(`Comando no reconocido`);
}