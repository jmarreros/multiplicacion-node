let { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const { argv } =require('./config/yargs');
let colors = require('colors');

// let argv2 = process.argv;

let comando = argv._[0];

switch (comando){
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then( data => {
                console.log(`==========`.red);
                console.log(data);
            })
            .catch(err => {
                console.log(err);
            })
        break;
    case 'crear':
            crearArchivo(argv.base, argv.limite)
                .then( archivo => {
                    console.log(`Archivo creado`, colors.green(archivo));
                })
                .catch(err => {
                    console.log(err);
                });
            break;
    default:
        console.log(`Comando no reconocido`);
        break;
}

// let parametro = argv[2];

// let base = argv[2].split('=')[1];

// console.log(argv.base);
// console.log(`Limite: ${argv.limite}`);


// return;

// crearArchivo(base)
//     .then( archivo => {
//         console.log(`Archivo creado ${archivo}`);
//     })
//     .catch(err => {
//         console.log(err);
//     });

// console.log(module);
// console.log(multiplicar.crearArchivo);
// console.log(process.argv);