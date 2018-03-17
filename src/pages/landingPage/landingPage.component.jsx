import React from 'react';
import { Button, Input, Dropdown } from 'semantic-ui-react';

// styles
import './landingPage.css';

const LandingPage = () => {
  const image = 'http://res.cloudinary.com/dlqcyupez/image/upload/v1520253425/AlemHealthLogo_1.svg';
  return (
    <div className="site-container">
      <div className="site-jumbotron">
        <div className="site-nav-bar">
          <img src={image} />
          <div className="menulist">
            <ul>
              <li>Products</li>
              <li>Carrers</li>
              <li>Login</li>
            </ul>
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
          <Input placeholder="Speciality" />
          <Input placeholder="Country" />
          <div className="find-profile-btn">
            <Button> Find My Profile</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
`