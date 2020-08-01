import React from 'react';
import { Card, CardBody } from 'shards-react';
import ShortenText from '../utils/ShortenText';
import ToText from '../utils/ToText';

// functional card component to display single item
export default function MediumCard(props) {
  var shortMonthName = new Intl.DateTimeFormat('en-US', {
    month: 'short'
  }).format;
  let date = new Date(props.pubDate);
  const publishDate = shortMonthName(date) + ' ' + date.getDate() + ',' + ' ' + date.getFullYear();
  return (
    <div className="feed-container">

    <div className="feed-box">
     <div className="feedbox-content">
          <div className="feedbox-title"><a className="feedbox-links" href={props.link} target="_blank" className="text-fiord-blue" rel="noopener noreferrer">
            {ShortenText(props.title, 0, 50)}
          </a></div>
          <div className="feedbox-desc">{ShortenText(ToText(props.content), 0, 280) + '...'}</div>
            <div className="feedbox-author-date">
                <div className="feedbox-author">{props.author}</div>
                <div className="feedbox-date">{publishDate}</div>
            </div>
      </div>
      <div className="feedbox-image" style={{ backgroundImage: `url(${props.thumbnail})` }}></div>
    
    </div>
    </div>
  );
}