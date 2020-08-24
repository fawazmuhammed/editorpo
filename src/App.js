import React from "react";
import "./App.css";
import PeoplePicker from "./Components/PeoplePicker";
import ckeditor from "./Components/ckeditor";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={PeoplePicker}></Route>
          <Route path="/ckeditor" component={ckeditor}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
