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
    emailError: null,
    errorMessage: this.props.errorMessage,
  };

  componentWillReceiveProps(nextProps) {
    nextProps.errorMessage !== null &&
      swal('Error', `${nextProps.errorMessage}`, 'error');
  }

  handleChange = (e, key) => {
    this.setState({ [key]: e.target.value });
    key === 'email' && this.setState({ emailError: null });
  };

  validation = data => {
    let emailRe = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (emailRe.test(data.username)) {
      return true;
    } else if (!emailRe.test(data.username)) {
      return 'Please use a valid email !';
    }
  };

  handleLogin = async () => {
    let userData = {
      username: this.state.email,
      password: this.state.password,
    };

    let result = this.validation(userData);

    if (result === true) {
      this.props.loginRequest(userData);
      this.props.signInStats
        ? this.setState({ errorMessage: null })
        : this.state.errorMessage !== null &&
          swal('Error', `${this.state.errorMessage}`, 'error');
    } else {
      this.setState({ emailError: result });
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
            <p>{this.state.emailError !== null && this.state.emailError}</p>
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
  return {
    signInStats: state.signUpStats.signInStatus,
    errorMessage: state.signUpStats.errorMessage,
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ loginRequest }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
