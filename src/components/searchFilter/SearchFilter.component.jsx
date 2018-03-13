import React, { Component } from "react";
import {
  Dropdown,
  Button,
  Checkbox,
  Icon,
  Rating,
  Divider
} from "semantic-ui-react";

// styles
import "./SearchFilter.css";

const options = [
  { key: "AL", value: "AL", text: "Alabama" },
  { key: 2, text: "Choice 2", value: 2 },
  { key: 3, text: "Choice 3", value: 3 }
];

const genderOptions = [
  { key: 'male', value: 'MALE', text: 'Male'},
  { key: 'female', value: 'FEMALE', text: 'Female'}
]

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

        <div className="filter-gender">
          <span className="gender-text"> Provide Gender </span>
          <Dropdown text="Any Gender" selection options={genderOptions} simple item />
        </div>

        <div className="filter-language">
          <span className="language-text"> Languages Spoken </span>
          <Dropdown
            text="Any Language"
            selection
            options={options}
            simple
            item
          />
        </div>

        <div className="filter-points">
          <span className="points-text">profile points </span>
        </div>
      </div>
    );
  }
}
export default SearchFilter;
