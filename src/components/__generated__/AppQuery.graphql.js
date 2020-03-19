/**
 * @flow
 * @relayHash a7ae53e00192f8ff10118e322bd4f16f
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type CreateTodo_viewer$ref = any;
type TodoList_viewer$ref = any;
export type AppQueryVariables = {|
  count?: ?number
|};
export type AppQueryResponse = {|
  +viewer: {|
    +id: ?string,
    +$fragmentRefs: CreateTodo_viewer$ref & TodoList_viewer$ref,
  |}
|};
export type AppQuery = {|
  variables: AppQueryVariables,
  response: AppQueryResponse,
|};
*/


/*
query AppQuery(
  $count: Int
) {
  viewer {
    id
    ...CreateTodo_viewer
    ...TodoList_viewer_yu5n1
  }
}

fragment CreateTodo_viewer on Viewer {
  id
}

fragment TodoList_viewer_yu5n1 on Viewer {
  id
  ...Todo_viewer
  listTodos(first: $count) {
    edges {
      node {
        id
        ...Todo_todo
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}

fragment Todo_todo on Todo {
  id
  complete
  text
}

fragment Todo_viewer on Viewer {
  id
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "count",
    "type": "Int",
    "defaultValue": null
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v2 = [
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "count"
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "AppQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "kind": "FragmentSpread",
            "name": "CreateTodo_viewer",
            "args": null
          },
          {
            "kind": "FragmentSpread",
            "name": "TodoList_viewer",
            "args": [
              {
                "kind": "Variable",
                "name": "count",
                "variableName": "count"
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "AppQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "listTodos",
            "storageKey": null,
            "args": (v2/*: any*/),
            "concreteType": "TodoConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "edges",
                "storageKey": null,
                "args": null,
                "concreteType": "TodoEdge",
                "plural": true,
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
                      (v1/*: any*/),
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
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "__typename",
                        "args": null,
                        "storageKey": null
                      }
                    ]
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "cursor",
                    "args": null,
                    "storageKey": null
                  }
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "pageInfo",
                "storageKey": null,
                "args": null,
                "concreteType": "PageInfo",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "endCursor",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "hasNextPage",
                    "args": null,
                    "storageKey": null
                  }
                ]
              }
            ]
          },
          {
            "kind": "LinkedHandle",
            "alias": null,
            "name": "listTodos",
            "args": (v2/*: any*/),
            "handle": "connection",
            "key": "TodoList_listTodos",
            "filters": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "AppQuery",
    "id": null,
    "text": "query AppQuery(\n  $count: Int\n) {\n  viewer {\n    id\n    ...CreateTodo_viewer\n    ...TodoList_viewer_yu5n1\n  }\n}\n\nfragment CreateTodo_viewer on Viewer {\n  id\n}\n\nfragment TodoList_viewer_yu5n1 on Viewer {\n  id\n  ...Todo_viewer\n  listTodos(first: $count) {\n    edges {\n      node {\n        id\n        ...Todo_todo\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment Todo_todo on Todo {\n  id\n  complete\n  text\n}\n\nfragment Todo_viewer on Viewer {\n  id\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a8ade4fce8fc38befe514e37d4a42722';

module.exports = node;
