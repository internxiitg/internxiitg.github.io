import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import ShortenText from '../utils/ShortenText';
import ToText from '../utils/ToText';


const FeedCard = props =>{ 
    
    var shortMonthName = new Intl.DateTimeFormat('en-US', {
        month: 'short'
      }).format;
      let date = new Date(props.post.pubDate);
      const publishDate = shortMonthName(date) + ' ' + date.getDate() + ',' + ' ' + date.getFullYear();
    
    return (
    <a class='feedbox-links' href={props.post.link}><div className="feed-box">
        <div className="feedbox-content">
            <div className="feedbox-title">{ShortenText(props.post.title, 0, 50)}</div>
            <div className="feedbox-desc">{ShortenText(ToText(props.post.content), 0, 320) + '...'}</div>
            <div className="feedbox-author-date">
                <div className="feedbox-author">By {props.post.author}</div>
            <div className="feedbox-date">{publishDate}</div>
            </div>
        </div>
        <div className="feedbox-image" style={{ backgroundImage: 'url(' + props.post.thumbnail + ')' }}></div>
    </div>
    </a>
)}

class LowerFeed extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: []
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
                this.setState({ posts: response.data.items });
            }).catch(err => {
                console.log(err);
            })
    }

    postCards() {
        return this.state.posts.slice(3).map(function (currentPost, i) {
            return <FeedCard post={currentPost} />;
        })
    }

    render() {
        return (<div className="container">
            <div className="feed-heading">LATEST</div>
            <div className="feed-container">
                {this.postCards()}
            </div>
        </div>);
    }
}

export default LowerFeed;