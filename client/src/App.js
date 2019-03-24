import React, { Component } from "react";
import "./App.css";

import { Container } from "reactstrap";
import { connect } from "react-redux";
import { Provider } from "react-redux";

import store from "./store";
import Tree from "./components/Tree.js";
import TreeSidebar from "./components/TreeSidebar";
import NavBar from "./components/NavBar";
import VertNavBar from "./components/VertNavBar";
import AuthorProfile from "./components/AuthorProfile";
import RoadmapList from "./components/RoadmapList";
import OneRoadmap from "./components/OneRoadmap";
import Landing from "./components/Landing";

import SavedRoadmapsView from "./components/SavedRoadmapsView";
import Search from "./d3_search_components/d3_search.js";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect, Switch
} from "react-router-dom";
import { Menu, Icon, Dropdown } from "semantic-ui-react";
import Home from "./components/Home";
import RoadmapAdder from "./add_roadmap_components/RoadmapAdder.js";
import Login from "./auth_components/Login";
import Register from "./auth_components/Register";
import Profile from "./components/Profile";
import CreatorPage from "./components/CreatorPage";
import {
  getCurrentUser,
  logoutUser,
  loginUser,
  setCurrentUser
} from "./actions/authActions";
import setAuthToken from "./utils/setAuthToken";
import jwt_decode from "jwt-decode";
import PrivateRoute from "./components/private-route/PrivateRoute"

console.log(localStorage);

if (localStorage.jwtToken) {
  var current_user = localStorage.getItem("jwtToken");
  var email = localStorage.getItem("email");
  var password = localStorage.getItem("password");
  var userData = { email: email, password: password };

  console.log(jwt_decode(current_user));

  //set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  store.dispatch(loginUser(userData));
}

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" component={NavBar} />
          <Route exact path="/" component={Landing} />
          <Route exact path="/home" component={Home} />
          <Route path="/roadmap" component={OneRoadmap} />
          <Route exact path="/aboutme" component={CreatorPage} />
          <Route path="/search" component={Search} />
          <Switch>
            <PrivateRoute exact path="/add" component={RoadmapAdder} />
          </Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Switch>
            <PrivateRoute exact path="/account" component={Profile} />
          </Switch>
          <Switch>
            <PrivateRoute
              exact
              path="/savedRoadmaps"
              component={SavedRoadmapsView}
            />
          </Switch>
          <Route path="/profile" component={AuthorProfile} />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { loginUser }
)(App);
