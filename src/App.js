import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import UpperFeed from './components/upperfeed.component';
import Feed from './components/feed.component';
import SearchFeed from './components/searchfeed.component'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      year: 9999,
      SearchText: '',
      searchactive: false
    }

    this.onClickButton2019 = this.onClickButton2019.bind(this);
    this.onClickButton2020 = this.onClickButton2020.bind(this);
    this.onChangeSearchText = this.onChangeSearchText.bind(this);

  }

  onClickButton2019(e) {
    console.log("button 2019 clicked")
    this.setState({ year: 2019 });
  }

  onClickButton2020(e) {
    console.log("button 2020 clicked")
    this.setState({ year: 2020 });
  }

  onChangeSearchText(e){
    if(e.target.value.trim() == ''){
      this.setState({searchactive:false});
    }
    else{
      this.setState({searchactive:true, SearchText:e.target.value.trim()});
    }
}

  render() {
    if(this.state.searchactive){
      return(<Router>
  
          <div className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
            <button className="navbar-toggler ml-auto" data-toggle="collapse" data-target="#navbarMenu">
              <i class="fas fa-bars"></i>
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
            <form>
              <input value={this.SearchText} onChange={this.onChangeSearchText} type='text' className='search-box' placeholder='Search By Category (Ex. AI, Finance)'></input>
            </form>
          </div>
          <div className="searchfeed-container">
          <SearchFeed searchtext={this.state.SearchText} key={this.state.SearchText} />
          </div>
  
          <div className='footer-box unselectable'>
            The Internship Experience ©
        </div>
  
        </Router>)
    }
    else{
      return (
        <Router>
  
          <div className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
            <button className="navbar-toggler ml-auto" data-toggle="collapse" data-target="#navbarMenu">
              <i class="fas fa-bars"></i>
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
            <form>
              <input value={this.SearchText} onChange={this.onChangeSearchText} type='text' className='search-box' placeholder='Search By Category (Ex. AI, Finance)'></input>
            </form>
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
}

export default App;
