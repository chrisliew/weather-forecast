import React from 'react';
import axios from 'axios';
import queryString from 'query-string';
import Navbar from './Navbar.jsx';
import api from '../utils/api.js';
import { Redirect } from 'react-router-dom';

function convertUNIXtime(dt) {
  const dayDate = new Date(0); // The 0 there is the key, which sets the date to the epoch
  dayDate.setUTCSeconds(dt);
  return dayDate.toDateString().slice(0, 10);
}

export default class Forecast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentWeatherData: '',
      fiveDayForecastData: '',
      oneDayData: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const urlMaker = {
      APIkey: 'b714ec74bbab5650795063cb0fdf5fbe',
      type: 'accurate',
      units: 'metric',
    };
    const propsParse = queryString.parse(this.props.location.search);
    const cityParse = propsParse.city;

    const currentWeatherNow = `http://api.openweathermap.org/data/2.5/weather?q=${cityParse}&type=${urlMaker.type}&units=${urlMaker.units}&APPID=${urlMaker.APIkey}`;

    axios.get(currentWeatherNow)
      .then((response) => {
        const cwData = response.data;
        this.setState({ currentWeatherData: cwData });
      })
      .catch((error) => {
        console.log(error);
        alert("Data not found enter check if city exists");
      });

    const fiveDayForecast = `http://api.openweathermap.org/data/2.5/forecast/daily?q=${cityParse}&type=${urlMaker.type}&units=${urlMaker.units}&APPID=${urlMaker.APIkey}&cnt=5`;

    axios.get(fiveDayForecast)
      .then((response) => {
        const fiveDayData = response.data;
        this.setState({ fiveDayForecastData: fiveDayData });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentWillReceiveProps(nextProps) {
    const urlMaker = {
      APIkey: 'b714ec74bbab5650795063cb0fdf5fbe',
      type: 'accurate',
      units: 'metric',
    };
    const propsParse = queryString.parse(nextProps.location.search);
    const cityParse = propsParse.city;

    const currentWeatherNow = `http://api.openweathermap.org/data/2.5/weather?q=${cityParse}&type=${urlMaker.type}&units=${urlMaker.units}&APPID=${urlMaker.APIkey}`;

    axios.get(currentWeatherNow)
      .then((response) => {
        const cwData = response.data;
        this.setState({ currentWeatherData: cwData });
      })
      .catch((error) => {
        console.log(error);
        alert("Data not found enter check if city exists");
      });

    const fiveDayForecast = `http://api.openweathermap.org/data/2.5/forecast/daily?q=${cityParse}&type=${urlMaker.type}&units=${urlMaker.units}&APPID=${urlMaker.APIkey}&cnt=5`;

    axios.get(fiveDayForecast)
      .then((response) => {
        const fiveDayData = response.data;
        this.setState({ fiveDayForecastData: fiveDayData });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleClick (oneDayData, event) {
    this.setState({
      oneDayData: oneDayData,
    });
    console.log('BOO', this.state.oneDayData);
  }


  render() {
    const fiveDayData = this.state.fiveDayForecastData;
    const currentWeather = this.state.currentWeatherData;
    const clickedDayData = this.state.oneDayData;


    return (
      <div>
        <Navbar />
        <div className="forecast-container">
          {!fiveDayData && (
            <p>Loading...</p>
          )}
          {currentWeather && fiveDayData && (
            <ul className="city-name">
              <li>{fiveDayData.city.name}</li>
              <li className="current-temp">{Math.round(currentWeather.main.temp)} ºC</li>
              <li className="details">Click on day for details</li>
            </ul>
          )}
          {clickedDayData && (
            <Redirect to={{
              pathname: `/detail/${fiveDayData.city.name}`,
              state: {
                clickedDayData: this.state.oneDayData,
                currentCity: fiveDayData.city.name,
              },
            }}
            />
          )}

          <ul className="five-day-forecast">
            {fiveDayData && (
              fiveDayData.list.map((oneDayData) => {
                const iconImageURL = '/app/images/weather-icons/';
                const iconCode = `${oneDayData.weather[0].icon}.svg`;

                return ([
                  <table key={oneDayData} onClick={this.handleClick.bind(this, oneDayData)}>
                    <tbody>
                      <tr className="forecast-icon">
                        <td>
                          <img className="forecast-icon" src={iconImageURL + iconCode} alt="Icon" />
                        </td>
                      </tr>
                      <tr className="forecast-date">
                        <td>{convertUNIXtime(oneDayData.dt)}</td>
                      </tr>
                    </tbody>
                  </table>
                ]);
              })
            )}
          </ul>
        </div>
      </div>
    );
  }
}
