import React, { Component } from 'react';

// styles
import './Signup.css';

class SignUp extends Component {
  render() {
    const image = 'http://res.cloudinary.com/dlqcyupez/image/upload/v1520499609/AlemHealthLogo.svg';
    return (
      <div className="sign-up-container">
        <div className="s-navbar">
          <img className="logo" src={image} />
        </div>
        <div className="s-card-header">
        <div className="s-card">
        <h1> Create Your AlemHealth Account </h1>git 
        </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
