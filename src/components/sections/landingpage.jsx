import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import { LinkedIn, GitHub } from "@material-ui/icons";
import logo from "../../resource/IMG_0079.jpg";
class Landingpage extends Component {
  state = {};

  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img src={logo} alt="avatar" className="avatar-img" />

            <div className="banner-text">
              <h1>Software Developer</h1>

              <hr />

              <p>HTML/CSS | JavaScript | React | NodeJS | REST API</p>
              <p>Anroid Studio App | Machine Learning</p>

              {/* LinkedIn */}
              <div className="social-links">
                <a
                  href="https://www.linkedin.com/in/tuanngo1001/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedIn />
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/tuanngo1001"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHub />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landingpage;
