import React, { Component } from 'react';
import { Dropdown, Menu, Icon, Button } from 'semantic-ui-react';

//styles
import './NavBar.css';

class NavBar extends Component {
  render() {
    const image = 'http://res.cloudinary.com/dlqcyupez/image/upload/v1520253425/AlemHealthLogo_1.svg';
    return (
      <div className="nav-bar">
        <div className="left-nav-section">
          <img className="logo" src={image} />
        </div>
        <div className="right-nav-section">
          <div className="menu">
            <span> Find a doctor </span>
          </div>
          <div className="menu_buttons">
            <div className="menu_demo_btn">
              <Button>free demo</Button>
            </div>
            <div className="menu_login_btn">
              <Button icon basic>
                {' '}
                <Icon name="lock" />login
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default NavBar;
