import React, { Component } from 'react';
import { Step, Segment, Button, Divider } from 'semantic-ui-react';
import { connect } from 'react-redux';

// components
import { Header } from '../../common/header/Header.component';

// styles
import './Signup.css';

class SignUp extends Component {
  componentWillMount() {
    Object.keys(this.props.doctorDetails).length === 0 &&
      this.props.history.push('/');
  }

  render() {
    return (
      <div className="sign-up-container">
        <Header />
        <div className="inner-container">
          <Step.Group>
            <Step active>
              <Step.Content>
                <Step.Description>Required Details</Step.Description>
              </Step.Content>
            </Step>
            <Step>
              <Step.Content>
                <Step.Description>Additional Details</Step.Description>
              </Step.Content>
            </Step>
          </Step.Group>
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
                    ...this.props.doctorDetails.specialties,
                  ]}
                </h5>
              </div>
            </div>
            <Divider />
            <div className="medical-license-box">
              <div>* MEDICAL LICENSE</div>
              <div>
                <h5>
                  For verification please provide us with a copy of your medical
                  license
                </h5>
              </div>
              <div>
                <Button content="UPLOAD" />
              </div>
            </div>
          </Segment>
        </div>
        <div className="btn">
          <Button content="NEXT" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  doctorDetails: state.signUpStats.doctorDetails,
});

export default connect(mapStateToProps)(SignUp);
