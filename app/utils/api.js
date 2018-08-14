import axios from 'axios';

const urlMaker = {
  APIkey: 'b714ec74bbab5650795063cb0fdf5fbe',
  type: 'accurate',
  units: 'metric',
};

// eslint-disable-next-line
module.exports = {

  getCurrentWeather(city) {
    const currentWeather = `http://api.openweathermap.org/data/2.5/weather?q=${city}&type=${urlMaker.type}&units=${urlMaker.units}&APPID=${urlMaker.APIkey}`;

    axios.get(currentWeather)
      .then((response) => {
        const cwData = response.data.main;
        this.setState({ currentWeatherData: cwData });
        console.log("DATTTA", this.state.currentWeatherData);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  getFiveDayForecast(city) {
    const fiveDayForecast = `http://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&type=${urlMaker.type}&units=${urlMaker.units}&APPID=${urlMaker.APIkey}&cnt=5`;

    return axios.get(fiveDayForecast)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  //   return axios.all([getCurrentWeather(), getFiveDayForecast()])
  //     .then(axios.spread(() => {
  //     }));
  // },
};
