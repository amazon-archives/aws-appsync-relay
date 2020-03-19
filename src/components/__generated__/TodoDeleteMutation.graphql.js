/**
 * @flow
 * @relayHash 7660fcecdce96d3b6116b9ebd6a913a3
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteTodoInput = {|
  id: string,
  clientMutationId?: ?string,
|};
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
        "variableName": "input"
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
  "fragment": {
    "kind": "Fragment",
    "name": "TodoDeleteMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "TodoDeleteMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "TodoDeleteMutation",
    "id": null,
    "text": "mutation TodoDeleteMutation(\n  $input: DeleteTodoInput!\n) {\n  deleteTodo(input: $input) {\n    deletedId\n    userId\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '5c1d2d514aaf1983d6103c59835731bb';

module.exports = node;
