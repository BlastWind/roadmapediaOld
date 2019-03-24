import React, { Component } from "react";
import { Menu, Icon, Dropdown, Input, Form, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { logoutUser, loginUser } from "../actions/authActions";
import {
  Nav,
  NavItem,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  NavLink
} from "reactstrap";
import "./NavBar.css";
import MediaQuery from "react-responsive";
import { defaultProfilePic } from "../images/avatars";
const colors = ["blue"];

class NavBar extends Component {
  state = { typing_search: false, searchInput: "" };

  logOutClick = () => {
    // when clicked, call deleteItem from actions.js //UI TRIGGERS THE ACTIONS
    // ACTIONS ARE READ AS PAYLOAD BY THE reducer
    // REDUCER will have a swtich statement responsible for different action tpes.
    // on receiving DELETE_ITEM, it updates the array of items to exclude the item with the id as the index
    this.props.logoutUser();
    this.props.history.push("/");
  };

  goToCreate = () => {
    this.props.history.push("/add");
  };
  handleSubmit = () => {
    this.setState({ typing_search: !this.state.typing_search });
  };

  travelToProfile = () => {
    this.props.history.push("/account");
  };
  travelToHome = () => {
    this.props.history.push("/home");
  };
  travelToSearch = () => {
    this.setState({ typing_search: !this.state.typing_search });
  };
  travelToSavedRoadmaps = () => {
    this.props.history.push("/savedroadmaps");
  };
  travelToLogin = () => {
    this.props.history.push("/login");
  };

  travelToCreator = () => {
    this.props.history.push("/aboutme");
  };
  handleSearchInputChange = event => {
    this.setState({ searchInput: event.target.value });
  };
  submitSearchForm = () => {
    var current_input = this.state.searchInput;
    this.props.history.push("/search/" + current_input);
  };

  render() {
    const { searchInput } = this.state.searchInput;
    const { activeItem } = this.state;
    const isAuthenticated = this.props.auth.isAuthenticated;

    const isTypingSearch = this.state.typing_search;
    let item;
    if (isAuthenticated) {
      item = <Dropdown.Item>Welcome :)</Dropdown.Item>;
    } else {
      item = <Dropdown.Item href="/login">Please Log In</Dropdown.Item>;
    }
    return (
      <React.Fragment>
        <MediaQuery minWidth={590}>
          <Menu
            style={{ backgroundColor: "#4257b2" }}
            id="yeets"
            size="massive"
          >
            <Menu.Item
              name="DreamLaunch"
              active={activeItem === "DreamLaunch"}
              onClick={this.travelToHome}
              style={{ color: "#FFFFFF" }}
            >
              Roadmapedia
            </Menu.Item>

            {isTypingSearch ? (
              <Menu.Item className="NavBarSearchBar">
                <div
                  className="ui right aligned category search item"
                  style={{ height: "1rem" }}
                >
                  <i
                    className="search link icon"
                    style={{ color: "#FFFFFF", marginLeft: "1rem" }}
                  />
                  <form onSubmit={this.submitSearchForm}>
                    <div className="ui transparent icon input">
                      <input
                        className="prompt"
                        type="text"
                        placeholder="Look something up!"
                        style={{ color: "#FFFFFF" }}
                        maxlength="100"
                        onChange={this.handleSearchInputChange}
                      />
                    </div>
                  </form>
                  <Icon
                    name="arrow right"
                    style={{
                      color: "#FFFFFF"
                    }}
                    onClick={this.submitSearchForm}
                  />
                  <Icon
                    name="link delete"
                    style={{ color: "#FFFFFF", marginLeft: "1rem" }}
                    onClick={this.handleSubmit}
                  />
                </div>
              </Menu.Item>
            ) : (
              <React.Fragment>
                <Menu.Item>
                  <Icon
                    name="search link icon"
                    style={{ color: "#FFFFFF" }}
                    onClick={this.handleSubmit}
                  />
                  <a
                    className="NavBarText"
                    style={{ color: "#FFFFFF" }}
                    onClick={this.handleSubmit}
                  >
                    Search Roadmap
                  </a>
                </Menu.Item>
                <Menu.Item position="left">
                  <Icon
                    name="plus link square"
                    style={{ color: "#FFFFFF" }}
                    onClick={this.goToCreate}
                  />
                  <a
                    className="NavBarText"
                    onClick={this.goToCreate}
                    style={{ color: "#FFFFFF" }}
                  >
                    Create
                  </a>
                </Menu.Item>
              </React.Fragment>
            )}

            <Menu.Item position="right">
              {isAuthenticated ? (
                <Dropdown
                  item
                  text=<img
                    src={this.props.auth.user_profile_pic}
                    alt="edit this"
                  />
                  direction="left"
                  style={{ color: "#FFFFFF" }}
                >
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={this.travelToProfile}>
                      Profile
                    </Dropdown.Item>

                    <Dropdown.Item onClick={this.travelToSavedRoadmaps}>
                      View saved roadmaps
                    </Dropdown.Item>

                    <Dropdown.Item onClick={this.travelToCreator}>
                      About the Creator
                    </Dropdown.Item>
                    <Dropdown.Item onClick={this.logOutClick}>
                      Logout!
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              ) : (
                <Dropdown
                  item
                  text=<img src={defaultProfilePic} />
                  direction="left"
                  style={{ color: "#FFFFFF" }}
                >
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={this.travelToLogin}>
                      Please login, friend!
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              )}
            </Menu.Item>
          </Menu>
        </MediaQuery>
        <MediaQuery maxWidth={590}>
          {isTypingSearch ? (
            <Menu
              style={{ backgroundColor: "#4257b2" }}
              id="yeets"
              size="massive"
            >
              <Menu.Item className="NavBarSearchBar">
                <div
                  className="ui right aligned category search item"
                  style={{ height: "1rem" }}
                >
                  <i
                    className="search link icon"
                    style={{ color: "#FFFFFF", marginLeft: "1rem" }}
                  />
                  <form onSubmit={this.submitSearchForm}>
                    <div className="ui transparent icon input">
                      <input
                        className="prompt"
                        type="text"
                        placeholder="Look something up!"
                        style={{ color: "#FFFFFF" }}
                        maxlength="100"
                        onChange={this.handleSearchInputChange}
                      />
                    </div>
                  </form>
                  <Icon
                    name="arrow right"
                    style={{
                      color: "#FFFFFF"
                    }}
                    onClick={this.submitSearchForm}
                  />
                  <Icon
                    name="link delete"
                    style={{ color: "#FFFFFF", marginLeft: "1rem" }}
                    onClick={this.handleSubmit}
                  />
                </div>
              </Menu.Item>
            </Menu>
          ) : (
            <Menu
              style={{ backgroundColor: "#4257b2" }}
              id="yeets"
              size="massive"
            >
              <Menu.Item
                name="DreamLaunch"
                active={activeItem === "DreamLaunch"}
                onClick={this.travelToHome}
                style={{ color: "#FFFFFF" }}
              >
                Roadmapedia
              </Menu.Item>

              <React.Fragment>
                <Menu.Item>
                  <Icon
                    name="search link icon"
                    style={{ color: "#FFFFFF" }}
                    onClick={this.handleSubmit}
                  />
                  <a
                    className="NavBarText"
                    style={{ color: "#FFFFFF" }}
                    onClick={this.handleSubmit}
                  />
                </Menu.Item>
                <Menu.Item position="left">
                  <Icon
                    name="plus link square"
                    style={{ color: "#FFFFFF" }}
                    onClick={this.goToCreate}
                  />
                  <a
                    className="NavBarText"
                    onClick={this.goToCreate}
                    style={{ color: "#FFFFFF" }}
                  />
                </Menu.Item>
              </React.Fragment>

              <Menu.Item position="right">
                {isAuthenticated ? (
                  <Dropdown
                    item
                    text=<img src={this.props.auth.user_profile_pic} />
                    direction="left"
                    style={{ color: "#FFFFFF" }}
                  >
                    <Dropdown.Menu>
                      <Dropdown.Item onClick={this.travelToProfile}>
                        Profile
                      </Dropdown.Item>
                      <Dropdown.Item onClick={this.travelToSavedRoadmaps}>
                        View saved roadmaps
                      </Dropdown.Item>
                      <Dropdown.Item onClick={this.travelToCreator}>
                        About the Creator
                      </Dropdown.Item>
                      <Dropdown.Item onClick={this.logOutClick}>
                        Logout!
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                ) : (
                  <Dropdown
                    item
                    text=<img src={defaultProfilePic} />
                    direction="left"
                    style={{ color: "#FFFFFF" }}
                  >
                    <Dropdown.Menu>
                      <Dropdown.Item onClick={this.travelToLogin}>
                        Please login, friend!
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                )}
              </Menu.Item>
            </Menu>
          )}
        </MediaQuery>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser, loginUser }
)(NavBar);
