import React from "react";
import "./App.css";
import PeoplePicker from "./components/communication/CkEditor/PeoplePicker";
import Ckeditorprops from "./components/communication/CkEditor/ckeditor";
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
