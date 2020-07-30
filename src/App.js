import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div className='navclass container-fluid'>
          <div className='row'>
            <div className='col-2'>
            </div>
            <div className='col-6'>

            </div>
            <div className='col-2'>
            <Link to='/' className='navlinks unselectable mr-4'>Home</Link>
            <Link to='/' className='navlinks unselectable'>About</Link>
            </div>
            <div className='col'>

            </div>
          </div>
        </div>
        <div className="header-box container-fluid">
        <div className="header-container">
        <div className="header-title-intro">
            <div className="title-header">The Internship Experience</div>
            <div className="intro-header">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
          </div>
          <div className="empty-container"></div>
          </div>
          <div className='header-buttons container'>
          <button className='button2019'>
            2019
          </button>
          <button className='button2020'>
            2020
          </button>
          </div>
        </div>
    </Router>
  );
}

export default App;
