import React from 'react';
import Search from './Search.jsx';

const Navbar = () => (
  <nav className="nav-bar">
    <span className="title">
      Weather Forecaster
    </span>
    <Search />
  </nav>
);

export default Navbar;
