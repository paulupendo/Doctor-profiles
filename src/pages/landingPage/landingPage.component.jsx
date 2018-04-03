import React, { Component } from 'react';
import {
  Image,
  Button,
  Icon,
  Input,
  Dropdown,
  Message,
} from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import swal from 'sweetalert';

// styles
import './landingPage.css';

// components
import specialties from '../../constants/SpecialtiesSuggestion';
import { Header } from '../../common/header/Header.component';

// actions
import { fetchPhone, addDetails } from '../../actions/signUpFlowActions';

class LandingPage extends Component {
  state = {
    phoneNumber: null,
    fullNames: null,
    doc_specialties: [],
    error: null,
    phoneError: null,
    fullNameError: null,
    specialtiesError: null,
  };

  componentWillReceiveProps(nextProps) {
    nextProps.fetchPhone_.length !== 0 &&
      this.props.history.push('/match-found');
  }

  validation = data => {
    let phoneNumber = data.phoneNumber;
    let specialties = data.specialties;
    let fullNames = data.fullNames;
    let regX = /\S/;

    if (
      phoneNumber === null ||
      specialties.length === 0 ||
      fullNames === null
    ) {
      this.setState({ error: 'All fields are required!' });
    } else if (!regX.test(phoneNumber) || !regX.test(fullNames)) {
      if (!regX.test(phoneNumber)) {
        this.setState({ phoneError: 'Phone Number cannot be empty!' });
      } else {
        this.setState({ fullNameError: 'Names cannot be empty!' });
      }
    } else if (isNaN(phoneNumber)) {
      this.setState({ phoneError: 'Phone Number should be digits only!' });
    } else {
      return true;
    }
  };

  handleClick = () => {
    let data = {
      phoneNumber: this.state.phoneNumber,
      specialties: this.state.doc_specialties,
      fullNames: this.state.fullNames,
    };

    let result = this.validation(data);
    console.log(result, 'HERE');
    if (result === true) {
      this.setState({ error: null });
      this.props.fetchPhone(data.phoneNumber);
      this.props.addDetails(data);
    }
  };

  handleChange = (e, key) => {
    this.setState({ [key]: e.target.value });
    key === 'phoneNumber' && this.setState({ phoneError: null });
    key === 'fullNames' && this.setState({ fullNameError: null });
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
              <p>
                {this.state.fullNameError !== null && this.state.fullNameError}
              </p>
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
              <p>{this.state.phoneError !== null && this.state.phoneError}</p>
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

const mapStateToProps = state => {
  console.log(state, 'STATE');
  return {
    errorMessage: state.signUpStats.errorMessage,
    fetchPhone_: state.signUpStats.fetchPhone,
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchPhone, addDetails }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
