import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from '../components/NavBar';
import '../App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header" />

          <NavBar />
          <Route to="/" render={() =><div>Home Component</div>}/>
      </div>
      </Router>
    );
  }
}

export default App;
