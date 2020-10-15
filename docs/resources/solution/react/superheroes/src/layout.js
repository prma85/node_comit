import React from "react";
import { Container } from "react-bootstrap";
import { HashRouter, Route, Switch } from "react-router-dom";

import NotFound from "./notFound";
import HomePage from "./homePage";
import Superhero from "./superhero";
import Users from "./users";

const Layout = () => {
  return (
    <Container>
      <HashRouter>
        <Switch>
          <Route exact path={"/"} component={HomePage} />
          <Route exact path={"/superhero/:id"} component={Superhero} />
          <Route exact path={"/users"} component={Users} />
          <Route path={"/404"} component={NotFound} />
        </Switch>
      </HashRouter>
    </Container>
  );
};

export default Layout;
