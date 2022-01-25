import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Login } from "./components/auth";
import "@fortawesome/fontawesome-free/css/all.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./App.css"

class App extends Component {
  state = {};
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Login} />
      </Switch>
    );
  }
}

export default App;
