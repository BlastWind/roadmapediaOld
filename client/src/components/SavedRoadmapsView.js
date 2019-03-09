import React, { Component } from "react";
import { connect } from "react-redux";
import { getSavedRoadmapByUser, loginUser } from "../actions/authActions";
import SavedRoadmapsViewList from "./SavedRoadmapViewList";
import VertNavBar from "./VertNavBar.js";
import SavedRoadmapViewList from "./SavedRoadmapViewList";
class SavedRoadmapsView extends Component {
  constructor(props) {
    super(props);
    this.state = { displayData: [], loading: true };
  }
  async componentDidMount() {
    if (this.props.auth.isAuthenticated === false) {
      this.props.history.push("/login");
    }

    await this.props.getSavedRoadmapByUser({
      user_id: this.props.auth.user.id
    });

    var uh = this.props.auth.user_saved_roadmaps.reverse();

    this.setState({
      displayData: uh,
      loading: false
    });
  }

  handleTravelToRoadmap = x => {
    this.props.history.push(`/roadmap/${x}`);
  };

  // right now I am displaying other author crreated instead of this user saved...
  // change later...
  render() {
    return (
      <React.Fragment>
        {this.state.loading ? (
          <React.Fragment>
            <div class="DashboardLayout-container">
              <VertNavBar />
              <section
                role="contentinfo"
                id="DashboardPageTarget"
                class="DashboardLayout-main"
              >
                <div className="searchResultDiv">
                  <span className="searchResultDivText">
                    Displaying roadmaps you saved
                  </span>
                  <div>
                    <span className="searchResultDivBrowseText">
                      Browsing {this.state.displayData.length} roadmap(s)
                    </span>
                  </div>
                </div>

                <div>loading</div>
              </section>
            </div>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <div class="DashboardLayout-container">
              <VertNavBar />
              <section
                role="contentinfo"
                id="DashboardPageTarget"
                class="DashboardLayout-main"
              >
                <div className="searchResultDiv">
                  <span className="searchResultDivText">
                    Displaying roadmaps you saved
                  </span>
                  <div>
                    <span className="searchResultDivBrowseText">
                      Browsing {this.state.displayData.length} roadmap(s)
                    </span>
                  </div>
                </div>

                <SavedRoadmapViewList
                  displayData={this.state.displayData}
                  loading={this.state.loading}
                  handleTravelToRoadmap={this.handleTravelToRoadmap}
                />
              </section>
            </div>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

// write a authAction called retrieveRoadmapsforUser
// this will pass in the user id, and retrieve the roadmap IDs for the users
// now we can have the roadmap IDs, everything becomes easy!

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getSavedRoadmapByUser, loginUser }
)(SavedRoadmapsView);
