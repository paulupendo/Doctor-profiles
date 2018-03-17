import React, { Component } from 'react';

import NavBar from '../../common/navbar/NavBar.component';
import ProfileHeader from '../../components/Profile/ProfileHeader.component';
import ProfileBio from '../../components/Profile/ProfileBio.component';
import GoogleMap from '../../components/Profile/GoogleMap.component';
import ProfileTab from '../../components/Profile/ProfileTabs.component';

// styles
import './doctorProfile.css';

export default class DoctorProfile extends Component {
  render() {
    const mapStyle = {
      width: "100%",
      height: "250px",
      position: "relative",
      overflow: "hidden",
      marginTop: "2rem",
      marginBottom: "1.5rem",
      border: "3px solid whitesmoke",
      borderRadius: "3px",
    };

    return (
      <div>
        <NavBar />
        <div className="dashboard-container">
          <div className="doctor-profile-container">
            <ProfileHeader history={this.props.history} />
            <ProfileBio />
            <GoogleMap style={mapStyle} />
            <ProfileTab />
          </div>
        </div>
      </div>
    );
  }
}
