import React, { Component } from "react";

// styles
import "./ProfileList.scss";

// Components
import ProfileCard from "./ProfileCard.component";

class ProfileList extends Component {
  render() {
    return (
      <div>
        <ProfileCard history={this.props.history} />
      </div>
    );
  }
}

export default ProfileList;
