import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';

function removeTags(str) {
    if ((str === null) || (str === ''))
        return 'empty';
    else
        str = str.toString();
    return str.replace(/(<([^>]+)>)/ig, '');
}

const FeedCard = props => (
    <a class='feedbox-links' href={props.post.link}><div className="feed-box">
        <div className="feedbox-content">
            <div className="feedbox-title">{props.post.title}</div>
            <div className="feedbox-desc">{removeTags(props.post.content).substring(0, 400) + "...."}</div>
            <div className="feedbox-author-date">
                <div className="feedbox-author">{props.post.author}</div>
                <div className="feedbox-date">15 March 2020</div>
            </div>
        </div>
        <div className="feedbox-image" style={{ backgroundImage: 'url(' + props.post.thumbnail + ')' }}></div>
    </div>
    </a>
)

class Feed extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        axios.get('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2Fthe-internship-experience-iit-guwahati')
            .then(response => {
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

export default Feed;