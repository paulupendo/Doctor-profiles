import React, { Component } from 'react';
import { Divider } from 'semantic-ui-react';

// Components
import NavBar from '../../common/navbar/NavBar.component';
import Search from '../../components/Search/Search.component';
import ProfileList from '../../components/Profile/ProfileList.component';
import GoogleMap from '../../components/Profile/GoogleMap.component';

// styles
import "./dashboard.css";

class DashBoard extends Component {
  render() {
    const mapStyle = {
      width: "24rem",
      height: "20rem",
      marginRight: "1rem",
      border: "3px solid whitesmoke",
      borderRadius: "3px"
    };

    return (
      <div>
        <NavBar />
        <div className="dashboard-container">
          <Search />
          <div className="flex-row">
            <div className="profile-tabs">
              <ProfileList history={this.props.history} />
            </div>
            <div>
              <GoogleMap style={mapStyle} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DashBoard;
