import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

class Feed extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (<div className="container">
            <div className="feed-heading">LATEST</div>
            <div className="feed-container">


            <div className="feed-box">
                <div className="feedbox-content">
                    <div className="feedbox-title">Interning at JP Morgan Chase — Mumbai</div>
                    <div className="feedbox-desc">I consider myself lucky — extremely lucky, in fact, to have been able to intern at one of the most prestigious banking firms across the globe — J.P.Morgan. When I met the person who interviewed me in the office, I asked him what J.P.Morgan expects from job applicants. He simply replied: “You have been here for a month now, I think you can guess what kind of people we are looking for.” </div>
                    <div className="feedbox-author-date">
                    <div className="feedbox-author">By John Smith</div>
                    <div className="feedbox-date">15 March 2020</div>
                    </div>
                </div>
                <div className="feedbox-image" style={{backgroundImage: 'url('+'https://miro.medium.com/max/875/1*r2DU-NgT_5jUkyCfhJ7-Uw.jpeg' + ')'}}></div>
            </div>

            <div className="feed-box">
                <div className="feedbox-content">
                    <div className="feedbox-title">Interning at Microsoft — Swapnil Kothriwal</div>
                    <div className="feedbox-desc">I secured an internship with Microsoft during on campus interviews. I would like to first share how I prepared for the interview.</div>
                    <div className="feedbox-author-date">
                    <div className="feedbox-author">By John Smith</div>
                    <div className="feedbox-date">14 March 2020</div>
                    </div>
                </div>
                <div className="feedbox-image" style={{backgroundImage: 'url('+'https://miro.medium.com/max/875/1*M-nNaQ6y_jaZmJNbAYs7PA.jpeg' + ')'}}></div>
            </div>

            <div className="feed-box">
                <div className="feedbox-content">
                    <div className="feedbox-title">McGill University — Shwetank Panwar</div>
                    <div className="feedbox-desc">Ever wondered about how the things you keep doing at a campus help you or don’t help you in the real world? Is there a more fun way to learn about the area you are interested in? Can you work on the bleeding edge of the field & unexplored questions while being an undergraduate? More importantly, how is living and working in a foreign land feels like?</div>
                    <div className="feedbox-author-date">
                    <div className="feedbox-author">By John Smith</div>
                    <div className="feedbox-date">12 March 2020</div>
                    </div>
                </div>
                <div className="feedbox-image" style={{backgroundImage: 'url('+'https://miro.medium.com/max/875/1*TL7cSs2_vaL3wOlUQULR7A.jpeg' + ')'}}></div>
            </div>

            <div className="feed-box">
                <div className="feedbox-content">
                    <div className="feedbox-title">Internship Experience: NVidia</div>
                    <div className="feedbox-desc">Nvidia is based out of Santa Clara and comes to IIT Guwahati to offer internships for the Bangalore office. Their selection process involves CV shortlisting followed by one technical and one HR interview. </div>
                    <div className="feedbox-author-date">
                    <div className="feedbox-author">By John Smith</div>
                    <div className="feedbox-date">10 March 2020</div>
                    </div>
                </div>
                <div className="feedbox-image" style={{backgroundImage: 'url('+'https://media.glassdoor.com/companyupdate/w600/7633/nvidia-companyupdate-1579655809069.jpg' + ')'}}></div>
            </div>

            


            </div>
        </div>);
    }
}

export default Feed;