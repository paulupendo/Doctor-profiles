import React, { Component } from 'react';
import { Dropdown, Menu, Icon, Button } from 'semantic-ui-react';

//styles
import './NavBar.css';

const options = [
  { key: 1, text: 'Choice 1', value: 1 },
  { key: 2, text: 'Choice 2', value: 2 },
  { key: 3, text: 'Choice 3', value: 3 }
];

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
            <div className="menu_dropdown_btn">
              <Dropdown text="services" options={options} simple item />
            </div>
            <div className="menu_login_btn">
              <Button icon>
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
