// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";

function List$MyList(Props) {
  var children = Props.children;
  return React.createElement("ul", undefined, children);
}

var MyList = {
  make: List$MyList
};

function List(Props) {
  return React.createElement(List$MyList, {
              children: React.createElement("li", undefined, "Hello")
            });
}

var make = List;

export {
  MyList ,
  make ,
  
}
/* react Not a pure module */
