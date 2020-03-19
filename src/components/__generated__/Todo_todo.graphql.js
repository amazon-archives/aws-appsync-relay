/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Todo_todo$ref: FragmentReference;
declare export opaque type Todo_todo$fragmentType: Todo_todo$ref;
export type Todo_todo = {|
  +id: ?string,
  +complete: boolean,
  +text: string,
  +$refType: Todo_todo$ref,
|};
export type Todo_todo$data = Todo_todo;
export type Todo_todo$key = {
  +$data?: Todo_todo$data,
  +$fragmentRefs: Todo_todo$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "Todo_todo",
  "type": "Todo",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "complete",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "text",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '1bacf21a9a7fd8b20040bec87f55c267';

module.exports = node;
