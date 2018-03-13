import React, { Component } from "react";
import { Tab } from "semantic-ui-react";

import "./ProfileTabs.css";

const panes = [
  {
    menuItem: "Summary",
    render: () => <Tab.Pane>Tab 1 Content</Tab.Pane>
  },
  {
    menuItem: "Locations",
    render: () => <Tab.Pane>Tab 2 Content</Tab.Pane>
  },
  {
    menuItem: "Accepted Insurance",
    render: () => <Tab.Pane>Tab 3 Content</Tab.Pane>
  },
  {
    menuItem: "Service and fees",
    render: () => <Tab.Pane>Tab 3 Content</Tab.Pane>
  },
  {
    menuItem: "Reviews",
    render: () => <Tab.Pane>Tab 3 Content</Tab.Pane>
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
