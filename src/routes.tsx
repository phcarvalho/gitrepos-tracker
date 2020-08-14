import React from 'react';
import { BrowserRouter,Switch, Route } from 'react-router-dom'

import Landing from './pages/Landing';
import RepoPage from './pages/RepoPage';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/repos/:owner/:name" component={RepoPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;