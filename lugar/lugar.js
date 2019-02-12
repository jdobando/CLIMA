const axios = require('axios');


const getLugarLatLng = async(direccion) => {


    let encodedUrl = encodeURI(direccion)

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyDdG4aBJJD0WkQ1sNc5A1ln3P8BwiBqKuU`)

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`NO HAY RESULTADOS PARA LA CIUDAD ${direccion}`);

    }


    let location = resp.data.results[0];
    let coor = location.geometry.location;

    return {
        direccion: location.formatted_address,
        lat: coor.lat,
        lng: coor.lng
    }


}




module.exports = {
    getLugarLatLng
}