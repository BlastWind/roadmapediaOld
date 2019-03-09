import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import "./VertNavBar.css";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import calculator from "../images/user_interface/svg/001-calculator.svg";
import house from "../images/user_interface/svg/052-house.svg";
import heart from "../images/user_interface/svg/016-love.svg";
import save from "../images/user_interface/svg/061-save-button.svg";
import profile from "../images/user_interface/svg/050-protect.svg";
class VertNavBar extends Component {
  travelToHome = () => {
    this.props.history.push("/home");
  };

  travelToSavedRoadmaps = () => {
    this.props.history.push("/savedroadmaps");
  };

  travelToRoadmapDefinition = () => {
    this.props.history.push("/savedroadmaps");
  };

  travelToProfile = () => {
    this.props.history.push("/account");
  };

  travelToCreator = () => {
    this.props.history.push("/aboutme");
  };

  render() {
    return (
      <section
        role="navigation"
        id="DashboardSidebarTarget"
        class="DashboardLayout-sidebar"
      >
        <div>
          <div class="UIDiv SiteNav">
            <div class="SiteNav-section">
              <div class="SiteNav-menuItem SiteNav-menuItem">
                <span class="UIMenuItem">
                  <a class="UILink" onClick={this.travelToHome}>
                    <span class="UIMenuItem-inner">
                      <img
                        src={house}
                        style={{ height: "20px", marginRight: "10px" }}
                      />
                      <div class="SiteNav-menuItemTitle">Dashboard</div>
                    </span>
                  </a>
                </span>
              </div>
              <div class="SiteNav-menuItem">
                <span class="UIMenuItem">
                  <a class="UILink" onClick={this.travelToSavedRoadmaps}>
                    <span class="UIMenuItem-inner">
                      <img
                        src={save}
                        style={{ height: "20px", marginRight: "10px" }}
                      />
                      <div class="SiteNav-menuItemTitle">
                        Your saved roadmaps
                      </div>
                    </span>
                  </a>
                </span>
              </div>
              <div class="SiteNav-menuItem">
                <span class="UIMenuItem">
                  <a class="UILink">
                    <span class="UIMenuItem-inner">
                      <img
                        src={heart}
                        style={{ height: "20px", marginRight: "10px" }}
                      />
                      <div
                        class="SiteNav-menuItemTitle"
                        onClick={this.travelToCreator}
                      >
                        About the creator
                      </div>
                    </span>
                  </a>
                </span>
              </div>
              <div class="SiteNav-menuItem">
                <span class="UIMenuItem">
                  <a class="UILink">
                    <span class="UIMenuItem-inner">
                      <img
                        src={profile}
                        style={{ height: "20px", marginRight: "10px" }}
                      />
                      <div
                        class="SiteNav-menuItemTitle"
                        onClick={this.travelToProfile}
                      >
                        Profile
                      </div>
                    </span>
                  </a>
                </span>
              </div>
            </div>

            <div class="SiteNav-footer">
              <div>
                <a
                  class="UILink"
                  href="https://twitter.com/roadmapedia"
                  target="_blank"
                >
                  <span>Twitter</span>
                </a>
              </div>
              <div>
                <a
                  class="UILink"
                  href="https://www.instagram.com/roadmapedia/"
                  target="_blank"
                >
                  <span>Instagram</span>
                </a>
              </div>
              <div>
                <a
                  class="UILink"
                  href="https://www.facebook.com/Roadmapedia/"
                  target="_blank"
                >
                  <span>Facebook</span>
                </a>
              </div>
            </div>
          </div>
          <div />
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default withRouter(connect(mapStateToProps)(VertNavBar));
