import React, { Component } from "react";
import "../TreeSidebar.css";
import { List, Segment } from "semantic-ui-react";

class TreeSidebar extends Component {
  openNewWindow = () => {
    if (this.props.displayResourceLink.includes("https://")) {
      window.open(this.props.displayResourceLink, "_blank");
    } else if (this.props.displayResourceLink.includes("www.")) {
      var hmm = "https://" + this.props.displayResourceLink;
      window.open(hmm, "_blank");
    } else {
      var hmm2 = "https://www." + this.props.displayResourceLink;
      window.open(hmm, "_blank");
    }
  };
  render() {
    return (
      <Segment className="Segment">
        <div id="sidebarHeader" />
        <React.Fragment>
          <List>
            <List.Item>
              <List.Content style={{ marginTop: "1rem" }}>
                <span>Saved name - </span>
                <div
                  style={{
                    width: "100%",
                    height: "5.5rem",
                    wordWrap: "break-word",

                    marginTop: "1rem",
                    borderRadius: "5px"
                  }}
                >
                  <span id="TreeSidebarShowTexts">
                    {this.props.displayName === ""
                      ? "The author didn't put anything here"
                      : this.props.displayName}
                  </span>
                </div>
              </List.Content>
              <List.Content style={{ marginTop: "1rem" }}>
                <span>Saved resource link - </span>
                <div
                  style={{
                    width: "100%",
                    height: "8.5rem",
                    wordWrap: "break-word",

                    marginTop: "1rem",
                    borderRadius: "5px"
                  }}
                >
                  {this.props.displayResourceLink === "" ? (
                    <span>The author didn't put anything here</span>
                  ) : (
                    <a onClick={this.openNewWindow} id="TreeSidebarShowTexts">
                      {this.props.displayResourceLink}
                    </a>
                  )}
                </div>
              </List.Content>
              <List.Content style={{ marginTop: "1rem" }}>
                <span>Saved Details - </span>
                <div
                  style={{
                    width: "100%",
                    height: "12rem",
                    wordWrap: "break-word",

                    marginTop: "1rem",
                    borderRadius: "5px"
                  }}
                >
                  <span id="TreeSidebarShowTexts">
                    {this.props.displayDetail === ""
                      ? "The author didn't put anything here"
                      : this.props.displayDetail}
                  </span>
                </div>
              </List.Content>
            </List.Item>
          </List>
        </React.Fragment>
      </Segment>
    );
  }
}

export default TreeSidebar;
