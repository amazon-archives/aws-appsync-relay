/**
 * @flow
 * @relayHash cf7d4b01c32728d82525ed8752742742
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type TodoListUpdateSubscriptionVariables = {|
  user: string
|};
export type TodoListUpdateSubscriptionResponse = {|
  +updatedTodo: ?{|
    +node: ?{|
      +complete: boolean
    |}
  |}
|};
export type TodoListUpdateSubscription = {|
  variables: TodoListUpdateSubscriptionVariables,
  response: TodoListUpdateSubscriptionResponse,
|};
*/


/*
subscription TodoListUpdateSubscription(
  $user: ID!
) {
  updatedTodo(userId: $user) {
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
    "name": "user",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "userId",
    "variableName": "user",
    "type": "ID!"
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
  "operationKind": "subscription",
  "name": "TodoListUpdateSubscription",
  "id": null,
  "text": "subscription TodoListUpdateSubscription(\n  $user: ID!\n) {\n  updatedTodo(userId: $user) {\n    node {\n      complete\n      id\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "TodoListUpdateSubscription",
    "type": "Subscription",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "updatedTodo",
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
    "name": "TodoListUpdateSubscription",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "updatedTodo",
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
(node/*: any*/).hash = 'e9163b88adf21364a4289c3ff06a6610';
module.exports = node;
