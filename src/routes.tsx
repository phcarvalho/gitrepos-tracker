import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Landing from './pages/Landing';
import RepoPage from './pages/RepoPage';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
      <Route path="/repos/:owner/:name" component={RepoPage} />
    </BrowserRouter>
  );
}

export default Routes;