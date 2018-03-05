import React, { Component } from 'react';

//styles
import './dashboard.css'

// components
import NavBar from '../../common/navbar/NavBar.component';

class DashBoard extends Component {
render() {
  return (
    <div>
      <NavBar />
      <div className="dashboard-container"> 
      <div className="search-container">
      </div>
       </div>

    </div>
  )
}
}
export default DashBoard;