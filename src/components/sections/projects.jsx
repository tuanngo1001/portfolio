import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardActions,
  Button,
  CardMenu,
  IconButton,
  CardText
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0
    };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      // Android
      return (
        <div className="projects-grid">
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://r00t4bl3.com/uploads/android-studio-6464af9314a635bd20494fd1b343d2fa.png) center / cover"
              }}
            >
              CS Experience
            </CardTitle>
            <CardText>
              My Software Engineer course's Project at University of Manitoba
            </CardText>
            <CardActions border>
              <a
                href="https://github.com/tuanngo1001/idk-6"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button colored>GitHub</Button>
              </a>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      // React
      return (
        <div className="projects-grid">
          {/* Project #1 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://reactjs.org/logo-og.png) center / cover"
              }}
            >
              Web Portfolio
            </CardTitle>
            <CardText>My Web portfolio using React</CardText>
            <CardActions border>
              <a
                href="https://github.com/tuanngo1001/portfolio"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button colored>GitHub</Button>
              </a>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project #2 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://reactjs.org/logo-og.png) center / cover"
              }}
            >
              Veers
            </CardTitle>
            <CardText>My React Project</CardText>
            <CardActions border>
              <a
                href="https://github.com/tuanngo1001/veers"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button colored>GitHub</Button>
              </a>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                background:
                  "url(https://previews.123rf.com/images/antonshaparenko/antonshaparenko1809/antonshaparenko180900906/108745601-machine-learning-icon-monochrome-style-design-from-machine-learning-collection-ux-and-ui-pixel-perfe.jpg) center / cover"
              }}
            >
              Machine Learning Project
            </CardTitle>
            <CardText>
              Assisted with collecting data and modifying algorithms. Analyzed
              sample data to determine which employees have the best performance
              and are most efficient using Python as programming language.
            </CardText>
            <CardMenu style={{ color: "black" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else
      return (
        <div className="projects-grid">
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                background:
                  "url(https://res.cloudinary.com/teepublic/image/private/s--mSjDDLiQ--/t_Resized%20Artwork/c_fit,g_north_west,h_954,w_954/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1526996828/production/designs/2712780_1.jpg) center / cover"
              }}
            >
              Movies Web Browser
            </CardTitle>
            <CardText>
              Working on a web development project as a group of 4 people using
              the user–centered design process.
            </CardText>
            <CardActions border>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Button colored>GitHub</Button>
              </a>
            </CardActions>
            <CardMenu style={{ color: "black" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
  }
  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>Android Apps</Tab>
          <Tab>React Apps</Tab>
          <Tab>Machine Learning</Tab>
          <Tab>Others</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
