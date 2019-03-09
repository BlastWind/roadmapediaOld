import React, { Component } from "react";
import { connect } from "react-redux";
import {
  loginUser,
  profilePicUpdate,
  bioTextUpdate
} from "../actions/authActions";
import VertNavBar from "./VertNavBar.js";
import ProfilePictureSelectionGallery from "./ProfilePictureSelectionGallery.js";
import "./Profile.css";
import {
  hero001,
  hero002,
  hero003,
  hero004,
  hero005,
  hero006,
  hero007,
  hero008,
  hero009,
  hero010,
  hero011,
  hero012,
  hero013,
  hero014,
  hero015,
  hero016,
  hero017,
  hero018,
  hero019,
  hero020,
  hero021,
  hero022,
  hero023,
  hero024,
  hero025,
  hero026,
  hero027,
  hero028,
  hero029,
  hero030,
  monster001,
  monster002,
  monster003,
  monster004,
  monster005,
  monster006,
  monster007,
  monster008,
  monster009,
  monster010,
  monster011,
  monster012,
  monster013,
  monster014,
  monster015,
  monster016,
  monster017,
  monster018,
  monster019,
  monster020,
  monster021,
  monster022,
  monster023,
  monster024,
  monster025,
  monster026,
  monster027,
  monster028,
  monster029,
  monster030,
  defaultProfilePic
} from "../images/avatars";
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
      imageURL: "",
      isClicked1: false,
      isClicked2: false,
      isClicked3: false,
      bioText: "",
      received: false,
      selected: ""
    };
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated === false) {
      this.props.history.push("/login");
    }

    var email = localStorage.getItem("email");

    this.setState({ current_email: email });
    this.userData = new FormData();
  }
  profilePicClick = id => {
    this.setState({ selected: id });
    this.props.profilePicUpdate({
      picture: id,
      user_id: this.props.auth.user.id
    });
  };
  onBioTextChange = event => {
    this.setState({ bioText: event.target.value });
  };
  bioOnSubmit = () => {
    this.props.bioTextUpdate({
      bio: this.state.bioText,
      user_id: this.props.auth.user.id
    });
  };

  componentWillReceiveProps(nextProps) {
    this.setState({ received: true });
  }

  render() {
    return (
      <React.Fragment>
        <div class="DashboardLayout-container">
          <VertNavBar />
          <div class="DashboardLayout-main">
            <main
              class="page"
              id="page"
              role="main"
              itemscope=""
              itemprop="mainContentOfPage"
            >
              <div>
                <div
                  class="UIDiv SettingsBox profile setting"
                  id="profile-setting"
                >
                  {this.state.received ? (
                    <React.Fragment>
                      <p style={{ color: "green", marginLeft: "3.25rem" }}>
                        Profile pic or Bio Updated! You might've to refresh to
                        see effect though.
                      </p>
                    </React.Fragment>
                  ) : (
                    <div />
                  )}
                  <div class="SettingsBox-title">
                    <div class="SettingsBox-illustration">
                      <div>
                        <span class="UserAvatar" />
                      </div>
                    </div>

                    <div class="SettingsBox-heading">
                      <h4 class="UIHeading UIHeading--four">Profile Picture</h4>
                    </div>
                  </div>
                  <div class="SettingsBox-box">
                    <div class="add-image">
                      <h2>Choose your profile picture</h2>
                      <ProfilePictureSelectionGallery
                        profilePicClick={this.profilePicClick}
                        selected={this.state.selected}
                        displayData={[
                          { iconID: defaultProfilePic },
                          { iconID: hero001 },
                          { iconID: hero002 },
                          { iconID: hero003 },
                          { iconID: hero004 },
                          { iconID: hero005 },
                          { iconID: hero006 },
                          { iconID: hero007 },
                          { iconID: hero008 },
                          { iconID: hero009 },
                          { iconID: hero010 },
                          { iconID: hero011 },
                          { iconID: hero012 },
                          { iconID: hero013 },
                          { iconID: hero014 },
                          { iconID: hero015 },
                          { iconID: hero016 },
                          { iconID: hero017 },
                          { iconID: hero018 },
                          { iconID: hero019 },
                          { iconID: hero020 },
                          { iconID: hero021 },
                          { iconID: hero022 },
                          { iconID: hero023 },
                          { iconID: hero024 },
                          { iconID: hero025 },
                          { iconID: hero026 },
                          { iconID: hero027 },
                          { iconID: hero028 },
                          { iconID: hero029 },
                          { iconID: hero030 },
                          { iconID: monster001 },
                          { iconID: monster002 },
                          { iconID: monster003 },
                          { iconID: monster004 },
                          { iconID: monster005 },
                          { iconID: monster006 },
                          { iconID: monster007 },
                          { iconID: monster008 },
                          { iconID: monster009 },
                          { iconID: monster010 },
                          { iconID: monster011 },
                          { iconID: monster012 },
                          { iconID: monster013 },
                          { iconID: monster014 },
                          { iconID: monster015 },
                          { iconID: monster016 },
                          { iconID: monster017 },
                          { iconID: monster018 },
                          { iconID: monster019 },
                          { iconID: monster020 },
                          { iconID: monster021 },
                          { iconID: monster022 },
                          { iconID: monster023 },
                          { iconID: monster024 },
                          { iconID: monster025 },
                          { iconID: monster026 },
                          { iconID: monster027 },
                          { iconID: monster028 },
                          { iconID: monster029 },
                          { iconID: monster030 }
                        ]}
                      />
                    </div>
                  </div>
                </div>

                <div class="UIDiv SettingsBox" id="password-change-setting">
                  <div class="SettingsBox-title">
                    <div class="SettingsBox-illustration" />
                    <div class="SettingsBox-heading">
                      <h4 class="UIHeading UIHeading--four">Your bio</h4>
                    </div>
                  </div>
                  <div class="SettingsBox-box">
                    <p class="UIParagraph">
                      Hey! When you add a roadmap, people can see your bio by
                      clicking "about the author"
                    </p>

                    <div class="UIDiv">
                      <label class="UIInput">
                        <span class="UIInput-content">
                          <input
                            class="UIInput-input"
                            maxlength="100"
                            onChange={this.onBioTextChange}
                            defaultValue={this.props.auth.user_profile_bio}
                          />
                        </span>
                        <span class="UIInput-label">Short Bio</span>
                      </label>

                      <div class="UIDiv">
                        <button class="UIButton" onClick={this.bioOnSubmit}>
                          <span class="UIButton-wrapper">Submit</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { loginUser, profilePicUpdate, bioTextUpdate }
)(Profile);
