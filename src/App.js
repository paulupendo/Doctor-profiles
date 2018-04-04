import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Amplify from 'aws-amplify';
import { withAuthenticator } from 'aws-amplify-react';

// styles
import './App.css';

// components
import DashBoard from './pages/dashboard/dashboard.component';
import DoctorProfile from './pages/doctorProfile/doctorProfile.component';
import LandingPage from './pages/landingPage/landingPage.component';
import FindProfile from './pages/findProfile/findProfile.component';
import SignUp from './pages/signup/Signup.component';
import SignIn from './pages/signin/SignIn.component';
import ProfileMatch from './pages/profileMatch/ProfileMatch.component';

import logo from './logo.svg';

Amplify.configure({
  Auth: {
    // REQUIRED - Amazon Cognito Identity Pool ID
    identityPoolId: 'ap-southeast-1:1587731b-52eb-4da9-afc9-6da483f8b66d',
    // REQUIRED - Amazon Cognito Region
    region: 'ap-southeast-1',
    // OPTIONAL - Amazon Cognito User Pool ID
    userPoolId: 'ap-southeast-1_GFjckZq8v',
    // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
    userPoolWebClientId: '4ab86dvce3uqdifvng4cnf9lti',
    // OPTIONAL - Enforce user authentication prior to accessing AWS resources or not
    mandatorySignIn: false,
  }
});

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route exact path="/sign-up" component={SignUp} />
              <Route path="/sign-in" component={SignIn} />
              <Route path="/find-a-doctor" component={DashBoard} />
              <Route path="/find-profile" component={FindProfile} />
              <Route path="/doctor-profile" component={DoctorProfile} /> /**
              Should have a doctor slug later on */
              <Route path="/match-found" component={ProfileMatch} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default withAuthenticator(App, { includeGreetings: true });
