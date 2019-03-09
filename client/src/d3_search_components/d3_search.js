import React, { Component } from "react";
import "./search.css";
import SearchInput from "./SearchInput.js";
import SearchRoadmapList from "./SearchRoadmapList";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getRoadmaps } from "../actions/roadmapAction";
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { displayRoadmap: [] };
  }

  async componentDidMount() {
    await this.props.getRoadmaps();
    var location1 = this.props.location.pathname;
    var location1 = location1.slice(8);

    // await get all the roadmaps that have the title or category, or debrief of the search
    var all_roadmaps = this.props.roadmap.roadmaps;

    var bdisplayRoadmap = all_roadmaps.filter(
      eachRoadmap =>
        eachRoadmap.name.includes("" + location1) ||
        eachRoadmap.category.includes("" + location1)
    );
    this.setState({ displayRoadmap: bdisplayRoadmap });
  }

  render() {
    return (
      <React.Fragment>
        {this.state.displayRoadmap.length != 0 ? (
          <div className="searchResultDiv">
            <span className="searchResultDivText">
              {this.props.location.pathname.slice(8) === ""
                ? "Displaying all the roadmaps on Roadmapedia!"
                : "Displaying roadmaps for: " +
                  this.props.location.pathname.slice(8)}
            </span>
            <div>
              <span className="searchResultDivBrowseText">
                {this.props.location.pathname.slice(8) === ""
                  ? "Browsing a total of " +
                    this.state.displayRoadmap.length +
                    " roadmaps"
                  : "Browsing " +
                    this.state.displayRoadmap.length +
                    " roadmaps"}
              </span>
            </div>

            <SearchRoadmapList displayData={this.state.displayRoadmap} />
          </div>
        ) : (
          <React.Fragment>
            <div className="searchResultDiv">
              <span className="searchResultDivText">
                Displaying roadmaps for: {this.props.location.pathname.slice(8)}
              </span>
              <div>
                <span className="searchResultDivBrowseText">
                  hey, no roadmaps on what you searched yet. Try searching
                  something broader!
                </span>
              </div>
            </div>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth,
  roadmap: state.roadmap
});

export default connect(
  mapStateToProps,
  { getRoadmaps }
)(Search);
