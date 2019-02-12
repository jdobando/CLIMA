const axios = require('axios');



const getClima = async(lat, lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&UNITS=METRIC&appid=79a7f9d9d90df08bf0aec3c20f6c7e0c`)

    return resp.data.main.temp;
}

module.exports = {
    getClima
}