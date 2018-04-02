import React, { Component } from 'react';
import { Tab } from 'semantic-ui-react';

// components
import SummaryTab from './SummaryTab.component';
import LocationTab from './LocationTab.component';
import InsuranceTab from './InsuranceTab.component';
import ServicesTab from './ServicesTab.component';

// styles
import './ProfileTabs.css';

const panes = [
  {
    menuItem: 'Summary',
    render: () => (
      <Tab.Pane>
        <SummaryTab />
      </Tab.Pane>
    )
  },
  {
    menuItem: 'Locations',
    render: () => (
      <Tab.Pane>
        <LocationTab />
      </Tab.Pane>
    )
  },
  {
    menuItem: 'Accepted Insurance',
    render: () => (
      <Tab.Pane>
        <InsuranceTab />
      </Tab.Pane>
    )
  },
  {
    menuItem: 'Service and fees',
    render: () => (
      <Tab.Pane>
        <ServicesTab />
      </Tab.Pane>
    )
  }
];

export default class ProfileTab extends Component {
  render() {
    return (
      <div className="profile-tab">
        <Tab menu={{ pointing: true }} panes={panes} />
      </div>
    );
  }
}
