import React from "react";
import { Switch, Route } from "react-router-dom";
import Landingpage from "./landingpage";
import Resume from "./resume";
import Projects from "./projects";
import Contact from "./contact";

const Main = () => {
  return (
    <Switch>
      <Route path="/" exact component={Landingpage} />
      <Route path="/resume" component={Resume} />
      <Route path="/projects" component={Projects} />
      <Route path="/contact" component={Contact} />
    </Switch>
  );
};

export default Main;
