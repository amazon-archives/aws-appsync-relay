/**
 * @flow
 * @relayHash 8b4d50ed556ac377075d314cf0fb0201
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateTodoInput = {
  text?: ?string,
  complete?: ?boolean,
  clientMutationId?: ?string,
};
export type CreateTodoMutationVariables = {|
  input: CreateTodoInput
|};
export type CreateTodoMutationResponse = {|
  +createTodo: {|
    +edge: ?{|
      +node: {|
        +complete: boolean,
        +text: ?string,
      |}
    |}
  |}
|};
*/


/*
mutation CreateTodoMutation(
  $input: CreateTodoInput!
) {
  createTodo(input: $input) {
    edge {
      node {
        complete
        text
        id
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "CreateTodoInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "CreateTodoInput!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "complete",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "text",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "CreateTodoMutation",
  "id": null,
  "text": "mutation CreateTodoMutation(\n  $input: CreateTodoInput!\n) {\n  createTodo(input: $input) {\n    edge {\n      node {\n        complete\n        text\n        id\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "CreateTodoMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "createTodo",
        "storageKey": null,
        "args": v1,
        "concreteType": "TodoPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edge",
            "storageKey": null,
            "args": null,
            "concreteType": "TodoEdge",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "Todo",
                "plural": false,
                "selections": [
                  v2,
                  v3
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "CreateTodoMutation",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "createTodo",
        "storageKey": null,
        "args": v1,
        "concreteType": "TodoPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edge",
            "storageKey": null,
            "args": null,
            "concreteType": "TodoEdge",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "Todo",
                "plural": false,
                "selections": [
                  v2,
                  v3,
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "id",
                    "args": null,
                    "storageKey": null
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '3b0c36c66e4cd1a6afe6fc3c47c20bbd';
module.exports = node;
