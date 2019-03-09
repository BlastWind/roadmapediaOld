import React, { Component } from "react";
import { List, Image } from "semantic-ui-react";
class AuthorProfileListView extends Component {
  travelToRoadmap = id => {
    this.props.travelToRoadmap(id);
  };
  render() {
    return (
      <List celled id="RoadmapsOfTheDay" size="large">
        {this.props.displayData.displayRoadmaps.map(
          ({
            author,
            _id,
            name,
            category,
            time_completion,
            roadmap,
            roadmap_debrief
          }) => (
            <List.Item className="Roadmap">
              <List.Content>
                <div className="RoadmapDescriptionLeft">
                  <Image
                    className="RoadmapAuthorImage"
                    avatar
                    src={this.props.displayData.displayProfilePic}
                  />
                  <a className="author">{author}</a>

                  <span className="time_completion">
                    {time_completion} hours to complete
                  </span>
                </div>
                <div className="RoadmapDescriptionRight">
                  <a
                    className="title"
                    onClick={() => this.travelToRoadmap(_id)}
                  >
                    {name}
                  </a>
                  <tr />
                  <p className="debrief">
                    <span>{roadmap_debrief}</span>
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

export default AuthorProfileListView;
