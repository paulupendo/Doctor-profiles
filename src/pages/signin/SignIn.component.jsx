import React, { Component } from 'react';
import { Button, Input } from 'semantic-ui-react';

// styles
import './SignIn.css';

class SignIn extends Component {
  handleClick = () => {
    this.props.history.push('/doctor-profile');
  };

  render() {
    const image =
      'http://res.cloudinary.com/dlqcyupez/image/upload/v1520499609/AlemHealthLogo.svg';

    return (
      <div className="sign-in-container">
        <div className="s-navbar">
          <img className="logo" src={image} />
        </div>
        <div className="s-card-header">
          <div className="s-card">
            <h4> Sign Into your AlemHealth Account </h4>
            <div className="btn-wrapper">
              <div role="top">
                <Input placeholder="Email" />
              </div>
              <div>
                <Input placeholder="Password" type="password" />
              </div>
              <div>
                <Input placeholder="Phone Number" />
              </div>
              <div>
                <Button content="Sign In" onClick={this.handleClick} />
              </div>
              <div role="bottom">
                Don't have an account? <a>Sign Up</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
