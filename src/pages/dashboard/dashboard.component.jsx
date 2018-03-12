import React, { Component } from 'react';
import { Divider } from 'semantic-ui-react';

// Styles
import './dashboard.css';

// Components
import NavBar from '../../common/navbar/NavBar.component';
import Search from '../../components/Search/Search.component';
import ProfileList from '../../components/Profile/ProfileList.component';

class DashBoard extends Component {
  render() {
    return (
      <div>
        <NavBar />

        <div className="dashboard-container">
          <Search />
          <ProfileList />
          <ProfileList />
          <ProfileList />
              <h3>My Google Maps Demo</h3>
    <div id="map"></div>
        </div>
      </div>
    );
  }
}

export default DashBoard;
