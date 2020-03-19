/**
 * @flow
 * @relayHash f845ab6d7c6b6852d63d35372b92fea5
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UpdateTodoInput = {|
  id: string,
  complete?: ?boolean,
  clientMutationId?: ?string,
|};
export type TodoUpdateMutationVariables = {|
  input: UpdateTodoInput
|};
export type TodoUpdateMutationResponse = {|
  +updateTodo: {|
    +node: ?{|
      +complete: boolean
    |},
    +userId: string,
  |}
|};
export type TodoUpdateMutation = {|
  variables: TodoUpdateMutationVariables,
  response: TodoUpdateMutationResponse,
|};
*/


/*
mutation TodoUpdateMutation(
  $input: UpdateTodoInput!
) {
  updateTodo(input: $input) {
    node {
      complete
      id
    }
    userId
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
    "variableName": "input"
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
  "name": "userId",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "TodoUpdateMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "updateTodo",
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
          },
          (v3/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "TodoUpdateMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "updateTodo",
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
          },
          (v3/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "TodoUpdateMutation",
    "id": null,
    "text": "mutation TodoUpdateMutation(\n  $input: UpdateTodoInput!\n) {\n  updateTodo(input: $input) {\n    node {\n      complete\n      id\n    }\n    userId\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '1686c973944c12c4375d14ccea72d991';

module.exports = node;
