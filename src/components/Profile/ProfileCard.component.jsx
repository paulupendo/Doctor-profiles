import React, { Component } from 'react';
import { Card, Icon, Progress, Rating } from 'semantic-ui-react';

// Styles
import './ProfileCard.css';

const image = 'http://res.cloudinary.com/dlqcyupez/image/upload/v1520363908/img.jpg';

class ProfileCard extends Component {
  render() {
    return (
      <div className="profile-card">
        <div className="card">
          <div className="card-header">
            <h1> Sammy Chitayat, M.D. </h1>
          </div>
          <div className="result-body">
            <img className="pic" src={image} />
            <div className="result-section">
              <div className="progress-bar">
                <span className="progress-name">Profile Points</span>
                <span className="progress-count">80/80</span>
                <span className="progress-graph">
                  <Progress color="blue" percent={90} size="tiny" />
                </span>
              </div>
              <div className="result-rating">
                <span className="result-rating-values">5/5 </span>
                <Rating icon="star" defaultRating={5} maxRating={5} size="huge" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileCard;
