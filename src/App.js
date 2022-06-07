import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { First } from "./components/first";
import { Second } from "./components/second";

function App() {
  return (
    <div className="App">
      <Router>
        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <First />
          </Route>
          <Route path="/second">
            <Second />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
