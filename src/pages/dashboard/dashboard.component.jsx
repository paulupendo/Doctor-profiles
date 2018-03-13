import React, { Component } from "react";
import { Divider } from "semantic-ui-react";

// Components

import NavBar from "../../common/navbar/NavBar.component";
import Search from "../../components/Search/Search.component";
import ProfileList from "../../components/Profile/ProfileList.component";

class DashBoard extends Component {
  render() {
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
