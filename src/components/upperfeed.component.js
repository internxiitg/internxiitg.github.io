import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import ShortenText from '../utils/ShortenText';
import ToText from '../utils/ToText';
import MediumCard1 from './MediumCard1';
import MediumCard2 from './MediumCard2';
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
        
        const avatar = data.feed.image;
        const profileLink = data.feed.link;
        const res = data.items; 
        const posts = res.filter(item => item.categories.length > 0);

        this.setState({ avatar: avatar, profileLink: profileLink });
        const itemRows = [];
        posts.forEach((item, i) => {
          item['avatar'] = this.state.avatar; 
          item['profilelink'] = this.state.profileLink; 
          const row = Math.floor(i);
          if (!itemRows[row]) itemRows[row] = [];
          itemRows[row].push(item);
        });
        this.setState({ itemRows: itemRows });
        console.log(itemRows);
      });
  }
    render() {
        return (
          <div className="container">
            
            <div className="upperfeed-box unselectable">
           
                {this.state.itemRows.slice(0,1).map((row, i) => (
                    <Row key={i}>
                    {row.map((item, j) => (
                        <Col key={j}>
                            <MediumCard1 {...item} />
                        </Col>
                    ))}
                    </Row>
                ))}
                    
                    
                    {this.state.itemRows.slice(1,3).map((row, i) => (
                    <Row key={i}>
                    {row.map((item, j) => (
                        <Col key={j}>
                            <MediumCard2 {...item} />
                        </Col>
                    ))}
                    </Row>
                ))}
                
        </div>
        </div>);
    }
}

export default Feed;