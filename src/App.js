import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Login } from "./components/auth";
import "@fortawesome/fontawesome-free/css/all.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
import { LandingPage, Assesment } from "./components/main";
import store from "./store";
import { setAuthToken } from "./utils";
import jwt_decode from "jwt-decode";
import { setCurrentUser } from "./actions/authActions";

if (localStorage.assessmentJwt) {
  // set auth token header
  setAuthToken(localStorage.assessmentJwt);
  //decode token and user info as well as exp
  const decoded = jwt_decode(localStorage.assessmentJwt);

  let atlasuser = JSON.parse(localStorage.atlasuser);
  // set atlasuser and isAuthenticated
  store.dispatch(setCurrentUser(atlasuser, true));
  //check for expired token
  const currentTime = Date.now() / 1000;

  if (decoded.exp < currentTime) {
    //logout atlasuser
    // store.dispatch(logoutUser());
    //redirect to login page
    window.location.href = "/";
  }
}

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
