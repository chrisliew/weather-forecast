import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import api from '../utils/api';

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
    this.setState(prevState => ({
      city: prevState.input,
    }));
  }

  render() {
    const currentCity = this.state.city;
    const forecastURL = `/forecast?city=${currentCity}`;
    return (
      <div className={`search-navbar ${'search-main'}`}>
        <input className="input" onChange={this.handleChange} type="text" placeholder="city, province" />
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
