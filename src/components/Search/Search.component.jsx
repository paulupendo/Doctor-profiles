import React, { Component } from 'react';
import { Dropdown, Menu, Divider, Button, Segment, Icon } from 'semantic-ui-react';

// styles
import './Search.css';

import SearchFilter from '../searchFilter/SearchFilter.component';

const options = [
  { key: 'AL', value: 'AL', text: 'Alabama' },
  { key: 2, text: 'Choice 2', value: 2 },
  { key: 3, text: 'Choice 3', value: 3 }
];
class Search extends Component {
  render() {
    return (
      <div className="search-container">
        <Segment>
          <div className="search-terms">
            <div className="specialty">
              <span className="specialty-text"> specialty </span>
              <Dropdown text="Specialty" search selection options={options} simple item />
            </div>
            <div className="specialty">
              <span className="specialty-text"> Location </span>
              <Dropdown text="New York, NY" search selection options={options} simple item />
            </div>
            <div className="specialty">
              <span className="specialty-text"> Insurance Carrier </span>
              <Dropdown text="Any Carrier" search selection options={options} simple item />
            </div>
            <div className="specialty">
              <span className="specialty-text"> Insurance Plan </span>
              <Dropdown disabled text="Any Plan" search selection options={options} simple item />
            </div>
            <div className="search-btn">
              <Button>
                <Icon name="search" />New search
              </Button>
            </div>
          </div>
          <Divider section />
          <SearchFilter />
        </Segment>
      </div>
    );
  }
}
export default Search;
