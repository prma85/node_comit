import React from "react";
import { Container } from "react-bootstrap";
import { HashRouter, Route, Switch } from "react-router-dom";

import NotFound from "./notFound";
import HomePage from "./homePage";
import Superhero from "./superhero";

const Layout = () => {
  return (
    <Container>
      <HashRouter>
        <Switch>
          <Route exact path={"/"} component={HomePage} />
          <Route exact path={"/superhero/:id"} component={Superhero} />
          <Route path={"/404"} component={NotFound} />
        </Switch>
      </HashRouter>
    </Container>
  );
};

export default Layout;
