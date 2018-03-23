import React, { Component } from 'react';

// styles
import './findProfile.css';

// components
import FindProfileCard from '../../components/FindProfileCard/FindProfileCard.component';

class FindProfile extends Component {
  handleClick = () => {
    this.props.history.push('/sign-up');
  };
  render() {
    const image = 'http://res.cloudinary.com/dlqcyupez/image/upload/v1520499609/AlemHealthLogo.svg';
    return (
      <div className="find-container">
        <div className="find-navbar">
          <img className="logo" src={image} />
        </div>
        <div className="header-container">
          <div className="header">
            <h1> Select your Profile </h1>
            <p onClick={this.handleClick}> Cant find your Profile ?</p>
          </div>
          <div className="user-lists">
            <FindProfileCard />
            <FindProfileCard />
            <FindProfileCard />
          </div>
        </div>
      </div>
    );
  }
}

export default FindProfile;
