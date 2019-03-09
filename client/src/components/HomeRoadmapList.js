import React, { Component } from "react";
import "./Home.css";
import { Container, List, Image } from "semantic-ui-react";
import { connect } from "react-redux";
import { getRoadmaps } from "../actions/roadmapAction";
import { withRouter } from "react-router";
class HomeRoadmapList extends Component {
  constructor(props) {
    super(props);
  }

  travelToRoadmap = roadmapID => {
    this.props.history.push(`/roadmap/${roadmapID}`);
  };

  travelToAuthorProfile = authorID => {
    this.props.history.push(`/profile/${authorID}`);
  };

  render() {
    return (
      <React.Fragment>
        {this.props.loading ? (
          <div>loading</div>
        ) : (
          <List celled id="RoadmapsOfTheDay" size="large">
            {this.props.displayData

              .slice(0, 5)
              .map(
                ({
                  author,
                  author_id,
                  _id,
                  name,
                  category,
                  time_completion,
                  roadmap,
                  roadmap_debrief,
                  author_profile_pic,
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
                          {time_completion} hours
                        </span>
                        <span className="views">
                          {views} views
                        </span>
                      </div>
                      <div className="RoadmapDescriptionRight">
                        <a
                          className="title"
                          style={{ wordBreak: "break-all" }}
                          onClick={() => this.travelToRoadmap(_id)}
                        >
                          {name}
                        </a>
                        <tr />
                        <p className="debrief">
                          <span
                            className="debrief"
                            style={{ wordBreak: "break-all" }}
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
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  roadmap: state.roadmap
});

HomeRoadmapList = withRouter(HomeRoadmapList);

export default connect(
  mapStateToProps,
  { getRoadmaps }
)(HomeRoadmapList);
