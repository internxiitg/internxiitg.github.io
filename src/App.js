import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import logo from  './utils/logo2.jpg'
import Feed from './components/feed.component';
import About from './components/about.component';


class App extends React.Component {

  render() {
    return (<Router>

      <div className="navbar navbar-expand-sm fixed-top">
        <div className="navbar-brand"><img className="logo-img" src={logo}></img></div>
        <button className="navbar-toggler ml-auto" data-toggle="collapse" data-target="#navbarMenu">
          <i class="hambur fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarMenu">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to='/' className='unselectable nav-link navlinks active'>Home</Link>
            </li>
            <li className="nav-item">
              <Link to='/about' className='unselectable nav-link navlinks active'>About</Link>
            </li>
          </ul>
        </div>
      </div>

      <Route path="/about" exact component={About} />
      <Route path="/" exact component={Feed} />

      <div className='footer-box unselectable'>
        The Internship Experience ©
        </div>

    </Router>)
  }

}

export default App;
