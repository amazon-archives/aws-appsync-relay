/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type CreateTodo_viewer$ref: FragmentReference;
declare export opaque type CreateTodo_viewer$fragmentType: CreateTodo_viewer$ref;
export type CreateTodo_viewer = {|
  +id: ?string,
  +$refType: CreateTodo_viewer$ref,
|};
export type CreateTodo_viewer$data = CreateTodo_viewer;
export type CreateTodo_viewer$key = {
  +$data?: CreateTodo_viewer$data,
  +$fragmentRefs: CreateTodo_viewer$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "CreateTodo_viewer",
  "type": "Viewer",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'e5a0872ea82d8e63c9a2c4b13d61d791';

module.exports = node;
