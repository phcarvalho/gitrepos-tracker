import React from 'react';

import RepoProvider from './components/RepoProvider';
import Routes from './routes';

import './assets/styles/global.css';

function App() {
  return (
    <RepoProvider>
      <Routes/>
    </RepoProvider>
  );
}

export default App;
