import React, { Component } from "react";
import VertNavBar from "./VertNavBar.js";
import { Grid, Image, Button, Icon } from "semantic-ui-react";
import aboutme from "../images/aboutme.png";
import "./CreatorPage.css";

class CreatorPage extends Component {
  render() {
    return (
      <React.Fragment>
        <div class="DashboardLayout-container">
          <VertNavBar />
          <section
            role="contentinfo"
            id="DashboardPageTarget"
            class="DashboardLayout-main"
          >
            <div class="DashboardPage has-adz">
              <div class="DashboardPage-header">
                <div>
                  <div class="UIDiv RecommendationsHeader">
                    <div
                      class="DashboardHeader"
                      role="contentinfo"
                      tabindex="-1"
                    >
                      <div class="UIContainer">
                        <div class="RecommendationsHeader-title">
                          <h2 class="UIHeading UIHeading--two">
                            <span>About me</span>
                          </h2>
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        float: "left",
                        width: "80%",
                        marginLeft: "4%",
                        marginTop: "3rem"
                      }}
                    >
                      <span
                        className="AndrewChenDescription"
                        style={{ paddingLeft: "1rem" }}
                      >
                        Hey! Andrew Chen here, creator of Roadmapedia. I am a
                        huge Machine Learning enthusiast. I loved every aspect
                        of it, but my learning experience was painful.
                      </span>
                      <br />
                      <span
                        className="AndrewChenDescription"
                        style={{ paddingLeft: "1rem" }}
                      >
                        I jumped in there, saw at least 50 jargons that no
                        normal human beings will use, panicked, and picked a
                        2012 course that was only good in 2012 since Machine
                        Learing introduces at least 50 new words every year.
                      </span>
                      <br />
                      <span
                        className="AndrewChenDescription"
                        style={{ paddingLeft: "1rem" }}
                      >
                        I yelled, "FUCK!" after realizing my 50 hours of
                        learning was very ineffective, then I made Roadmapedia
                        because I don't want anyone's energy wasted on finding
                        the best resources.
                      </span>
                      <br />
                      <span
                        className="AndrewChenDescription"
                        style={{ paddingLeft: "1rem" }}
                      >
                        If you want to hit me up for any reason, join the
                        discord community or email me at
                        andrewchen14250@gmail.com!
                      </span>
                    </div>
                    <div
                      style={{
                        float: "left",
                        marginLeft: "10%",
                        marginTop: "3rem",

                        width: "70%",
                        marginBottom: "3rem"
                      }}
                    >
                      <img
                        src={aboutme}
                        style={{ width: "100%", height: "auto" }}
                      />

                      <Button
                        color="youtube"
                        fluid
                        style={{ marginTop: "1rem" }}
                        href="https://discord.gg/WD82qNM"
                        target="_blank"
                      >
                        <Icon name="youtube" />
                        My Youtube (mostly on tech)
                      </Button>
                      <Button
                        className="discord"
                        fluid
                        style={{ marginTop: "1rem" }}
                        onClick={() =>
                          window.open("https://discord.gg/WD82qNM", "_blank")
                        }
                        target="_blank"
                      >
                        <Icon name="discord" />
                        <span>Roadmapedia discord community</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="UIContainer">
                <div
                  class="RecommendationsHeader-title"
                  style={{ marginTop: "2rem" }}
                >
                  <h2
                    class="UIHeading UIHeading--two"
                    style={{ marginTop: "2rem" }}
                  >
                    <span>Help</span>
                  </h2>
                </div>
              </div>
              <div
                style={{
                  float: "left",
                  width: "80%",
                  marginLeft: "4%",
                  marginTop: "3rem",
                  marginBottom: "3rem"
                }}
              >
                <span style={{ paddingLeft: "1rem" }} />
                For password issues: Sorry, I still haven't coded the password
                reset feature (Coming before April Fools for sure). When you
                make your account your password is automatically hashed with JWT
                token and even I who has the access to the database don't know
                your password. You can however email me at
                andrewchen14250@gmail.com with the email you used to register. I
                can make a new account with all of the information you had in
                your previous account.
              </div>
            </div>
            <div>
              <div class="UIContainer">
                <div class="RecommendationsHeader-title">
                  <h2 class="UIHeading UIHeading--two">
                    <span>Credits</span>
                  </h2>
                </div>
              </div>
              <div
                style={{
                  float: "left",
                  width: "80%",
                  marginLeft: "4%",
                  marginTop: "3rem",
                  paddingBottom: "3rem"
                }}
              >
                <div>
                  {" "}
                  <span style={{ paddingLeft: "1rem" }} />
                  The superhero icons are made by{" "}
                  <a
                    href="https://www.flaticon.com/packs/superhero-avatars-2"
                    title="surang"
                  >
                    surang
                  </a>{" "}
                  from{" "}
                  <a href="https://www.flaticon.com/" title="Flaticon">
                    www.flaticon.com
                  </a>{" "}
                  is licensed by{" "}
                  <a
                    href="http://creativecommons.org/licenses/by/3.0/"
                    title="Creative Commons BY 3.0"
                    target="_blank"
                  >
                    CC 3.0 BY
                  </a>
                </div>
                <div>
                  {" "}
                  <span style={{ paddingLeft: "1rem" }} />
                  The monster icons are made by{" "}
                  <a
                    href="https://www.flaticon.com/packs/monster-7"
                    title="surang"
                  >
                    surang
                  </a>{" "}
                  from{" "}
                  <a href="https://www.flaticon.com/" title="Flaticon">
                    www.flaticon.com
                  </a>{" "}
                  is licensed by{" "}
                  <a
                    href="http://creativecommons.org/licenses/by/3.0/"
                    title="Creative Commons BY 3.0"
                    target="_blank"
                  >
                    CC 3.0 BY
                  </a>
                </div>
                <div>
                  {" "}
                  <span style={{ paddingLeft: "1rem" }} />
                  Icons made by{" "}
                  <a href="https://roundicons.com/" title="Roundicons">
                    Roundicons
                  </a>{" "}
                  from{" "}
                  <a href="https://www.flaticon.com/" title="Flaticon">
                    www.flaticon.com
                  </a>{" "}
                  is licensed by{" "}
                  <a
                    href="http://creativecommons.org/licenses/by/3.0/"
                    title="Creative Commons BY 3.0"
                    target="_blank"
                  >
                    CC 3.0 BY
                  </a>
                </div>
                <div>
                  {" "}
                  <span style={{ paddingLeft: "1rem" }} />
                  Icons made by{" "}
                  <a href="http://www.freepik.com/" title="Freepik">
                    Freepik
                  </a>{" "}
                  from{" "}
                  <a href="https://www.flaticon.com/" title="Flaticon">
                    www.flaticon.com
                  </a>{" "}
                  is licensed by{" "}
                  <a
                    href="http://creativecommons.org/licenses/by/3.0/"
                    title="Creative Commons BY 3.0"
                    target="_blank"
                  >
                    CC 3.0 BY
                  </a>
                </div>
                <div>
                  <span style={{ paddingLeft: "1rem" }} />
                  Huge credits to Quizlet, I used a lot of their layout!
                </div>
              </div>
            </div>
          </section>
        </div>
      </React.Fragment>
    );
  }
}

export default CreatorPage;
