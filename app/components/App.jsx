import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
// eslint-disable-next-line
import Search from './Search.jsx';
// eslint-disable-next-line
import Home from './Home.jsx';
// eslint-disable-next-line
import Forecast from './Forecast.jsx';
import Navbar from './Navbar.jsx';
import Detail from './Detail.jsx';

class App extends React.Component {
  render() {
    return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/forecast" component={Forecast} />
          <Route path="/detail" component={Detail} />
        </Switch>
      </Router>
    </div>  
    )
  }
}

export default App;
