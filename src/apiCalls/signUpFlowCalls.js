import axios from 'axios';
import AWS from 'aws-sdk';
import {
  CognitoUserPool,
  CognitoUserAttribute,
  CognitoUser,
  AuthenticationDetails,
} from 'amazon-cognito-identity-js';
import Amplify, { Auth } from 'aws-amplify';

import * as apiConstants from './constants';

Amplify.configure({
  Auth: {
    identityPoolId: 'ap-southeast-1:1587731b-52eb-4da9-afc9-6da483f8b66d',
    region: 'ap-southeast-1',
    userPoolId: 'ap-southeast-1_GFjckZq8v',
    userPoolWebClientId: '4ab86dvce3uqdifvng4cnf9lti',
    mandatorySignIn: false,
  },
});

export const fetchPhoneNumber = phoneNumber => {
  let url_ = `${apiConstants.API_BASE_URL}?phone=${phoneNumber}`;
  return axios.get(url_).then(res => {
    return res.data;
  });
};

export const amplifyAuth = userData => {
  return Auth.signIn(userData.username, userData.password).then(user => user);
};
