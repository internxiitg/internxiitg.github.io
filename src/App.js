import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import UpperFeed from './components/upperfeed.component';
import Feed from './components/feed.component';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='navclass container-fluid'>   
            <div className='navlink-container'>
              <Link to='/' className='navlinks unselectable mr-4'>Home</Link>
              <Link to='/' className='navlinks unselectable'>About</Link>
            </div>
          </div>
        <div className="header-box container-fluid unselectable">
          <div className="header-container">
            <div className="header-title-intro">
              <div className="title-header">The Internship Experience</div>
              <div className="intro-header">The Internship Experience brings the truest stories from students interning in diverse streams, from Billion dollar MNCs to hottest startups, Foreign universities to Indian research.</div>
            </div>
            <div className="empty-container"></div>
          </div>
          <div className='header-buttons container'>
            <button className='button1 button2019'>
              2019
          </button>
            <button className='button1 button2020'>
              2020
          </button>
          </div>
        </div>

        <UpperFeed />
        <Feed />

        <div className='footer-box unselectable'>
          The Internship Experience ©
      </div>
      
      </Router>
    );
  }
}

export default App;
