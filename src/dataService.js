import axios from 'axios';

export const getWeather = (id) => {
    return new Promise((resolve, reject) => {
        // https://cors-anywhere.herokuapp.com/ is added to bypass CROS
        axios.get('https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?id='+id+'&units=metric&appid=6e35046ba3b0948c4c8298848fbcec22')
        .then(res => {
            resolve(res)
        })
        .catch(err => {
            reject(err)
        })
    })
}