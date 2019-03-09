import React, { Component } from "react";
import { Container, List, Image } from "semantic-ui-react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

class SavedRoadmapsViewList extends Component {
  travelToRoadmap = id => {
    this.props.handleTravelToRoadmap(id);
  };
  travelToAuthorProfile = authorID => {
    this.props.history.push(`/profile/${authorID}`);
  };

  render() {
    return (
      <List
        celled
        id="RoadmapsOfTheDay2"
        size="large"
        style={{ marginLeft: "2rem", marginTop: "2rem" }}
      >
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
            author_id
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

                  <span className="time_completion">{time_completion} hours to complete</span>
                </div>
                <div className="RoadmapDescriptionRight">
                  <a
                    className="title"
                    onClick={() => this.travelToRoadmap(_id)}
                    style={{ wordBreak: "break-all" }}
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
    );
  }
}

SavedRoadmapsViewList = withRouter(SavedRoadmapsViewList);

export default connect()(SavedRoadmapsViewList);
