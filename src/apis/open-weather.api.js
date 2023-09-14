import axios from 'axios';

axios.defaults.baseURL = 'https://api.openweathermap.org/data/2.5/';
const APIKEY = `appid=${process.env.REACT_APP_API_KEY}`;

function getCurrentWeather(location){
    return axios.get(
        `weather?q=${location}&units=metric&${APIKEY}`
    );
}

function getForecast(lat, lon) {
    return axios.get(
        `onecall?lat=${lat}&lon=${lon}&units=metric&${APIKEY}`
    )
}

export{
    getCurrentWeather,
    getForecast
}
