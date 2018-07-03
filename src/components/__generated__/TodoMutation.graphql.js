/**
 * @flow
 * @relayHash f1756695b1baa53499d79f41f7b11597
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UpdateTodoInput = {
  id: string,
  complete?: ?boolean,
  clientMutationId?: ?string,
};
export type TodoMutationVariables = {|
  input: UpdateTodoInput
|};
export type TodoMutationResponse = {|
  +updateTodo: {|
    +node: ?{|
      +complete: boolean
    |}
  |}
|};
*/


/*
mutation TodoMutation(
  $input: UpdateTodoInput!
) {
  updateTodo(input: $input) {
    node {
      complete
      id
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "UpdateTodoInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "UpdateTodoInput!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "complete",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "TodoMutation",
  "id": null,
  "text": "mutation TodoMutation(\n  $input: UpdateTodoInput!\n) {\n  updateTodo(input: $input) {\n    node {\n      complete\n      id\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "TodoMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "updateTodo",
        "storageKey": null,
        "args": v1,
        "concreteType": "UpdateTodoPayload",
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
              v2
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "TodoMutation",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "updateTodo",
        "storageKey": null,
        "args": v1,
        "concreteType": "UpdateTodoPayload",
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
};
})();
// prettier-ignore
(node/*: any*/).hash = '9d8e3b97ccf6938322f1328d5e45b159';
module.exports = node;
