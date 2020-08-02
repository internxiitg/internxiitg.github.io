import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import UpperFeed from './components/upperfeed.component';
import Feed from './components/feed.component';

class App extends React.Component {

  constructor(props){
      super(props);
      this.state = {
        year:9999
      }

      this.onClickButton2019 = this.onClickButton2019.bind(this);
      this.onClickButton2020 = this.onClickButton2020.bind(this);

  }

  onClickButton2019(e){
    console.log("button 2019 clicked")
      this.setState({year:2019});
  }

  onClickButton2020(e){
    console.log("button 2020 clicked")
    this.setState({year:2020});
  }

  render() {
    console.log("year:" + this.state.year);

    return (
      <Router>

          <div className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
            <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarMenu">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarMenu">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
              <Link to='/' className='unselectable nav-link navlinks active'>Home</Link>
              </li>
              <li className="nav-item">
              <Link to='/' className='unselectable nav-link navlinks active'>About</Link>
              </li>
            </ul>
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
            <button onClick={this.onClickButton2019} className='button1 button2019'>
              2019
          </button>
            <button onClick={this.onClickButton2020} className='button1 button2020'>
              2020
          </button>
          </div>
        </div>

        <UpperFeed year={this.state.year} key={this.state.year + 1} />
        <Feed year={this.state.year} key={this.state.year + 2} />

        <div className='footer-box unselectable'>
          The Internship Experience ©
      </div>
      
      </Router>
    );
  }
}

export default App;
