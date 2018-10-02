import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = props => {
  return (
    <div className="App-nav">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><a href="#">About</a></li>
        <li><a href="#">How It Works</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">Recommendations</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Blog</a></li>
      </ul>
    </div>
  )
}

export default NavBar;
