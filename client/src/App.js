import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <div className="App-nav">
          <ul>
            <li><a className="App-nav-a"href="#">Home</a></li>
            <li><a className="App-nav-a"href="#">About</a></li>
            <li><a className="App-nav-a"href="#">How It Works</a></li>
            <li><a className="App-nav-a"href="#">Portfolio</a></li>
            <li><a className="App-nav-a"href="#">Recommendations</a></li>
            <li><a className="App-nav-a"href="#">Contact</a></li>
            <li><a className="App-nav-a"href="#">Blog</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
