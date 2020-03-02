import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";
import avatar from "../../resource/IMG_0079.jpg";
import { Phone, Email, LocationOn } from "@material-ui/icons";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2> Anh Tuan Ngo</h2>
            <img
              src={avatar}
              alt="avatar"
              style={{ height: 250, borderRadius: "50%" }}
            />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              Software Developer intern at Canada Life.
              <br />
              <hr />
              Interested in Machine Learning, Artificial Intelligence and Web
              Development.
              <br />
              <hr />
              Energic third year Computer Science student. Currently working as
              a Co-Op Student. Strong time and project management skills.
              Interested in Artificial Intelligence and Machine Learning
              aspects, have experience in developing in ReactJS & Java.
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr id="contact-me-hr" />

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: 30, fontFamily: "PT Sans" }}
                  >
                    <Phone style={{ fontSize: 66, paddingRight: "5rem" }} />
                    +1 (204) 890-5357
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: 30, fontFamily: "PT Sans" }}
                  >
                    <Email style={{ fontSize: 66, paddingRight: "5rem" }} />
                    ngoa2@myumanitoba.ca
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: 30, fontFamily: "PT Sans" }}
                  >
                    <LocationOn
                      style={{ fontSize: 66, paddingRight: "5rem" }}
                    />
                    Winnipeg, MB Canada
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
