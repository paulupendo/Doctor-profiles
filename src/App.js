import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// styles
import './App.css';

// components
import DashBoard from './pages/dashboard/dashboard.component';
import DoctorProfile from './pages/doctorProfile/doctorProfile.component';
import LandingPage from './pages/landingPage/landingPage.component';
import FindProfile from './pages/findProfile/findProfile.component'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route path="/find-a-doctor" component={DashBoard} />
              <Route path="/find-profile" component={FindProfile} />
              <Route path="/doctor-profile" component={DoctorProfile} /> /** Should have a doctor slug later on */
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
