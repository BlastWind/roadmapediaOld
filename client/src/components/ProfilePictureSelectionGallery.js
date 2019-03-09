import React, { Component } from "react";

class ProfilePictureSelectionGallery extends Component {
  profilePicClick = iconID => {
    this.props.profilePicClick(iconID);
  };
  render() {
    return (
      <div id="animalGallery">
        {this.props.displayData.map(eachProfilePic =>
          this.props.selected === eachProfilePic.iconID ? (
            <a
              class="animal selected"
              onClick={() => this.profilePicClick(eachProfilePic.iconID)}
            >
              <img src={eachProfilePic.iconID} />
            </a>
          ) : (
            <a
              class="animal"
              onClick={() => this.profilePicClick(eachProfilePic.iconID)}
            >
              <img src={eachProfilePic.iconID} />
            </a>
          )
        )}
      </div>
    );
  }
}

export default ProfilePictureSelectionGallery;
