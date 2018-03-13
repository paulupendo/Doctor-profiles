import React, { Component } from "react";

import NavBar from "../../common/navbar/NavBar.component";
import ProfileHeader from "../../components/Profile/ProfileHeader.component";
import ProfileBio from "../../components/Profile/ProfileBio.component";
import GoogleMap from "../../components/Profile/GoogleMap.component";
import ProfileTab from "../../components/Profile/ProfileTabs.component";

// styles
import "./doctorProfile.css";

export default class DoctorProfile extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="dashboard-container">
          <div className="doctor-profile-container">
            <ProfileHeader history={this.props.history} />
            <ProfileBio />
            <GoogleMap />
            <ProfileTab />
          </div>
        </div>
      </div>
    );
  }
}
