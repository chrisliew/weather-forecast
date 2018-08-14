import React from 'react';
import queryString from 'query-string';
import Navbar from './Navbar.jsx';

function convertUNIXtime(dt) {
  const dayDate = new Date(0); // The 0 there is the key, which sets the date to the epoch
  dayDate.setUTCSeconds(dt);
  return dayDate.toDateString().slice(0, 10);
}

export default class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const iconImageURL = `/app/images/weather-icons/${this.props.location.state.clickedDayData.weather[0].icon}.svg`;

    const propsParse = queryString.parse(this.props.location.pathname);
    const dailyData = this.props.location.state.clickedDayData;
    const chosenCity = this.props.location.state.currentCity;

    return (
      <div className="detail-container">
        <Navbar />
        <ul className="city-data">
          <li>{chosenCity}</li>
          <li><img className="forecast-icon" src={iconImageURL}/></li>
          <li className="city-data-text">{convertUNIXtime(dailyData.dt)}</li>
          <li className="city-data-text">{dailyData.weather[0].description}</li>
          <li className="city-data-text">min temp: {dailyData.temp.min}</li>
          <li className="city-data-text">max temp: {dailyData.temp.max}</li>
          <li className="city-data-text">humidity: {dailyData.humidity}</li>
        </ul>
      </div>
    );
  }
}
