import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = props => {
  return (
    <div className="App-nav">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/how_it_works">How It Works</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/recommendations">Recommendations</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/blog">Blog</Link></li>
      </ul>
    </div>
  )
}

export default NavBar;
