import React from 'react';


const App = () => (
  <div>
    <nav className="nav-bar">
      <span className="title">
        Weather Forecaster
      </span>
      <input className="push" type="text" placeholder="San Diego, California" />
      <button name="submit" type="submit">
        Get Weather
      </button>
    </nav>
    <div className="main-container" style={{ backgroundImage: "url('app/images/pattern.svg')" }}>
      <h1>
        Enter a City and State
      </h1>
      <div>
        <input type="text" placeholder="San Diego, California" />
      </div>
      <button name="submit" type="submit">
        Get Weather
      </button>
    </div>
  </div>
);

export default App;
