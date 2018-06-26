import React from 'react';
import { QueryRenderer, graphql } from 'react-relay';

import TodoList from './TodoList';
import environment from '../environment';

export default class Hello extends React.Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        variables={{count: 5}}
        query={graphql`
          query HelloQuery($count: Int) {
            viewer {
              ...TodoList_viewer @arguments(count: $count)
            }
          }
        `}
        render={({error, props}) => {
          if (error) {
            return <div>{error.message}</div>;
          } else if (props) {
            return <TodoList viewer={props.viewer} />;
          }
          return <div>Loading...</div>;
        }}
      />
    );
  }
}
