import React from "react";
import FirstInput from "./components/firstinput";
import SecondInput from "./components/secondinput";
import Parent from "./components/parent";
import "./App.css";
import { BrowserRouter as Router, Switch, Route ,Link} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/parent">Parent</Link>
            </li>
            
          </ul>
        </nav>
        <Switch>
          <Route path="/parent">
            <Parent />
          </Route>
          <Route path="/">
            <FirstInput />
            <SecondInput />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
