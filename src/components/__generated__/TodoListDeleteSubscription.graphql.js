/**
 * @flow
 * @relayHash 9732a7560b7f32ac078a21e5bd2ce29e
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
        "variableName": "user",
        "type": "ID!"
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
  "operationKind": "subscription",
  "name": "TodoListDeleteSubscription",
  "id": null,
  "text": "subscription TodoListDeleteSubscription(\n  $user: ID!\n) {\n  deletedTodo(userId: $user) {\n    deletedId\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "TodoListDeleteSubscription",
    "type": "Subscription",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "TodoListDeleteSubscription",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'cce9c768f846af9534b3df1c9aac67bc';
module.exports = node;
