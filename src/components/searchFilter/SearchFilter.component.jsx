import React, { Component } from 'react';
import { Dropdown, Button, Checkbox, Icon, Rating, Divider } from 'semantic-ui-react';

// styles
import './SearchFilter.css';

const options = [
  { key: 'AL', value: 'AL', text: 'Alabama' },
  { key: 2, text: 'Choice 2', value: 2 },
  { key: 3, text: 'Choice 3', value: 3 }
];

class SearchFilter extends Component {
  render() {
    return (
      <div className="filter-container">
        <div className="filter-text">
          <Icon color="blue" name="sliders" />
          <span> Filter : </span>
        </div>
        <div className="search-radius">
          <span className="radius-title">search radius </span>
        </div>

        <div className="search-radius">
          <span className="radius-title"> Provide Gender </span>
          <Dropdown text="Any Gender" selection options={options} simple item />
        </div>
        <div className="search-radius">
          <span className="radius-title"> Languages Spoken </span>
          <Dropdown text="Any Language" selection options={options} simple item />
        </div>
        <div className="search-radius">
          <span className="radius-title">profile points </span>
        </div>
        <div className="search-radius">
          <span className="radius-title"> Min rating </span>
          <Rating icon="star" defaultRating={3} maxRating={5} size="huge" />
        </div>
        <div className="filter-checkbox">
          <Checkbox label={{ children: 'BOARD CERTIFIED' }} />
        </div>
      </div>
    );
  }
}
export default SearchFilter;
