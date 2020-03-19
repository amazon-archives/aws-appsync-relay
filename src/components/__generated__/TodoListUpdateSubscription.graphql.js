/**
 * @flow
 * @relayHash 77c4b8104233a077c3993d66abe8c9ba
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
    "variableName": "user"
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
  "fragment": {
    "kind": "Fragment",
    "name": "TodoListUpdateSubscription",
    "type": "Subscription",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "updatedTodo",
        "storageKey": null,
        "args": (v1/*: any*/),
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
              (v2/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "TodoListUpdateSubscription",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "updatedTodo",
        "storageKey": null,
        "args": (v1/*: any*/),
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
              (v2/*: any*/),
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
  },
  "params": {
    "operationKind": "subscription",
    "name": "TodoListUpdateSubscription",
    "id": null,
    "text": "subscription TodoListUpdateSubscription(\n  $user: ID!\n) {\n  updatedTodo(userId: $user) {\n    node {\n      complete\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e9163b88adf21364a4289c3ff06a6610';

module.exports = node;
