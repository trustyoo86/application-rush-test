// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import * as Belt_List from "rescript/lib/es6/belt_List.js";
import * as Belt_Array from "rescript/lib/es6/belt_Array.js";

function Lists(Props) {
  var items = Belt_Array.map(Belt_List.toArray({
            hd: {
              id: "todo1",
              text: "Todo 1"
            },
            tl: {
              hd: {
                id: "todo2",
                text: "Todo 2"
              },
              tl: /* [] */0
            }
          }), (function (todo) {
          return React.createElement("li", {
                      key: todo.id
                    }, todo.text);
        }));
  return React.createElement("div", undefined, items);
}

var make = Lists;

export {
  make ,
  
}
/* react Not a pure module */
