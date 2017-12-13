import axios from 'axios';

//api.openweathermap.org/data/2.5/weather?q=London

const dailyWeather = "http://api.openweathermap.org/data/2.5/weather?q=";
const tail = "&APPID=1db4244f1ddd2d920b1d551c563c4370";

const fiveDayWeather = "http://api.openweathermap.org/data/2.5/forecast?q=";
const fiveDayTail = "&cat=5";

let WeatherFetcher = {
  fetchDailyWeather: function(city){
    let url = dailyWeather + city + tail;
    return axios.get(url);
  },
  fetchFiveDayWeather: function(city) {
    let url = fiveDayWeather + city + tail + fiveDayTail;
    return axios.get(url);
  }
}

export default WeatherFetcher;
