import React, { Component } from 'react';
import { Divider } from 'semantic-ui-react';

// Components
import NavBar from '../../common/navbar/NavBar.component';
import Search from '../../components/Search/Search.component';
import ProfileList from '../../components/Profile/ProfileList.component';
import GoogleMap from '../../components/Profile/GoogleMap.component';

class DashBoard extends Component {
  render() {
    const mapStyle = {
      width: '30rem',
      height: '10rem'
    };
    return (
      <div>
        <NavBar />
        <div className="dashboard-container">
          <Search />
          <ProfileList history={this.props.history} />
        </div>
      </div>
    );
  }
}

export default DashBoard;
