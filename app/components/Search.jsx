import React from 'react';
// eslint-disable-next-line
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import api from '../utils/api';

// hit search button, want it to re render with the this.state.city = 
export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: null,
      city: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({
      input: event.target.value,
    });
  }

  handleClick() {
    // eslint-disable-next-line
    // api.fetchWeatherData(this.state.input)
    // Add later, if Data pulled is equal to true then do shit with it
    this.setState(prevState => ({
      city: prevState.input,
    }));
  }

  render() {
    const currentCity = this.state.city;
    const forecastURL = `/forecast?city=${currentCity}`;
    return (
      <div className={`search-navbar ${'search-main'}`}>
        <input className="input" onChange={this.handleChange} type="text" placeholder="Enter city here" />
        <button name="submit" type="submit" onClick={this.handleClick}>
          Get Weather
        </button>
        {currentCity && (
          <Redirect to={forecastURL} />
        )}
      </div>
    );
  }
}
