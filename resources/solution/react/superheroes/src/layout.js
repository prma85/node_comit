import React from 'react';
import {Container} from 'react-bootstrap';
import Main from './main';
import {HashRouter, Switch, Route} from 'react-router-dom';
import Superhero from './superhero'
import NotFound from './404'

const Layout = () => {
  return (
    <Container>
      <HashRouter>
        <Switch>
          <Route exact path={'/'} component={Main} />
          <Route exact path={'/superhero/:id'} component={Superhero} />
          <Route component={NotFound} />
        </Switch>
      </HashRouter>
    </Container>
  )
}

export default Layout;
