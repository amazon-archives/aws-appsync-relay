/**
 * @flow
 * @relayHash b892c2eab8f9304330fc691787a98fcc
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type TodoListDeleteSubscriptionVariables = {|
  user: string
|};
export type TodoListDeleteSubscriptionResponse = {|
  +deletedTodo: ?{|
    +deletedId: ?string
  |}
|};
export type TodoListDeleteSubscription = {|
  variables: TodoListDeleteSubscriptionVariables,
  response: TodoListDeleteSubscriptionResponse,
|};
*/


/*
subscription TodoListDeleteSubscription(
  $user: ID!
) {
  deletedTodo(userId: $user) {
    deletedId
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
    "kind": "LinkedField",
    "alias": null,
    "name": "deletedTodo",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "userId",
        "variableName": "user"
      }
    ],
    "concreteType": "DeleteTodoPayload",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "deletedId",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "TodoListDeleteSubscription",
    "type": "Subscription",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "TodoListDeleteSubscription",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "subscription",
    "name": "TodoListDeleteSubscription",
    "id": null,
    "text": "subscription TodoListDeleteSubscription(\n  $user: ID!\n) {\n  deletedTodo(userId: $user) {\n    deletedId\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'cce9c768f846af9534b3df1c9aac67bc';

module.exports = node;
