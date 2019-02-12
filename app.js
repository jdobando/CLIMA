const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');



const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Nombre de ciudad para optener el Clima',
        demand: true
    }
}).argv;


let getInfo = async(direccion) => {

        try {
            let coor = await lugar.getLugarLatLng(direccion);
            let temp = await clima.getClima(coor.lat, coor.lng);

            return `El Clima en ${coor.direccion} es temperatura es ${temp} `;
        } catch {
            console.log(`No se pudo determinar clima para ${direccion}`);

        }
    }
    // console.log(argv.descripcion);

// lugar.getLugarLatLng(argv.direccion)
//     .then(resp => {
//         console.log(resp);
//     })
//     .catch(e => console.log(e));




// clima.getClima(76.2505778, -100.113952)
//     .then(temp => console.log(temp))
//     .catch(e => console.log(e));

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));