import React, { Component } from 'react';
import {
  Card,
  Icon,
  Progress,
  Rating,
  Button,
  List,
  Modal,
  Header,
  Dropdown,
} from 'semantic-ui-react';

// Styles
import './ProfileCard.css';

const image = 'http://res.cloudinary.com/dlqcyupez/image/upload/v1520363908/img.jpg';

class ProfileCard extends Component {
  handleClick = () => {
    this.props.history.push('/doctor-profile');
  };

  render() {
    const visitReasons = [
      {
        text: 'Initial Consultation',
        value: 'Initial Consulation',
        key: 'Initial Consulation',
      },
      {
        text: 'Follow Up visit',
        value: 'Follow Up visit',
        key: 'Follow Up visit',
      },
    ];
    const insuranceOptions = [
      {
        text: "I'm Paying",
        value: "I'm Paying",
        key: "I'm Paying",
      },
      {
        text: 'Aetna',
        value: 'Aetna',
        key: 'Aetna',
      },
      {
        text: 'Anthem',
        value: 'Anthem',
        key: 'Anthem',
      },
    ];
    return (
      <div className="profile-card">
        <div className="card">
          <div className="card-header">
            <h1> Sammy Chitayat, M.D. </h1>
            <div className="header-details">
              <span className="sponsored">
                Sponsored
                <Icon name="help circle" />
              </span>
            </div>
          </div>
          <div className="result-body">
            <img className="profile-pic" src={image} />
            <div className="result-section">
              <div className="progress-bar">
                <span className="progress-name">Profile Points</span>
                <span className="progress-count">80/80</span>
                <span className="progress-graph">
                  <Progress color="blue" percent={100} size="tiny" />
                </span>
              </div>
            </div>
            <div className="result-location">
              <List>
                <List.Item>
                  <List.Icon name="location arrow" />
                  <List.Content>Main Location</List.Content>
                  <List.Description>315 Madison Ave. Room 509 New York, New York 10017</List.Description>
                </List.Item>
              </List>
            </div>
            <div className="result-highlights">
              <List>
                <List.Item>
                  <List.Icon name="star" />
                  <List.Content>Highlights</List.Content>
                  <List.Description>Board Certified</List.Description>
                </List.Item>
              </List>
            </div>
            <div className="result-summary">
              <List>
                <List.Item>
                  <List.Icon name="doctor" />
                  <List.Content>Summary</List.Content>
                  <List.Description>
                    Dr. Sammy Chitayat is a Board Certified practicing Internal Medicine ...READ MORE
                  </List.Description>
                </List.Item>
              </List>
            </div>
          </div>
          <div className="card-footer">
            <div className="result-phone">
              <Icon name="phone" flipped="horizontally" />
              (201) 380-6924
            </div>
            <div className="profile-actions">
              <div className="request-btn">
                <Modal
                  trigger={
                    <Button icon>
                      <Icon name="add to calendar" />Request Appointment
                    </Button>
                  }
                  closeIcon
                >
                  <Header icon="calendar" content="Dr. Sammy Chitaya" />
                  <Modal.Content>
                    <div className="inner-container">
                      <div className="content-left">
                        <Dropdown
                          placeholder="Select a reason for you visit"
                          fluid
                          selection
                          options={visitReasons}
                        />
                        <Dropdown
                          placeholder="Select your insurance company"
                          fluid
                          selection
                          options={insuranceOptions}
                        />
                      </div>
                      <div className="content-right">
                        <h5>Sammy Chitayat, MD</h5>

                        <p>315 Madison Ave. Room 509, New York</p>

                        <div>
                          <div>
                            <h5>PROVIDER</h5> Charles Polak
                          </div>
                          <div>
                            <h5>SPECIALTY</h5> Internal Medicine
                          </div>
                        </div>
                      </div>
                    </div>
                  </Modal.Content>
                 
                </Modal>
              </div>
              <div className="view-profile-btn">
                <Button icon onClick={this.handleClick}>
                  <Icon name="file text outline" />View Profile
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileCard;
