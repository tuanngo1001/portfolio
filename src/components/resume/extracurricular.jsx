import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Extracurricular extends Component {
  state = {};
  render() {
    return (
      <Grid>
        <Cell col={4}>
          <p>{this.props.role}</p>
        </Cell>
        <Cell col={8}>
          <h4 style={{ marginTop: "0px" }}>{this.props.activity}</h4>
          <p>{this.props.description}</p>
        </Cell>
      </Grid>
    );
  }
}

export default Extracurricular;
