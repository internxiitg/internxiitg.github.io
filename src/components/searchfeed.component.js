import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import ShortenText from '../utils/ShortenText';
import ToText from '../utils/ToText';


const FeedCard = props => {

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
    )
}

class SearchFeed extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        console.log("searchfeed got loaded");

        axios.get('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2Fthe-internship-experience-iit-guwahati')
            .then(response => {
                let new_posts = [];
                for (var p of response.data.items) {
                    p.categories = p.categories.join(",").split("-").join(" ").split(",");
                    console.log(p.categories);
                    if (p.categories.includes(this.props.searchtext.toLowerCase().trim())) {
                        new_posts.push(p);
                    }
                }
                console.log("----------");
                console.log(response.data.items);
                console.log(new_posts);
                console.log("----------");

                this.setState({ posts: new_posts });
            }).catch(err => {
                console.log(err);
            })
    }

    postCards() {
        return this.state.posts.map(function (currentPost, i) {
            return <FeedCard post={currentPost} />;
        })
    }

    render() {
        if (this.state.posts.length > 0) {
            return (<div className="container">
                <div className="searchfeed-heading">SEARCH RESULTS</div>
                <div className="feed-container">
                    {this.postCards()}
                </div>
            </div>);
        }
        else {
            return (
                <div className="container">
                    <div className="searchfeed-heading">SEARCH RESULTS</div><div className="noresults">
                        No results found :(
            </div>
                </div>)
        }
    }
}

export default SearchFeed;