import axios from 'axios';
import AWS from 'aws-sdk';
import {
  CognitoUserPool,
  CognitoUserAttribute,
  CognitoUser,
  AuthenticationDetails,
} from 'amazon-cognito-identity-js';

import * as apiConstants from './constants';

export const fetchPhoneNumber = phoneNumber => {
  let url_ = `${apiConstants.API_BASE_URL}?phone=${phoneNumber}`;
  return axios.get(url_).then(res => {
    return res.data;
  });
};

const cognitoPromise = userData => {
  return new Promise((resolve, reject) => {
    let poolData = {
      ClientId: '5ru1d7vc227d1k3gofgp0le9mo',
      UserPoolId: 'ap-southeast-1_awUUyI24l',
    };

    let userPool = new CognitoUserPool(poolData);
    let authenticationDetails = new AuthenticationDetails(userData);

    let cognitoUserData = {
      Username: userData.Username,
      Pool: userPool,
    };

    let cognitoUser = new CognitoUser(cognitoUserData);

    // let userAttribute = {
    //   name: 'paul',
    //   middle_name: 'Upendo',
    //   family_name: 'okango',
    //   email: 'paul@gmail.com',
    //   phone_number: '+254739200144',
    // };

    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: result => {
        console.log('access_token', result.getAccessToken().getJwtToken());

        AWS.config.region = 'ap-southeast-1';
        // AWS.config.credentials.clearCacheId()

        AWS.config.credentials = new AWS.CognitoIdentityCredentials({
          IdentityPoolId: 'ap-southeast-1:22fb3ec5-b020-487c-83b7-be1553f27737',
          Logins: {
            'cognito-idp.ap-southeast-1.amazonaws.com/ap-southeast-1_awUUyI24l': result
              .getAccessToken()
              .getJwtToken(),
          },
        });

        AWS.config.credentials.refresh(error => {
          if (error) {
            console.error(error);
          } else {
            resolve('Successfully logged!');
          }
        });
      },
      // newPasswordRequired: function(userAttributes, requiredAttributes) {
      //   userAttributes = userAttribute;
      //   cognitoUser.completeNewPasswordChallenge(
      //     'TestUs3r123$',
      //     userAttributes,
      //     this,
      //   );

      //   resolve('success');
      // },

      onFailure: err => {
        console.log(err);
        reject(err.message);
      },
    });
  });
};

export const congnitoAuth = async userData => {
  await cognitoPromise(userData);
};
