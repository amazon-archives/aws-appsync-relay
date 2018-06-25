import Amplify, {Analytics} from 'aws-amplify';
import React from 'react';
import ReactDOM from 'react-dom';

import Hello from './components/Hello';

const AC = APPSYNC_CONFIG;

Analytics.configure({disabled: true});
Amplify.configure({
  aws_appsync_graphqlEndpoint: AC.Endpoint,
  aws_appsync_apiKey: AC.Key,
  aws_appsync_region: AC.Region,
  aws_appsync_authenticationType: 'API_KEY'
});

const root = document.createElement('div');
document.body.appendChild(root);
ReactDOM.render(
  <Hello />,
  root
);
