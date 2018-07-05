import Amplify, {Analytics} from 'aws-amplify';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

const AC = APPSYNC_CONFIG;

Analytics.configure({disabled: true});
Amplify.configure({
  aws_appsync_graphqlEndpoint: AC.AppSyncEndpoint,
  aws_appsync_apiKey: AC.AppSyncKey,
  aws_appsync_region: AC.Region,
  aws_appsync_authenticationType: 'API_KEY'
});

const root = document.createElement('div');
document.body.appendChild(root);
ReactDOM.render(
  <App/>,
  root
);
