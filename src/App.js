import React from "react";
import "./App.css";
import PeoplePicker from "./Components/PeoplePicker";
import Ckeditorprops from "./Components/Ckeditorprops";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={PeoplePicker}></Route>
          <Route path="/ckeditor" component={Ckeditorprops}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
