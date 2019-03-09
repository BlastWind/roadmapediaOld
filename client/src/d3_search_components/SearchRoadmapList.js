import React, { Component } from "react";
import { connect } from "react-redux";
import { getRoadmaps } from "../actions/roadmapAction";
import { withRouter } from "react-router";
import { Container, List, Image } from "semantic-ui-react";
class SearchRoadmapList extends Component {
  travelToRoadmap = roadmapID => {
    this.props.history.push(`/roadmap/${roadmapID}`);
  };
  travelToAuthorProfile = authorID => {
    this.props.history.push(`/profile/${authorID}`);
  };

  render() {
    return (
      <List celled id="RoadmapsOfTheDay" size="large">
        {this.props.displayData.map(
          ({
            author,
            _id,
            name,
            category,
            time_completion,
            roadmap,
            roadmap_debrief,
            author_profile_pic,
            author_id,
            views
          }) => (
            <List.Item className="Roadmap">
              <List.Content>
                <div className="RoadmapDescriptionLeft">
                  <Image
                    className="RoadmapAuthorImage"
                    avatar
                    src={author_profile_pic}
                  />
                  <a
                    className="author"
                    onClick={() => this.travelToAuthorProfile(author_id)}
                  >
                    {author}
                  </a>
                  <span className="time_completion">
                    {time_completion + " "}hours to complete
                  </span>
                  <span className="views">{views} views</span>
                </div>
                <div className="RoadmapDescriptionRight">
                  <a
                    className="title"
                    onClick={() => this.travelToRoadmap(_id)}
                    style={{ wordBreak: "break-all" }}
                  >
                    {name}
                  </a>
                  <p className="debrief">
                    <span
                      style={{ wordBreak: "break-all" }}
                      className="debrief"
                    >
                      {roadmap_debrief}
                    </span>
                  </p>
                </div>
                <tr />
              </List.Content>
            </List.Item>
          )
        )}
      </List>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  roadmap: state.roadmap
});

SearchRoadmapList = withRouter(SearchRoadmapList);
export default connect()(SearchRoadmapList);
