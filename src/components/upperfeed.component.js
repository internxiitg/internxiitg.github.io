import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import ShortenText from '../utils/ShortenText';
import ToText from '../utils/ToText';


function getMonthName(num){
  switch(num){
      case 0: return 'Jan';
      case 1: return 'Feb';
      case 2: return 'March';
      case 3: return 'April';
      case 4: return 'May';
      case 5: return 'June';
      case 6: return 'July';
      case 7: return 'Aug';
      case 8: return 'Sep';
      case 9: return 'Oct';
      case 10: return 'Nov';
      case 11: return 'Dec';
  }
}

function convertDate(pdate) {

  let ndate = new Date(pdate);
  const publishDate = getMonthName(ndate.getMonth()) + ' ' + ndate.getDate() + ',' + ' ' + ndate.getFullYear();

  return publishDate;
  
}

class Feed extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      post1: {
        title: "",
        author: "",
        pubDate: "",
        content: "",
        link:"",
        thumbnail:"",
        
      },
      post2: {
        title: "",
        author: "",
        pubDate: "",
        content: "",
        link:"",
        thumbnail:"",
      },
      post3: {
        title: "",
        author: "",
        pubDate: "",
        content: "",
        link:"",
        thumbnail:"",
      }
    }
  }


  componentDidMount() {
    axios.get('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2Fthe-internship-experience-iit-guwahati')
    .then(response => {

      if(this.props.year == 2019){
        var startDate = new Date("2019-01-01");
        var endDate = new Date("2019-12-31");
        
        response.data.items = response.data.items.filter(a => {
          var date = new Date(a.pubDate);
          return (date >= startDate && date <= endDate);
        });
      }
      else if(this.props.year == 2020){
        var startDate = new Date("2020-01-01");
        var endDate = new Date("2020-12-31");
        
        response.data.items = response.data.items.filter(a => {
          var date = new Date(a.pubDate);
          return (date >= startDate && date <= endDate);
        });

      }

        this.setState({ post1: response.data.items[0], post2:response.data.items[1], post3: response.data.items[2] });
      }).catch(err => {
        console.log(err);
      })
  }

  render() {

    return (<div className="container">

      <div className="upperfeed-box unselectable">
        <div className="up-1">    
          <div onClick={e=>(window.location=this.state.post1.link)} className="up1-image" style={{ backgroundImage: 'url(' + this.state.post1.thumbnail + ')' }}></div>
          <a class='feedbox-links' href={this.state.post1.link}>
          <div className="up1-content">
          <div className="up1-title">{ShortenText(this.state.post1.title, 0, 50)}</div>
            <div className="up1-author">{this.state.post1.author}</div>
            <div className="up1-desc">{ShortenText(ToText(this.state.post1.content), 0, 400) + '...'}</div>
            <div className="up1-author-date">
              <div className="up1-author2">{this.state.post1.author}</div>
              <div className="up1-date">{convertDate(this.state.post1.pubDate)}</div>
            </div>
          </div>
          </a>
        </div>

        <div className="up-2">
          <div onClick={e=>(window.location=this.state.post2.link)} className="up2-image" style={{ backgroundImage: 'url(' + this.state.post2.thumbnail + ')' }}></div>
          <a class='feedbox-links' href={this.state.post2.link}>
          <div className="up2-content"><div className="up2-title">{ShortenText(this.state.post2.title, 0, 50)}</div>
            <div className="up2-desc">{ShortenText(ToText(this.state.post2.content), 0, 320) + '...'}</div>
          </div>
          <div className="up2-author-date">
            <div className="up2-author" >
            {this.state.post2.author}
              </div>
            <div className="up2-date">
            {convertDate(this.state.post2.pubDate)}
              </div>
          </div>
          </a>
        </div>
        
        <div className="up-2">
          <div onClick={e=>(window.location=this.state.post3.link)} className="up2-image" style={{ backgroundImage: 'url(' + this.state.post3.thumbnail + ')' }}></div>
          <a class='feedbox-links' href={this.state.post3.link}>
          <div className="up2-content"><div className="up2-title">{ShortenText(this.state.post3.title, 0, 50)}</div>
            <div className="up2-desc">{ShortenText(ToText(this.state.post3.content), 0, 320) + '...'}</div>
          </div>
          <div className="up2-author-date">
            <div className="up2-author" >
            {this.state.post3.author}
              </div>
            <div className="up2-date">
            {convertDate(this.state.post3.pubDate)}
              </div>
          </div>
          </a>
        </div>

      </div>

    </div>);
  }
}

export default Feed;