import React, { Component } from "react";
import "./Landing.css";
import { Button } from "semantic-ui-react";
import { connect } from "react-redux";
import background2 from "../images/background2.png";
import background_img2 from "../images/background_img2.png";
import roadmap from "../images/roadmap.png";
import landing3 from "../images/landing3.png";

var bg = require("../images/background_img.png");
class Landing extends Component {
  travelToHome = () => {
    this.props.history.push("/home");
  };
  componentDidMount() {
    var email = localStorage.getItem("email");
    if (email !== null) {
      this.props.history.push("/home");
    }
  }

  render() {
    return (
      <React.Fragment>
        <div class="Homepage-splashSection">
          <section class="HomepageSplash" style={{}}>
            <div class="UIContainer">
              <div class="UIRow">
                <div class="HomepageSplash-contentWrapper">
                  <div class="HomepageSplash-content">
                    <h1 class="UIHeading UIHeading--one">
                      So much resources. Where to start?
                    </h1>
                    <p class="UIParagraph">
                      It's all good, the community got you. Browse roadmaps
                      created by the community & create your own!
                    </p>
                    <div
                      class="UIDiv HomepageSplash-ctas"
                      onClick={this.travelToHome}
                    >
                      <div class="UIDiv HomepageSplash-contentButton">
                        <a
                          class="UIButton UIButton--hero UIButton--fill"
                          role="button"
                        >
                          <span class="UIButton-wrapper">Let's go</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <section class="Homepage-section Homepage-sectionGrayBackground">
          <div class="UIContainer">
            <div class="Homepage-sellCopySection">
              <div class="HomepageStudentTeacherInfo">
                <div class="UIRow">
                  <div class="UIColumn UIColumn--d6 UIColumn--m6">
                    <div class="HomepageStudentTeacherInfo-section--left">
                      <div class="HomepageStudentTeacherInfo-section HomepageStudentTeacherInfo-text">
                        <h2 class="UIHeading UIHeading--two">No excuses</h2>
                        <p class="UIParagraph">
                          We live in an age where we have access to EVERYTHING
                          that generations before can only dream of. But this
                          also lead to good and bad information being spread.
                          Roadmapedia is powered by the community, we are trying
                          to guide you to the best learning resources out there!
                        </p>
                      </div>
                      <div
                        class="UIDiv HomepageStudentTeacherInfo-image HomepageStudentTeacherInfo-image--teachers"
                        role="img"
                      />
                      <div
                        class="UIDiv HomepageStudentTeacherInfo-image HomepageStudentTeacherInfo-mobileImage HomepageStudentTeacherInfo-image--students"
                        role="img"
                      />
                    </div>
                  </div>
                  <div class="UIColumn UIColumn--d6 UIColumn--m6">
                    <div class="HomepageStudentTeacherInfo-section--right">
                      <div
                        class="UIDiv HomepageStudentTeacherInfo-image HomepageStudentTeacherInfo-image--students"
                        role="img"
                      />
                      <div class="HomepageStudentTeacherInfo-section HomepageStudentTeacherInfo-text">
                        <h2 class="UIHeading UIHeading--two">
                          What's a Roadmap?
                        </h2>
                        <p class="UIParagraph">
                          Roadmaps represent the experiences of experts on
                          completing their specific goal. For example, if the
                          goal completed is "Learn JAVA", the expert might link
                          the best youtube tutorial on JAVA they used and the
                          coolest JAVA Project they read on Reddit in their
                          roadmap!
                        </p>

                        <div
                          class="UIDiv HomepageStudentTeacherInfo-image HomepageStudentTeacherInfo-mobileImage HomepageStudentTeacherInfo-image--teachers"
                          role="img"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  roadmap: state.roadmap,
  auth: state.auth
});

export default connect(mapStateToProps)(Landing);
