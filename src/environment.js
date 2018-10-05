// Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import { API, graphqlOperation } from 'aws-amplify';
import { Environment, Network, RecordSource, Store } from 'relay-runtime';


function fetchQuery(operation, variables) {
  return API.graphql(graphqlOperation(operation.text, variables));
}

function subscribe(operation, variables) {
  return API.graphql(graphqlOperation(operation.text, variables)).map(({value})=>value);
}

const environment = new Environment({
  network: Network.create(fetchQuery, subscribe),
  store: new Store(new RecordSource()),
});

export default environment;
