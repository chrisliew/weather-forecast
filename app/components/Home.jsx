import React from 'react';
import Search from './Search.jsx';
import Navbar from './Navbar.jsx';

const Home = () => (
  <div>
    <Navbar />
    <div className="main-container" style={{ backgroundImage: "url('app/images/pattern.svg')" }}>
      <h1>
        Enter a City and Province or State
      </h1>
      <Search />
    </div>
  </div>
);

export default Home;
