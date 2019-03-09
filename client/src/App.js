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
  Redirect
} from "react-router-dom";
import { Menu, Icon, Dropdown } from "semantic-ui-react";
import Home from "./components/Home";
import RoadmapAdder from "./add_roadmap_components/RoadmapAdder.js";
import Login from "./auth_components/Login";
import Register from "./auth_components/Register";
import Profile from "./components/Profile";
import CreatorPage from "./components/CreatorPage";
import { getCurrentUser, logoutUser, loginUser } from "./actions/authActions";

const PrivateRoute = ({ component: Component, authed, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      authed === true ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

class App extends Component {
  state = { loggedIn: false };
  async componentDidMount() {
    var current_user = localStorage.getItem("jwtToken");
    var email = localStorage.getItem("email");
    var password = localStorage.getItem("password");

    var userData = { email: email, password: password };
    await this.props.loginUser(userData);
    if (email !== null || email !== undefined || email !== "") {
      this.setState({ loggedIn: true });
    } else {
      this.setState({ loggedIn: false });
    }
  }

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
          <PrivateRoute
            authed={this.state.loggedIn}
            exact
            path="/add"
            component={RoadmapAdder}
          />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />{" "}
          <PrivateRoute
            authed={this.state.loggedIn}
            exact
            path="/account"
            component={Profile}
          />
          <PrivateRoute
            authed={this.state.loggedIn}
            exact
            path="/savedRoadmaps"
            component={SavedRoadmapsView}
          />
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
