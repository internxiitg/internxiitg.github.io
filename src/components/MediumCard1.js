import React from 'react';
import { Card, CardBody } from 'shards-react';
import ShortenText from '../utils/ShortenText';
import ToText from '../utils/ToText';


export default function MediumCard1(props) {
  var shortMonthName = new Intl.DateTimeFormat('en-US', {
    month: 'short'
  }).format;
  let date = new Date(props.pubDate);
  const publishDate = shortMonthName(date) + ' ' + date.getDate() + ',' + ' ' + date.getFullYear();
  return (
    <div className="container">
    
       <div className="up-1">
            <div className="up1-image" style={{ backgroundImage: `url(${props.thumbnail})` }}></div>
            <div className="up1-content">
              <div className="up1-title"><a href={props.link} target="_blank" className="text-fiord-blue" rel="noopener noreferrer">
            {ShortenText(props.title, 0, 50)}
          </a></div>
              <div className="up1-author">{props.author}</div>
              <div className="up1-desc">{ShortenText(ToText(props.content), 0, 250) + '...'}</div>
              <div className="up1-author-date">
              <div className="up1-author2">{props.author}</div>
              <div className="up1-date">{publishDate}</div>
              </div>
            </div>
        </div>
        </div>
         
  
  );
}