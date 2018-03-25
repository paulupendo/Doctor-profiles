import React, { Component } from 'react';
import { Button, Input, Dropdown } from 'semantic-ui-react';

// styles
import './landingPage.css';

class LandingPage extends Component {
  handleClick = () => {
    this.props.history.push('/find-profile');
  };

  render() {
    const image =
      'http://res.cloudinary.com/dlqcyupez/image/upload/v1520253425/AlemHealthLogo_1.svg';

    return (
      <div className="site-container">
        <div className="site-jumbotron">
          <div className="site-nav-bar">
            <img src={image} />
            <div className="menulist">
              <ul>
                <li>Products</li>
                <li>Carrers</li>
              </ul>
              <Button> Login </Button>
            </div>
          </div>
          <div className="site-header">
            <h1>
              Join over half a million healthcare <br />
              professionals on AlemHealth!
            </h1>
            <h2> Enter your first and last name to claim your profile </h2>
          </div>
          <div className="finder-input">
            <Input placeholder="First Name" />
            <Input placeholder="Last Name" />
            <Dropdown placeholder="Speciality" search selection />
            <Dropdown placeholder="Country" search selection />
            <div className="find-profile-btn">
              <Button onClick={this.handleClick}> Find My Profile</Button>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="detail-section">
            <h2>
              Lorem ipsum dolor sit amet, consectetur adipiscing <br />
              Lorem ipsum dolor sit amet
            </h2>
          </div>
          <div className="content-section">
            <p>
              Lorem ipsum dolor sit amet <br />
              Lorem ipsum dolor sit
            </p>

            <p>
              Lorem ipsum dolor sit amet <br />
              Lorem ipsum dolor sit
            </p>
            <p>
              Lorem ipsum dolor sit amet <br />
              Lorem ipsum dolor sit
            </p>
          </div>
          <div className="footer">
            <div className="footer-content">
              <div className="nav-column">
                <h4> About </h4>
                <ul>
                  <li>Company</li>
                  <li>Press</li>
                  <li>Products</li>
                </ul>
              </div>
              <div className="nav-column">
                <h4> Carrers </h4>
                <ul>
                  <li>Open Postions</li>
                </ul>
              </div>
              <div className="nav-column">
                <h4> Find a doctor</h4>
                <ul>
                  <li>Company</li>
                  <li>Press</li>
                  <li>Products</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="site-footer">2018 AlemHealth.com Pte. Ltd</div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
