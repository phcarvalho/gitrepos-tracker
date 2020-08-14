import React from 'react';
import 'dotenv';
import { HashRouter, Switch, Route } from 'react-router-dom'

import Landing from './pages/Landing';
import RepoPage from './pages/RepoPage';

function Routes() {
  return (
    <HashRouter 
      basename="/"
    >
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/repos/:owner/:name" component={RepoPage} />
      </Switch>
    </HashRouter>
  );
}

export default Routes;