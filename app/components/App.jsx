import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Search from './Search.jsx';
import Home from './Home.jsx';
import Forecast from './Forecast.jsx';
import Navbar from './Navbar.jsx';
import Detail from './Detail.jsx';
require.context('../images', true, /\.svg$/);

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
