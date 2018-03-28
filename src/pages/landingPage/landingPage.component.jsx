import React, { Component } from 'react';
import { Image, Button, Icon, Input, Dropdown } from 'semantic-ui-react';

// styles
import './landingPage.css';

// components
import specialties from '../../constants/SpecialtiesSuggestion';

class LandingPage extends Component {
  handleClick = () => {
    this.props.history.push('/find-profile');
  };

  render() {
    const image =
      'https://res.cloudinary.com/dn0czddtv/image/upload/v1522172994/AlemLogoFinal.svg';

    const specialty = [
      { key: 'Gen', value: 'General Medicine', text: 'General medicine' },
    ];

    return (
      <div className="container">
        <div className="header-container">
          <div>
            <Image src={image} />
          </div>
          <div>
            <Button content="CONTACT US" />
          </div>
        </div>
        <div className="inner-container">
          <div className="containers containers__left">
            <div role="top">
              <Icon name="heartbeat" />
            </div>
            <div role="header">
              <h4>Welcome to Alemhealth Services</h4>
              <span>for Doctors</span>
            </div>
            <div role="sub-header">
              <h5>Find you profile to start using our platform</h5>
            </div>
          </div>
          <div className="containers containers__right">
            <div className="btn-display" role="top">
              <span>FULL NAME</span>
              <Input placeholder="IvanPavlov" />
            </div>
            <div className="btn-display">
              <span>SPECIALTY</span>
              <Dropdown
                placeholder="General Medicine"
                multiple
                search
                selection
                options={specialties}
              />
            </div>
            <div className="btn-display">
              <span>PHONE NUMBER</span>
              <Input placeholder="+123 45" />
            </div>
            <div className="btn-display">
              <Button content="FIND MY PROFILE" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
