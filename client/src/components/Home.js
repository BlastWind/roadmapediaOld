import Search from "../images/user_interface/svg/023-search.svg";
import Add from "../images/user_interface/svg/017-add-button.svg";
import save from "../images/user_interface/svg/061-save-button.svg";
import React, { Component } from "react";
import MediaQuery from "react-responsive";
import "./Home.css";
import { Container, List, Image } from "semantic-ui-react";
import { connect } from "react-redux";
import { getRoadmaps } from "../actions/roadmapAction";
import HomeRoadmapList from "./HomeRoadmapList.js";
import jwt_decode from "jwt-decode";
import { loginUser } from "../actions/authActions";
import Landing from "./Landing.js";
import VertNavBar from "./VertNavBar.js";
import axios from "axios";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }
  async componentDidMount() {
    await axios.get("api/roadmaps/getRandomRoadmaps").then(res => {
      this.setState({ HomeRoadmapListDisplayData: res.data, loading: false });
    });
}

  travelToAdd = () => {
    this.props.history.push("/add");
  };
  travelToSearch = () => {
    this.props.history.push("/search");
  };

  travelToHome = () => {};
  travelToSavedRoadmaps = () => {
    this.props.history.push("/savedroadmaps");
  };
  travelToRoadmapDefinition = () => {
    this.props.history.push("/acccount/edit");
  };

  travelToProfile = () => {
    this.props.history.push("/account/edit");
  };
  render() {
    const styles = {
      marginLeft: "20px"
    };
    return (
      <React.Fragment>
        <div class="DashboardLayout-container">
          <VertNavBar />
          <section
            role="contentinfo"
            id="DashboardPageTarget"
            class="DashboardLayout-main"
          >
            <div class="DashboardPage has-adz">
              <div class="DashboardPage-header">
                <div>
                  <div class="UIDiv RecommendationsHeader">
                    <div
                      class="DashboardHeader"
                      role="contentinfo"
                      tabindex="-1"
                    >
                      <div class="UIContainer">
                        <div class="RecommendationsHeader-title">
                          <h2 class="UIHeading UIHeading--two">
                            <span>Stuff to do</span>
                          </h2>
                        </div>
                        <div class="RecommendationsHeader-description">
                          <p class="UIParagraph">
                            <span>Browse, create, or view saved roadmaps!</span>
                          </p>
                        </div>
                      </div>
                      <MediaQuery minWidth={1065}>
                        <div
                          class="ImgContainer"
                          style={{
                            marginBottom: "1rem",
                            height: "200px",
                            marginTop: "2rem",
                            marginLeft: "3rem"
                          }}
                        >
                          <div style={{ float: "left", width: "200px" }}>
                            <img
                              class="HomepageImg"
                              src={Search}
                              onClick={this.travelToSearch}
                            />
                          </div>
                          <div
                            style={{
                              float: "left",
                              width: "200px",
                              marginLeft: "10%"
                            }}
                          >
                            <img
                              onClick={this.travelToAdd}
                              src={Add}
                              style={{}}
                            />
                          </div>
                          <div
                            style={{
                              float: "left",
                              width: "200px",
                              marginLeft: "10%"
                            }}
                          >
                            <img
                              onClick={this.travelToSavedRoadmaps}
                              src={save}
                              style={{}}
                            />
                          </div>
                        </div>
                      </MediaQuery>
                      <MediaQuery minWidth={505} maxWidth={1064}>
                        <div
                          class="ImgContainer"
                          style={{
                            marginBottom: "1rem",
                            height: "200px",
                            marginTop: "2rem",
                            marginLeft: "3rem",
                            marginBottom: "2rem"
                          }}
                        >
                          <div
                            style={{
                              float: "left",
                              width: "200px",
                              width: "20%"
                            }}
                          >
                            <img
                              class="HomepageImg"
                              src={Search}
                              onClick={this.travelToSearch}
                              style={{ width: "100%" }}
                            />
                          </div>
                          <div
                            style={{
                              float: "left",
                              width: "20%",
                              marginLeft: "10%"
                            }}
                          >
                            <img
                              onClick={this.travelToAdd}
                              src={Add}
                              style={{ width: "100%" }}
                            />
                          </div>
                          <div
                            style={{
                              float: "left",
                              width: "20%",
                              marginLeft: "10%"
                            }}
                          >
                            <img
                              onClick={this.travelToSavedRoadmaps}
                              src={save}
                              style={{ width: "100%" }}
                            />
                          </div>
                        </div>
                      </MediaQuery>
                      <MediaQuery minWidth={0} maxWidth={505}>
                        <div
                          class="ImgContainer"
                          style={{
                            height: "150px",
                            marginLeft: "10%"
                          }}
                        >
                          <div style={{ float: "left", width: "20%" }}>
                            <img
                              class="HomepageImg"
                              src={Search}
                              onClick={this.travelToSearch}
                              style={{ width: "100%" }}
                            />
                          </div>
                          <div
                            style={{
                              float: "left",
                              width: "20%",
                              marginLeft: "10%"
                            }}
                          >
                            <img
                              onClick={this.travelToAdd}
                              src={Add}
                              style={{ width: "100%" }}
                            />
                          </div>
                          <div
                            style={{
                              width: "20%",
                              float: "left",
                              marginLeft: "10%"
                            }}
                          >
                            <img
                              onClick={this.travelToSavedRoadmaps}
                              src={save}
                              style={{ width: "100%" }}
                            />
                          </div>
                        </div>
                      </MediaQuery>
                    </div>
                  </div>
                  <div
                    class="DashboardHeader"
                    role="contentinfo"
                    tabindex="-1"
                    style={{}}
                  >
                    <div class="UIContainer">
                      <div class="UIRow">
                        <div class="UIColumn UIColumn--d12 UIColumn--m6">
                          <div class="LatestActivityHeader-title">
                            <h2 class="UIHeading UIHeading--two">
                              <span>Random Roadmaps</span>
                            </h2>
                          </div>
                        </div>
                        <div class="UIColumn UIColumn--d12 UIColumn--m6">
                          <div class="LatestActivityHeader-filterFeed">
                            <HomeRoadmapList
                              displayData={
                                this.state.HomeRoadmapListDisplayData
                              }
                              loading={this.state.loading}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <span />
                </div>
              </div>
            </div>
          </section>
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => ({
  roadmap: state.roadmap,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getRoadmaps, loginUser }
)(Home);
