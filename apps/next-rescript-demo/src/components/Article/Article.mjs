// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";

function Article(Props) {
  var title = Props.title;
  var visitorCount = Props.visitorCount;
  var children = Props.children;
  var visitorCountMsg = "You ar visitor number:" + String(visitorCount);
  return React.createElement("div", undefined, React.createElement("div", undefined, title), React.createElement("div", undefined, visitorCountMsg), children);
}

var make = Article;

export {
  make ,
  
}
/* react Not a pure module */
