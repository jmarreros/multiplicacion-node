const fs = require('fs');

let listarTabla = (base, limite) => {
    return new Promise( (resolve, reject) => {
        if ( ! Number(base) || ! Number(limite)){
            reject(`El valor de la base y del límite debe ser numérico`);
            return;
        }

        let datos = '';
        for ( let i=1; i<= limite; i++){
            datos += `${base}*${i} = ${base*i} \n`;
        }
        resolve(datos);
    });
}

let crearArchivo = (base, limite) => {
    return new Promise( (resolve, reject) => {

        if ( ! Number(base) || ! Number(limite) ) {
            reject(`El valor introducido como base o límite debe ser un número`);
            return;
        }

        let data = '';
        for (let i=1; i<=limite; i++){
            data += `${i}*${base} = ${i*base} \n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`,data , (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(`tabla-${base}.txt`);
            }
        });

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}

