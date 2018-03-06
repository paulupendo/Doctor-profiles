import React, { Component } from 'react';
import { Divider } from 'semantic-ui-react';
//styles
import './dashboard.css';

// components
import NavBar from '../../common/navbar/NavBar.component';
import Search from '../../components/search/Search.component';

class DashBoard extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="dashboard-container">
          <Search />
          <div className="profile-container">dashboard</div>
        </div>
      </div>
    );
  }
}

export default DashBoard;
