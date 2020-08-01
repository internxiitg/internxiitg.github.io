import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import ShortenText from '../utils/ShortenText';
import ToText from '../utils/ToText';
import MediumCard from './MediumCard';
import { Col, Row } from 'shards-react';

class Feed extends React.Component {

    constructor(props) {
        super(props);
        this.state = { itemRows: [], avatar: '', profileLink: '' };
    }
    mediumURL = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2Fthe-internship-experience-iit-guwahati';
    componentDidMount() {
    fetch(this.mediumURL)
      .then(res => res.json())
      .then(data => {
        // create two-dimensional array with 3 elements per inner array
        const avatar = data.feed.image;
        const profileLink = data.feed.link;
        const res = data.items; //This is an array with the content. No feed, no info about author etc..
        const posts = res.filter(item => item.categories.length > 0);

        this.setState({ avatar: avatar, profileLink: profileLink });
        const itemRows = [];
        posts.forEach((item, i) => {
          item['avatar'] = this.state.avatar; // push avatar inside the json
          item['profilelink'] = this.state.profileLink; // push profile link inside the JSON
          const row = Math.floor(i);
          if (!itemRows[row]) itemRows[row] = [];
          itemRows[row].push(item);
        });
        this.setState({ itemRows: itemRows });
        console.log(itemRows);
      });
  }
    render() {
        return (<div className="container">
            <div className="feed-heading">LATEST</div>
            <div className="feed-container">
                {this.state.itemRows.map((row, i) => (
                    <Row key={i}>
                    {row.map((item, j) => (
                        <Col key={j}>
                            <MediumCard {...item} />
                        </Col>
                    ))}
                    </Row>
                ))}
            


            </div>
        </div>);
    }
}

export default Feed;