import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import About from '../components/About';
import HowItWorks from '../components/HowItWorks';
import Portfolio from '../components/Portfolio';
import Recommendations from '../components/Recommendations';
import Contact from '../components/Contact';
import Blog from '../components/Blog';
import Footer from '../components/Footer';

import '../App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header" />
          <NavBar />
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/how_it_works" component={HowItWorks}/>
          <Route exact path="/portfolio" component={Portfolio}/>
          <Route exact path="/recommendations" component={Recommendations}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/blog" component={Blog}/>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
