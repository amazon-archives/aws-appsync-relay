import React from 'react';
import { QueryRenderer, graphql } from 'react-relay';

import environment from '../environment';

export default class Hello extends React.Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query HelloQuery {
            viewer {
              message
            }
          }
        `}
        render={({error, props}) => {
          if (error) {
            return <div>{error.message}</div>;
          } else if (props) {
            return <div>{props.viewer.message}</div>;
          }
          return <div>Loading...</div>;
        }}
      />
    );
  }
}
