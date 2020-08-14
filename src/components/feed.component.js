import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

import UpperFeed from './upperfeed.component';
import LowerFeed from './lowerfeed.component';
import SearchFeed from './searchfeed.component'

class Feed extends React.Component {

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
    this.setState({ year: 2019 });
  }

  onClickButton2020(e) {
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
      return(<div>

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
        </div>)
    }
    else{
      return (
        <div>
          <div className="header-box container-fluid unselectable">
            <div className="header-container">
              <div className="header-title-intro">
                <div className="title-header">The Internship Experience IITG</div>
                <div className="intro-header">The Internship Experience IITG brings the truest stories from students interning in diverse streams, from Billion dollar MNCs to hottest startups, Foreign universities to Indian research.</div>
              </div>
              <div className="empty-container"></div>
            </div>
          </div>
  
          <UpperFeed year={this.state.year} key={this.state.year + 1} />
          <LowerFeed year={this.state.year} key={this.state.year + 2} />
  
        </div>
      );

    }
  }
}

export default Feed;
