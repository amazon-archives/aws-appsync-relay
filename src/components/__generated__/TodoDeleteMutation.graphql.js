/**
 * @flow
 * @relayHash f5355d63d6dd2cb50bdb5ad7b7267b0e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteTodoInput = {
  id: string,
  clientMutationId?: ?string,
};
export type TodoDeleteMutationVariables = {|
  input: DeleteTodoInput
|};
export type TodoDeleteMutationResponse = {|
  +deleteTodo: {|
    +deletedId: ?string,
    +userId: string,
  |}
|};
export type TodoDeleteMutation = {|
  variables: TodoDeleteMutationVariables,
  response: TodoDeleteMutationResponse,
|};
*/


/*
mutation TodoDeleteMutation(
  $input: DeleteTodoInput!
) {
  deleteTodo(input: $input) {
    deletedId
    userId
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "DeleteTodoInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "deleteTodo",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "DeleteTodoInput!"
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
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "userId",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "TodoDeleteMutation",
  "id": null,
  "text": "mutation TodoDeleteMutation(\n  $input: DeleteTodoInput!\n) {\n  deleteTodo(input: $input) {\n    deletedId\n    userId\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "TodoDeleteMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "TodoDeleteMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '5c1d2d514aaf1983d6103c59835731bb';
module.exports = node;
