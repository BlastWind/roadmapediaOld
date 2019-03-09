import React, { Component } from "react";
import { connect } from "react-redux";
import { getRoadmaps } from "../actions/roadmapAction";
import { Link } from "react-router-dom";

import "../RoadmapList.css";
import RoadmapDisplayList from "./RoadmapDisplayList";
import SearchInput from "../d3_search_components/SearchInput";

class RoadmapList extends Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    await this.props.getRoadmaps();
  }
  render() {
    return (
      <div>
        <RoadmapDisplayList providedRoadmaps={this.props.roadmap} />
      </div>
    );
  }
}
//alternatively: <Link to={`/roadmap/${_id}`}>

//on RoadmapList change, we provide the current roadmap state in the store
//and then we give it to RoadmapList's prop and name the property roadmap
const mapStateToProps = state => ({
  roadmap: state.roadmap
});

export default connect(
  mapStateToProps,
  { getRoadmaps }
)(RoadmapList);
