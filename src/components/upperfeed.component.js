import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

class UpperFeed extends React.Component {

    constructor(props){
        super(props);
    }
    render() {
        return (<div className="container">

        <div className="upperfeed-box unselectable">

          <div className="up-1">
            <div className="up1-image" style={{backgroundImage: 'url('+'https://studyabroad.shiksha.com/mediadata/images/articles/university-of-pennsylvania-picture-id594949892.jpg' + ')'}}></div>
            <div className="up1-content">
              <div className="up1-title">An Adventure Abroad - University of Pennsylvania</div>
              <div className="up1-author">By John Smith</div>
              <div className="up1-desc">Are you interested in a research-related career, a PhD, or studying abroad? Are you unsure of your interests or career direction? My experiences preceding and including my internship at the University of Pennsylvania, in Philadelphia, PA, USA may shed light and help guide you in making your decisions.</div>
              <div className="up1-author-date">
              <div className="up1-author2">By John Smith</div>
              <div className="up1-date">31 March 2020</div>
              </div>
            </div>
          </div>
          <div className="up-2">
          <div className="up2-image" style={{backgroundImage: 'url('+'https://www.teektalks.com/wp-content/uploads/2018/03/Microsoft.jpg' + ')'}}></div>
          <div className="up2-content"><div className="up2-title">A typical day in the life of a Microsoft Intern</div>
          <div className="up2-desc">Are you interested in a research-related career, a PhD, or studying abroad? Are you unsure of your interests or career direction? My experiences preceding and including my internship at the University of Pennsylvania, in Philadelphia, PA, USA may shed light and help guide you in making your decisions.</div>
          </div>
          <div className="up2-author-date">
              <div className="up2-author" >
                By John Smith
              </div>
              <div className="up2-date">
                22 March 2020
              </div>
            </div>
          </div>

          <div className="up-2">
          <div className="up2-image" style={{backgroundImage: 'url('+'https://www.impossible.sg/wp-content/uploads/2018/05/Google-Digital-Marketing.jpg' + ')'}}></div>
            <div className="up2-content"><div className="up2-title">How I made it to google, twice!</div>
            <div className="up2-desc">Are you interested in a research-related career, a PhD, or studying abroad? Are you unsure of your interests or career direction? My experiences preceding and including my internship at the University of Pennsylvania, in Philadelphia, PA, USA may shed light and help guide you in making your decisions.</div>
            </div>
            <div className="up2-author-date">
              <div className="up2-author" >
                By John Smith
              </div>
              <div className="up2-date">
                22 March 2020
              </div>
            </div>
          </div>

        </div>

      </div>);
    }
}

export default UpperFeed;