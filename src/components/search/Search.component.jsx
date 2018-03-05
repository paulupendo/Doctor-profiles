import React, { Component } from 'react';
import { Dropdown, Menu ,Divider, Button, Segment, Icon } from 'semantic-ui-react'

// styles
import './Search.css'

const options = [
  { key: 1, text: 'Choice 1', value: 1 },
  { key: 2, text: 'Choice 2', value: 2 },
  { key: 3, text: 'Choice 3', value: 3 },
]
class Search extends Component {
    render () {
        return (
            <div className="search-container"> 
  <Segment>
   <Button  icon floated='right'><Icon name='search' />New search</Button>
   Specialty
    <Divider section />
    Filter:
  </Segment>
            </div>
        )
    }
}
export default Search