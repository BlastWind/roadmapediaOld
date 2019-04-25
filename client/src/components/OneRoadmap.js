import React, { Component } from "react";
import ReactTooltip from "react-tooltip";
import Tree from "./Tree";
import TreeSidebar from "./TreeSidebar";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getRoadmaps } from "../actions/roadmapAction";
import { Button, Grid } from "semantic-ui-react";
import { saveRoadmapToUser } from "../actions/authActions";
import axios from "axios";
import { Icon } from "semantic-ui-react";
import AccordionInstructionsRoadmap from "./AccordionInstructionsRoadmap";
import {
  RedditShareButton,
  FacebookShareButton,
  TwitterShareButton,
  FacebookIcon,
  RedditIcon,
  TwitterIcon,
  LinkedinIcon,
  LinkedinShareButton
} from "react-share";
class OneRoadmap extends Component {
  constructor(props) {
    super(props);
    this.savedRoadmapToUser2 = this.saveRoadmapToUser2.bind(this);
    this.state = {
      author: "",
      author_id: "",
      category: "",
      date: "",
      name: "",
      time_completion: "",
      _id: "",
      _v: "",
      loading: true,
      bio: "",
      profile_pic: "",
      views: "",

      roadmapName: "Toggle a pink button to show details!",

      roadmapDetail: "Toggle a pink button to show details!",
      roadmapLink: "",
      treeData: {
        name: "",
        resource_link: "",
        details: "",
        uuid: "",
        website_image: ""
      }
    };
  }

  async componentDidMount() {
    var location1 = this.props.location.pathname;
    var roadmap_from_URL_change_later = location1.slice(9);
    await axios
      .post("/api/roadmaps/getRoadmapById", {
        roadmap_id: roadmap_from_URL_change_later
      })
      .then(res => {
        this.setState({
          author_profile_pic: res.data.author_profile_pic,
          bio: res.data.author_bio_text,
          treeData: res.data.roadmap[0],
          author: res.data.author,
          author_id: res.data.author_id,
          category: res.data.category,
          date: res.data.date,
          name: res.data.name,
          time_completion: res.data.time_completion,
          _id: res.data._id,
          _v: res.data._v,
          loading: false,
          views: res.data.views
        });
      });

    axios.put("/api/roadmaps/updateViews", {
      roadmap_id: roadmap_from_URL_change_later
    });
  }

  handle_on_click_change = d => {
    this.setState({ roadmapName: d.data.name });
    this.setState({ roadmapImg: d.data.website_image });

    this.setState({ roadmapLink: d.data.resource_link });
    if (d.data.details == undefined || d.data.details == "") {
      this.setState({
        roadmapDetail: "The author did not put anything here"
      });
    } else {
      this.setState({ roadmapDetail: d.data.details });
    }
  };

  saveRoadmapToUser2 = () => {
    //get user id
    if (!this.props.auth.user.isAuthenticated) {
      this.props.history.push({
        pathname: "/login"
      });
    }

    //get roadmap id
    var roadmapID = this.props.location.pathname;
    var roadmapID = roadmapID.slice(9);

    var toPush = {
      author_profile_pic: this.state.author_profile_pic,
      author_bio_text: this.state.author_bio_text,
      user_id: this.props.auth.user.id,
      roadmap_id: roadmapID,
      roadmap: this.state.treeData,
      author_id: this.state.author_id,
      author: this.state.author,
      category: this.state.author,
      date: this.state.date,
      name: this.state.name,
      time_completion: this.state.time_completion,
      _id: this.state._id,
      _v: this.state._v
    };
    console.log(this.state.author_id);
    this.props.saveRoadmapToUser(toPush);
    this.props.history.push("/savedroadmaps");
  };

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }
    return (
      <React.Fragment>
        <div>
          <Grid columns={3}>
            <div id="RoadmapRow">
              <span>18hrs</span>

              <span>
                <a
                  className="authorName"
                  onClick={() => {
                    var authorID = this.state.author_id;
                    this.props.history.push(`/profile/${authorID}`);
                  }}
                >
                  {this.state.author}
                </a>
              </span>
              <span>
                <a className="views">{this.state.views} Views</a>
              </span>
            </div>
            <Grid.Row id="RoadmapTitle">
              <div className="RoadmapTitleDiv" style={{ width: "70%" }}>
                {this.state.name}
              </div>
            </Grid.Row>
            <Grid.Row id="ButtonRow">
              <Button
                className="RoadmapButton"
                onClick={this.saveRoadmapToUser2}
                style={{ marginTop: "1rem" }}
              >
                <a className="buttonText" style={{color: "white"}}>Save this Roadmap!</a>
              </Button>
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
                <a className="buttonText" style={{color: "white"}}>About the author</a>
              </Button>
              <div
                className="socialMediaButton"
                style={{ marginLeft: "1rem", marginTop: "1rem" }}
              >
                <RedditShareButton
                  children=<RedditIcon size={28} round={true} />
                  url={window.location.href}
                  title={`Here's a Roadmap: ${this.state.name}`}
                />
                <TwitterShareButton
                  style={{ marginTop: ".5rem" }}
                  children=<TwitterIcon size={28} round={true} />
                  url={window.location.href}
                  title={"Check this roadmap out: "}
                />
              </div>
            </Grid.Row>
          </Grid>
          <div className="InstructionsDiv2" style={{ left: "10%" }}>
            <span className="Instructions_text"> Instructions</span>
            <AccordionInstructionsRoadmap />
          </div>
          <ul>
            <li>
              <div id="OneRoadmap">
                {console.log(this.state.treeData)}
                <Tree
                  on_click_change={this.handle_on_click_change}
                  roadmapData={this.state.treeData}
                />
              </div>
            </li>
            <li>
              <div>
                <TreeSidebar
                  displayName={this.state.roadmapName}
                  displayImg={this.state.roadmapImg}
                  displayDetail={this.state.roadmapDetail}
                  displayResourceLink={this.state.roadmapLink}
                />
              </div>
            </li>
          </ul>
        </div>
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
  { getRoadmaps, saveRoadmapToUser }
)(OneRoadmap);
