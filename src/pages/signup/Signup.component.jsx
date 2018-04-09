import React, { Component } from 'react';
import { Step, Segment, Button, Divider, Input } from 'semantic-ui-react';
import { connect } from 'react-redux';

// components
import { Header } from '../../common/header/Header.component';

// styles
import './Signup.css';

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      isActive: false,
      active: true,
      activeForm: 'Required'
    };
  }
  componentWillMount() {
    // Object.keys(this.props.doctorDetails).length === 0 &&
    //   this.props.history.push('/');
  }

  handleClick = () => {
    this.setState({
      isActive: true,
      active: false,
      activeForm: 'Additional'
    });
  };

  handleActiveForm = () => {
    this.setState({
      isActive: false,
      active: true,
      activeForm: 'Required'
    });
  };

  render() {
    const img =
      'http://res.cloudinary.com/dlqcyupez/image/upload/v1523277200/field-profilephoto.svg';
    return (
      <div className="sign-up-container">
        <Header />
        <div className="inner-container">
          <Step.Group>
            <Step active={this.state.active} onClick={this.handleActiveForm}>
              <Step.Content>
                <Step.Description>Required Details</Step.Description>
              </Step.Content>
            </Step>
            <Step active={this.state.isActive}>
              <Step.Content>
                <Step.Description>Additional Details</Step.Description>
              </Step.Content>
            </Step>
          </Step.Group>
          {this.state.activeForm === 'Required' ? (
            <Segment attached>
              <div className="header-info">
                <div className="title">BASIC INFORMATION</div>
                <div>
                  <Button content="EDIT" />
                </div>
              </div>
              <div className="personal-info">
                <div>
                  <span>FULL NAME</span>
                  <h5>{this.props.doctorDetails.fullNames}</h5>
                </div>
                <div>
                  <span>PHONE NUMBER</span>
                  <h5>{this.props.doctorDetails.phoneNumber}</h5>
                </div>
              </div>
              <div className="doc-specialty">
                <div>
                  <span>SPECIALTY</span>
                  <h5>
                    {Object.keys(this.props.doctorDetails).length !== 0 && [
                      ...this.props.doctorDetails.specialties
                    ]}
                  </h5>
                </div>
              </div>
              <Divider />
              <div className="medical-license-box">
                <div>* MEDICAL LICENSE</div>
                <div>
                  <h5>
                    For verification please provide us with a copy of your
                    medical license
                  </h5>
                </div>
                <div>
                  <Button content="UPLOAD" />
                </div>
              </div>
            </Segment>
          ) : (
            <Segment attached>
              <div className="additional-details">
                <div className="additional-header">
                  <img src={img} />
                  <div className="user-title">
                    <h2>
                      {' '}
                      {this.props.doctorDetails.fullNames || 'Jimmy Kimani'}
                    </h2>
                    <span>
                      {' '}
                      {this.props.doctorDetails.phoneNumber || '+899812345678'}
                    </span>
                    <h5>
                      {Object.keys(this.props.doctorDetails).length !== 0 && [
                        ...this.props.doctorDetails.specialties
                      ]}
                    </h5>
                  </div>
                  <div className="additinal-info">
                    <Input placeholder="Email-address" />
                    <Input placeholder="City/State" />
                  </div>
                </div>
                <Divider />
                <div className="education-box">
                  <div>EDUCATION</div>
                  <div className="input-container">
                    <Input placeholder="School or Training Institution" />
                    <Input placeholder="Year-Graduated " />
                  </div>
                  <Input placeholder="Qualification" />
                </div>
              </div>
            </Segment>
          )}
        </div>
        <div className="btn">
          <Button content="NEXT" onClick={this.handleClick} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  doctorDetails: state.signUpStats.doctorDetails
});

export default connect(mapStateToProps)(SignUp);
