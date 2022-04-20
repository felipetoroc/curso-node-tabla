
const fs = require('fs');
const colors = require('colors')

const crearArchivo = async(base,listar,hasta) => {
    try{
        console.log('===================='.green);
        console.log(colors.rainbow('Tabla del: '), base)
        console.log('===================='.green);

        let salida,consola = '';

        for (let x = 1; x <= hasta; x++){
            salida += `${base} x ${x} = ${base * x}\n`;
            consola += `${base} ${'x'.red} ${x} = ${base * x}\n`;
        }

        fs.writeFileSync( `./salida/tabla-${base}.txt`, salida)
        if(listar == true){
            console.log(consola)
        }
        return `tabla-${base}.txt`;
    }catch (error) {
        throw 'Archivo no creado';
    }
}

module.exports = {
    crearArchivo
}