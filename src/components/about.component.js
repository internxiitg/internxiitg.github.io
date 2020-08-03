import React from 'react';
import utkarsh_image from '../utils/utkarsh_image.jpeg';
import smita_image from '../utils/smita_image.jpeg';
import aniket_image from '../utils/aniket_image.jpeg';
import aryan_image from '../utils/aryan_image.jpg';


class About extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
                <div className="about-container">
                    <div className="about-heading">About the Initiative</div>
                    <div className="about-desc">The Internship Experience is an effort towards helping students prepare for internships by getting to know the jitters and experiences of the ones who have already been through it. Informed choices help you shape your career suited for your personality. Seniors are always super helpful at IITG. Get to know more about their internships in detail with in depth discussions on how to get the best internships and excel at them. We bring the truest stories from students interning in diverse streams, from Billion dollar MNCs to hottest startups, Foreign universities to Indian research.</div>
                    <div className="team-heading">Meet our Team</div>
                    <div className="team-container unselectable">
                        <div className="team-member">
                            <div className="team-img-container"><img className="team-img" src={aniket_image}></img></div>
                            <div className="member-name">Aniket Mandle</div>
                            <div className="member-desc">APM Cuemath, IITG Alumni</div>
                            <div className="member-social">
                            <a href="https://www.linkedin.com/in/aniketmandle/"><i class="fa fa-linkedin member-social-i" aria-hidden="true"></i></a>
                            <a href="https://twitter.com/aniketmandle11"><i class="fa fa-twitter member-social-i" aria-hidden="true"></i></a>
                            <a href="https://www.facebook.com/aniketmandle11"><i class="fa fa-facebook member-social-i" aria-hidden="true"></i></a>
                            </div>
                        </div>
                        <div className="team-member">
                            <div className="team-img-container"><img className="team-img" src={utkarsh_image}></img></div>
                            <div className="member-name">Utkarsh Mishra</div>
                            <div className="member-desc">Final Year, IIT Guwahati</div>
                            <div className="member-social">
                            <a href="https://www.linkedin.com/in/ut99m/"><i class="fa fa-linkedin member-social-i" aria-hidden="true"></i></a>
                            <a href="https://twitter.com/ut_mishra"><i class="fa fa-twitter member-social-i" aria-hidden="true"></i></a>
                            <a href="https://www.facebook.com/utkarsh.mishra.10"><i class="fa fa-facebook member-social-i" aria-hidden="true"></i></a>
                            </div>
                        </div>
                        <div className="team-member">
                            <div className="team-img-container"><img className="team-img" src={smita_image}></img></div>
                            <div className="member-name">Smita Saxena</div>
                            <div className="member-desc">Pre-final Year, IIT Guwahati</div>
                            <div className="member-social">
                            <a href="https://www.linkedin.com/in/smita-saxena11/"><i class="fa fa-linkedin member-social-i" aria-hidden="true"></i></a>
                            <a href="https://twitter.com/smita_saxenaa"><i class="fa fa-twitter member-social-i" aria-hidden="true"></i></a>
                            <a href="https://www.facebook.com/smita.saxena.3998263/"><i class="fa fa-facebook member-social-i" aria-hidden="true"></i></a>
                            </div>
                        </div>
                        <div className="team-member">
                            <div className="team-img-container"><img className="team-img" src={aryan_image}></img></div>
                            <div className="member-name">Aryan Verma</div>
                            <div className="member-desc">Sophomore, IIT Guwahati</div>
                            <div className="member-social">
                            <a href="https://www.linkedin.com/in/aryanv01/"><i class="fa fa-linkedin member-social-i" aria-hidden="true"></i></a>
                            <a href="https://twitter.com/oryonv"><i class="fa fa-twitter member-social-i" aria-hidden="true"></i></a>
                            <a href="https://www.facebook.com/aryanv2001"><i class="fa fa-facebook member-social-i" aria-hidden="true"></i></a>
                            </div>
                        </div>
                    </div>
                </div>)
    }
}
export default About;