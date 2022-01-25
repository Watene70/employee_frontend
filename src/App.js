import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Login } from "./components/auth";
import "@fortawesome/fontawesome-free/css/all.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
import { LandingPage, Assesment } from "./components/main";

class App extends Component {
  state = {};
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={LandingPage} />
        <Route exact path="/questions" component={Assesment} />
      </Switch>
    );
  }
}

export default App;
