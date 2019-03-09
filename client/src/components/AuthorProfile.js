import React, { Component } from "react";
import { getRoadmapByUser } from "../actions/authActions";
import { connect } from "react-redux";
import AuthorProfileListView from "./AuthorProfileListView";
import ReactTooltip from "react-tooltip";

import { Button, Grid } from "semantic-ui-react";
class AuthorProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayData: [{ author: "placeholder" }],
      loading: true,
      bio: ""
    };
  }
  travelToRoadmap = id => {
    this.props.history.push(`/roadmap/${id}`);
  };
  async componentDidMount() {
    await this.props.getRoadmapByUser({
      user_id: this.props.location.pathname.slice(9)
    });
    this.setState({
      displayData: {
        displayRoadmaps: this.props.auth.other_author_created_roadmaps,
        displayProfilePic: this.props.auth.author_profile_pic
      },
      loading: false,
      bio: this.props.auth.author_bio
    });

  }

  render() {
    return (
      <React.Fragment>
        {this.state.loading ? (
          <div>loading</div>
        ) : (
          <div className="searchResultDiv">
            <span className="searchResultDivText">
              Displaying roadmaps{" "}
              {this.state.displayData.displayRoadmaps[0].author} made!
            </span>
            <div>
              <span className="searchResultDivBrowseText">
        
                Browsing {this.state.displayData.displayRoadmaps.length}{" "}
                roadmaps
              </span>
            </div>
            <ReactTooltip id="bio">
              <a>
                {this.state.bio === ""
                  ? "hmm, our friend didn't have a bio"
                  : this.state.bio}
              </a>
            </ReactTooltip>
            <Button
              data-tip
              data-for="bio"
              data-event="click"
              className="RoadmapButton"
              style={{ marginTop: "1rem" }}
            >
              About the author
            </Button>

            <AuthorProfileListView
              displayData={this.state.displayData}
              travelToRoadmap={this.travelToRoadmap}
            />
          </div>
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { getRoadmapByUser }
)(AuthorProfile);
