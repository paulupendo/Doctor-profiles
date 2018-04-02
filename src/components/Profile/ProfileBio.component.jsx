import React, { Component } from 'react';
import { Image, Segment, Progress, Label, Header, Icon, Button } from 'semantic-ui-react';

import './ProfileBio.css';

const image = 'http://res.cloudinary.com/dlqcyupez/image/upload/v1520363908/img.jpg';

export default class ProfileBio extends Component {
  render() {
    return (
      <div className="profile-bio-container">
        <div className="bio-summary">
          <div className="bio-left">
            <div>
              <img src={image} alt="doctor-image" />
            </div>
            <div className="profile-points">
              Profile Points&#8482; 80/80
              <div className="progress-bar">
                <Progress percent={100} size="tiny" success />
              </div>
              <div className="about-section">
                <a>About ProfilePoints&#8482;</a>
              </div>
            </div>
          </div>
          <div className="bio-mid">
            <Segment>
              <Label as="a" color="teal" ribbon="right">
                Featured
              </Label>
              <div className="info-top">
                <Header as="h1">Sammy Chitaya, M.D.</Header>
                <span> Internist - General</span>
              </div>
              <div className="highlights">
                <div className="sub-container">
                  <div id="left">
                    <h4>
                      <Icon name="star" />Highlights
                    </h4>
                    <li>AlemHealth Connected</li>
                    <h4>
                      <Icon name="id card outline" /> Biography
                    </h4>
                    <p>
                      Dr. Sammy Chitayat graduated from the University of Di Roma La Sapienza, Fac Di Med E Chirurgia,
                      Roma, Italy in 1973. He works in New York, NY and specializes in Internal Medicine - Geriatrics.
                      Dr. C... <a>Read More</a>
                    </p>
                  </div>
                  <div id="right">
                    <h4>
                      <Icon name="weixin" />Featured Review
                      <p className="speech-bubble">Great doctor...</p>
                    </h4>
                    <span>Orlando N.</span>
                  </div>
                </div>
              </div>
            </Segment>
          </div>
          <div className="bio-right">
            <Button icon>
              <Icon name="phone" flipped="horizontally" /> (201) 308-694
            </Button>
            <h5>Office Hours</h5>
            <div>
              <div className="office-times">
                <span>Monday</span>
                <span>Tuesday</span>
                <span>Wednesday</span>
                <span>Thursday</span>
                <span>Friday</span>
              </div>
              <div className="office-times">
                <span>8:00am - 5:00pm</span>
                <span>8:00am - 5:00pm</span>
                <span>8:00am - 5:00pm</span>
                <span>8:00am - 5:00pm</span>
                <span>8:00am - 5:00pm</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
