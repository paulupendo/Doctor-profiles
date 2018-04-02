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
      IdentityPoolId: 'ap-southeast-1:194130111156',
      UserPoolId: 'ap-southeast-1_awUUyI24l',
      region: 'ap-southeast-1',
    };

    let userPool = new CognitoUserPool(poolData);
    let authenticationDetails = new AuthenticationDetails(userData);

    let cognitoUserData = {
      Username: userData.Username,
      Pool: userPool,
    };

    let cognitoUser = new CognitoUser(cognitoUserData);

    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: result => {
        console.log('access_token', result.getAccessToken().getJwtToken());

        AWS.config.credentials = new AWS.CognitoIdentityCredentials({
          Logins: {
            'cognito-idp.ap-southeast-1.amazon.com/194130111156': result
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

      onFailure: err => {
        reject(err.message);
      },
    });
  });
};

export const congnitoAuth = async userData => {
  await cognitoPromise(userData);
};
