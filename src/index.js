import Amplify, {Analytics} from 'aws-amplify';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

const AC = APPSYNC_CONFIG;

Analytics.configure({disabled: true});
Amplify.configure({
  aws_appsync_graphqlEndpoint: AC.AppSyncEndpoint,
  aws_appsync_region: AC.AppSyncRegion,
  aws_appsync_authenticationType: 'AMAZON_COGNITO_USER_POOLS',
  Auth: {
    userPoolId: AC.UserPool,
    userPoolWebClientId: AC.ClientId,
  }
});

const root = document.createElement('div');
document.body.appendChild(root);
ReactDOM.render(
  <App/>,
  root
);
