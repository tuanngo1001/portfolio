import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import avatar from "../../resource/IMG_0079.jpg";
import Education from "../resume/education";
import Experience from "../resume/experience";
import Skills from "../resume/Skills";
import Extracurricular from "../resume/extracurricular";

class Resume extends Component {
  state = {};

  render() {
    const gradientStyleLeft = {
      background:
        "linear-gradient(to right,#2ebf91,#8360c3)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
      borderTop: "1px solid white",
      width: "50%"
    };
    const gradientStyleRight = {
      background:
        "linear-gradient(to right,#2ebf91,#8360c3)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
      borderTop: "1px solid #DCDCDC",
      width: "50%"
    };
    return (
      <div className="resume-body">
        <Grid>
          <Cell col={4} style={{ paddingLeft: 20 }}>
            <div style={{ textAlign: "center" }}>
              <img
                src={avatar}
                alt="avatar"
                style={{ height: 200, borderRadius: "50%" }}
              />
            </div>

            <h2 style={{ paddingTop: "2em" }}>Anh Tuan Ngo</h2>
            <h4 style={{ color: "grey" }}>Software Developer</h4>
            <hr style={gradientStyleLeft} />
            <p>
              Energic third year Computer Science student. Currently working as
              a Co-Op Student. Strong time and project management skills.
              Interested in Artificial Intelligence and Machine Learning
              aspects, have experience in developing in Java.{" "}
            </p>
            <hr style={gradientStyleLeft} />
            <h5>Address</h5>
            <p>Winnipeg, MB Canada</p>
            <h5>Phone</h5>
            <p>+1(204)890-5357</p>
            <h5>Email</h5>
            <p>ngoa2@myumanitoba.ca</p>
            <h5>LinkedIn</h5>
            <a href="">My website</a>
            <hr style={gradientStyleLeft} />
          </Cell>

          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
              startYear="2018"
              endYear="Current"
              schoolName="University of Manitoba"
              schoolDescription="Bachelor of Computer Science Honours (Co-op Option)"
            />
            <Education
              startYear="2017"
              endYear="2018"
              schoolName="International College of Manitoba"
              schoolDescription="Completed year 1 in Computer Science major with GPA: 3.95 / 4.50"
            />
            <hr style={gradientStyleRight} />

            <h2>Skills</h2>
            <h4>Programming Languages</h4>
            <Skills
              skill="HTML | CSS | JavaScript"
              progress={80}
              disable={true}
            />
            <Skills skill="React" progress={60} disable={true} />
            <Skills
              skill="Java | Python | C,C++"
              progress={75}
              disable={true}
            />
            <h4>Software</h4>
            <Skills
              skill="IntelliJ | WebStorm | Android Studio | CLion"
              disable={false}
            />
            <Skills skill="VSCode | Xcode" disable={false} />
            <Skills skill="Git Version Control" disable={false} />
            <h4>Operating Systems</h4>
            <Skills skill="macOS | Windows | Linux" disable={false} />
            <hr style={gradientStyleRight} />

            <h2>Experience</h2>
            <Experience
              startYear="2020"
              endYear="Current"
              jobName="Software Developer Intern"
              jobDescription="Canada Life Financial Corporation"
            />
            <Experience
              startYear="May 2019"
              endYear="Sept 2019"
              jobName="Cashier | Customer Service"
              jobDescription="Travelodge by Wyndham Winnipeg East"
            />
            <Experience
              startYear="July 2018"
              endYear="Sept 2018"
              jobName="Cashier | Customer Service"
              jobDescription="QuaTayQuaTa Store – Vietnam"
            />
            <hr style={gradientStyleRight} />

            <h2>Extracurricular</h2>
            <Extracurricular
              activity="ACM Programming Contest"
              role="Participant"
              description="Participated in a programming contest hold by Computer Science department, University of Manitoba"
            />
            <Extracurricular
              activity="UM WICS"
              role="Club Member"
              description="Member of student group that supports gender diversity within computer science field"
            />
            <Extracurricular
              activity=".DevClub"
              role="Participant"
              description="Member of the University of Manitoba’s only student the developer club. Attended club’s various events to share work experience and showcase personal projects."
            />
            <Extracurricular
              activity="Provincial Award in Mathematics"
              role="Participant"
              description="Participated and achieved 3rd place in High School Advanced Mathematics competition"
            />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
