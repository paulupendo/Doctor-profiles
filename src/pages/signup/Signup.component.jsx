import React, { Component } from "react";
import { Input, Dropdown, Button } from "semantic-ui-react";

// styles
import './Signup.css';

class SignUp extends Component {
  render() {
    const image =
      "http://res.cloudinary.com/dlqcyupez/image/upload/v1520499609/AlemHealthLogo.svg";
    return <div className="sign-up-container">
        <div className="s-navbar">
          <img className="logo" src={image} />
        </div>
        <div className="s-card-header">
          <div className="s-card">
            <h1> Create Your AlemHealth Account </h1>
            <div className="signup-container">
              <div className="input-container">
                <Input placeholder="First Name" />
                <Input placeholder="Last Name" />
              </div>
              <div className="input-container">
                <Input placeholder="Email" />
                <Input placeholder="Phone Number" />
              </div>
              <div className="input-container">
                <Input placeholder="Password" />
                <Input placeholder="Confirm Password" />
              </div>
              <div className="s-dropdown">
                <Dropdown placeholder="Speciality" fluid selection />
                <Dropdown placeholder="Office Hours" fluid selection />
              </div>
              <div className="su-dropdown">
                <Dropdown placeholder="Gender" fluid selection />
                <Dropdown placeholder="Language" fluid selection />
                <Dropdown placeholder="Country" fluid selection />
              </div>
            </div>
            <div className="s-btn">
              <Button>Sign Up</Button>
            </div>
          </div>
        </div>
      </div>;
  }
}

export default SignUp;
