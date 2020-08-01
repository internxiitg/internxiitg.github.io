import React from 'react';

import ShortenText from '../utils/ShortenText';
import ToText from '../utils/ToText';


export default function MediumCard2(props) {
  var shortMonthName = new Intl.DateTimeFormat('en-US', {
    month: 'short'
  }).format;
  let date = new Date(props.pubDate);
  const publishDate = shortMonthName(date) + ' ' + date.getDate() + ',' + ' ' + date.getFullYear();
  return (
    <div className="container">
    
       <div className="up-2">
          <div className="up2-image" style={{ backgroundImage: `url(${props.thumbnail})` }}></div>
          <div className="up2-content"><div className="up2-title"><a href={props.link} target="_blank" className="text-fiord-blue" rel="noopener noreferrer">
            {ShortenText(props.title, 0, 50)}
          </a></div>
          <div className="up2-desc">{ShortenText(ToText(props.content), 0, 280) + '...'}</div>
          </div>
          <div className="up2-author-date">
              <div className="up2-author" >
               {props.author}
              </div>
              <div className="up2-date">
                {publishDate}
              </div>
            </div>
          </div>
    
    
    </div>
  );
}