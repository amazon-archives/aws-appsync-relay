/**
 * @flow
 * @relayHash 74f9758cddfa20ccc6e07de975556549
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateTodoSubscriptionVariables = {|
  user: string
|};
export type CreateTodoSubscriptionResponse = {|
  +createdTodo: ?{|
    +edge: ?{|
      +node: {|
        +text: string,
        +complete: boolean,
      |}
    |}
  |}
|};
export type CreateTodoSubscription = {|
  variables: CreateTodoSubscriptionVariables,
  response: CreateTodoSubscriptionResponse,
|};
*/


/*
subscription CreateTodoSubscription(
  $user: ID!
) {
  createdTodo(userId: $user) {
    edge {
      node {
        text
        complete
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
  "name": "text",
  "args": null,
  "storageKey": null
},
v3 = {
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
    "name": "CreateTodoSubscription",
    "type": "Subscription",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "createdTodo",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateTodoPayload",
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
                  (v2/*: any*/),
                  (v3/*: any*/)
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
    "name": "CreateTodoSubscription",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "createdTodo",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateTodoPayload",
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
                  (v2/*: any*/),
                  (v3/*: any*/),
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
  },
  "params": {
    "operationKind": "subscription",
    "name": "CreateTodoSubscription",
    "id": null,
    "text": "subscription CreateTodoSubscription(\n  $user: ID!\n) {\n  createdTodo(userId: $user) {\n    edge {\n      node {\n        text\n        complete\n        id\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'b0e4ce9c2f86588a82119eaa9ed7587e';

module.exports = node;
