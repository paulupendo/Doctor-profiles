import React, { Component } from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

// styles
import './App.css';

// components
import DashBoard from './pages/dashboard/dashboard.component';

class App extends Component {

  render() {
    return (
        <Router>
          <div className="App">
          <div className="App-header">
          <Route exact path="/" component={DashBoard}/>
          </div>
          </div>
        </Router>

    );
  }
}

export default App;