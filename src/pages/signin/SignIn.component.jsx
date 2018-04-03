import React, { Component } from 'react';
import { Button, Input } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import swal from 'sweetalert';

// styles
import './SignIn.css';

// components
import { Header } from '../../common/header/Header.component';

// actions
import { loginRequest } from '../../actions/signUpFlowActions';

class SignIn extends Component {
  state = {
    email: null,
    password: null,
  };

  // componentWillReceiveProps(nextProps) {
  //   nextProps.errorMessage.length > 0 &&
  //     swal('Error', `${nextProps.errorMessage}`, 'error');
  // }

  handleChange = (e, key) => {
    this.setState({ [key]: e.target.value });
  };

  validation = data => {
    // let emailRe = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    // if (emailRe.test(data.Email)) {
    //   return true;
    // }
    // return 'Please use a valid email !';
    return true;
  };

  handleLogin = () => {
    let userData = {
      Username: this.state.email,
      Password: this.state.password,
    };

    let result = this.validation(userData);

    if (result === true) {
      this.props.loginRequest(userData);
    } else {
      swal('Warning', `${result}`, 'warning');
    }
  };

  render() {
    return (
      <div className="sign-in-container">
        <Header />
        <div className="inner-container">
          <p>Log Into Your Account</p>
          <div role="top">
            <Input
              placeholder="Email"
              onChange={e => this.handleChange(e, 'email')}
            />
          </div>
          <div>
            <Input
              placeholder="Password"
              onChange={e => this.handleChange(e, 'password')}
              type="password"
            />
          </div>
          <div>
            <Button content="LOGIN" onClick={this.handleLogin} />
          </div>
          <div role="bottom">
            <p>
              <a>Reset Your Password</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state, 'EHER');
  return {
    signInStats: state.signUpStats.signInStatus,
    errorMessage: state.signUpStats.errorMessage,
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ loginRequest }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
