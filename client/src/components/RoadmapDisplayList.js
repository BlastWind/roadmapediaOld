import React, { Component } from "react";
import { List, Segment } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { Button, Image } from "semantic-ui-react";
class RoadmapDisplayList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Segment">
        <List divided verticalAlign="middle">
          {this.props.providedRoadmaps.roadmaps.map(
            ({ author, _id, name, category, time_completion }) => (
              <List.Item>
                <List.Content floated="right">
                  <Link to={`/roadmap/${_id}`}>
                    <Button>Let's see!</Button>
                  </Link>
                </List.Content>
                <Image
                  avatar
                  src="https://react.semantic-ui.com/images/avatar/small/lena.png"
                />
                <List.Content>{name}</List.Content>
                <List.Content floated="right">{time_completion +"hrs"}</List.Content>
                <List.Content floated="right">{category}</List.Content>
              </List.Item>
            )
          )}
        </List>
      </div>
    );
  }
}

export default RoadmapDisplayList;
