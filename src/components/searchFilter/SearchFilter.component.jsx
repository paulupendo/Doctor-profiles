import React, { Component } from 'react';
import { Dropdown, Menu, Divider, Button, Segment, Icon } from 'semantic-ui-react';

// styles
import './SearchFilter.css';

class SearchFilter extends Component {
  render() {
    return (
      <div className="filter-container">
        <div className="filter-text">
          <Icon color="blue" name="filter" />
          <span> Filter : </span>
        </div>
        <div className="search-radius">
        <span className="radius-title">search radius </span>
        
        </div>
      </div>
    );
  }
}
export default SearchFilter;
