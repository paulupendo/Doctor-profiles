import React, { Component } from 'react';
import { Image, Button, Icon, Input, Dropdown } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import swal from 'sweetalert';

// styles
import './landingPage.css';

// components
import specialties from '../../constants/SpecialtiesSuggestion';
import { Header } from '../../common/header/Header.component';

// actions
import { fetchPhone } from '../../actions/signUpFlowActions';

class LandingPage extends Component {
  state = {
    phoneNumber: null,
    fullNames: null,
    doc_specialties: [],
  };

  componentWillReceiveProps(nextProps) {
    nextProps.fetchPhone_.length !== 0 &&
      this.props.history.push('/match-found');
  }

  validation = data => {
    let phoneNumber = data.phoneNumber;
    if (isNaN(phoneNumber)) {
      return 'Phone Number should be digits only';
    }
    return true;
  };

  handleClick = () => {
    let data = { phoneNumber: this.state.phoneNumber };

    if (data.phoneNumber !== null) {
      let result = this.validation(data);

      if (result === true) {
        this.props.fetchPhone(data.phoneNumber);
      } else {
        swal('Warning', `${result}`, 'warning');
      }
    } else {
      swal('Warning', 'Your phone number is required', 'warning');
    }
  };

  handleChange = (e, key) => {
    this.setState({ [key]: e.target.value });
  };

  handleDropDownChange = (e, { value }) => {
    this.setState({ doc_specialties: value });
    
  };

  render() {
    const image =
      'https://res.cloudinary.com/dn0czddtv/image/upload/v1522172994/AlemLogoFinal.svg';

    return (
      <div className="container">
        <Header />
        <div className="inner-container">
          <div className="containers containers__left">
            <div role="top">
              <Icon name="heartbeat" />
            </div>
            <div role="header">
              <h4>Welcome to Alemhealth Services</h4>
              <span>for Doctors</span>
            </div>
            <div role="sub-header">
              <h5>Find you profile to start using our platform</h5>
            </div>
          </div>
          <div className="containers containers__right">
            <div className="btn-display" role="top">
              <span>FULL NAME</span>
              <Input
                placeholder="IvanPavlov"
                onChange={e => this.handleChange(e, 'fullNames')}
              />
            </div>
            <div className="btn-display">
              <span>SPECIALTY</span>
              <Dropdown
                placeholder="General Medicine"
                multiple
                search
                selection
                options={specialties}
                onChange={this.handleDropDownChange}
              />
            </div>
            <div className="btn-display">
              <span>PHONE NUMBER</span>
              <Input
                placeholder="+123 45"
                onChange={e => this.handleChange(e, 'phoneNumber')}
              />
            </div>
            <div className="btn-display">
              <Button content="FIND MY PROFILE" onClick={this.handleClick} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  errorMessage: state.signUpStats.errorMessage,
  fetchPhone_: state.signUpStats.fetchPhone,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchPhone }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
