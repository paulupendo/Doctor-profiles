import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, Button } from 'semantic-ui-react';
import swal from 'sweetalert';

// components
import { Header } from '../../common/header/Header.component';
import user from '../../assets/user.png';

// styles
import './ProfileMatch.css';

class ProfileMatch extends Component {
  handleClick = () => {
    this.props.profileMatch.length !== 0
      ? this.props.history.push('/sign-in')
      : swal('Warning', 'You need a profile match to sign in !', 'warning');
  };

  render() {
    return (
      <div className="profile-match-container">
        <Header />
        <div className="inner-container">
          <div>
            <p>We've Found Your Profile !</p>
          </div>
          <div role="profile-details">
            <div>
              {this.props.profileMatch.length > 0 ? (
                <Image
                  src={this.props.profileMatch[0].profile_picture_url || user}
                />
              ) : (
                <Image src={user} />
              )}
            </div>
            <div role="info">
              <table>
                <tbody>
                  <tr className="spacer">
                    <td>Name:</td>
                    {this.props.profileMatch.length > 0 ? (
                      <td>
                        <h5>{this.props.profileMatch[0].name}</h5>
                      </td>
                    ) : (
                      <td>N/A</td>
                    )}
                  </tr>
                  <tr className="spacer">
                    <td> Specialty:</td>
                    {this.props.profileMatch.length > 0 ? (
                      <td>{this.props.profileMatch[0].specialties}</td>
                    ) : (
                      <td>N/A</td>
                    )}
                  </tr>
                  <tr className="spacer">
                    <td>Location:</td>
                    {this.props.profileMatch.length > 0 ? (
                      <td>{this.props.profileMatch[0].location}</td>
                    ) : (
                      <td>N/A</td>
                    )}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <Button content="SIGN IN" onClick={this.handleClick} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  profileMatch: state.signUpStats.fetchPhone,
});

export default connect(mapStateToProps)(ProfileMatch);
