import React, { useState } from 'react';
import { FaGithubAlt } from 'react-icons/fa'

import RepoItem from '../../components/RepoItem';

import './styles.css';

function Landing() {
  const [repos, setRepos] = useState([
    {
      userName: "facebook",
      repoName: "react",
      avatarURL: "https://avatars3.githubusercontent.com/u/69631?v=4",
      repoURL: "https://github.com/facebook/react"
    },
    {
      userName: "facebook",
      repoName: "react",
      avatarURL: "https://avatars3.githubusercontent.com/u/69631?v=4",
      repoURL: "https://github.com/facebook/react"
    },
    {
      userName: "facebook",
      repoName: "react",
      avatarURL: "https://avatars3.githubusercontent.com/u/69631?v=4",
      repoURL: "https://github.com/facebook/react"
    },
    {
      userName: "facebook",
      repoName: "react",
      avatarURL: "https://avatars3.githubusercontent.com/u/69631?v=4",
      repoURL: "https://github.com/facebook/react"
    },
    {
      userName: "facebook",
      repoName: "react",
      avatarURL: "https://avatars3.githubusercontent.com/u/69631?v=4",
      repoURL: "https://github.com/facebook/react"
    },
    {
      userName: "facebook",
      repoName: "react",
      avatarURL: "https://avatars3.githubusercontent.com/u/69631?v=4",
      repoURL: "https://github.com/facebook/react"
    },
    {
      userName: "facebook",
      repoName: "react",
      avatarURL: "https://avatars3.githubusercontent.com/u/69631?v=4",
      repoURL: "https://github.com/facebook/react"
    },
  ]);

  return (
    <div id="page-landing" className="container">
      <header>
        <div className="page-header-title">
          <FaGithubAlt size={64} color="#393E41" />
          <h1>
            GitRepos Tracker
          </h1>
        </div>
        <form id="search-repo">
          <div className="input-block">
            <input type="text" id="repo" placeholder="username/reponame"/>
          </div>
        </form>
      </header>
      <main>
        {repos ? repos.map((repo) => (
          <RepoItem {...repo} />
        )) : (
          <h1>No repos found :(</h1>
        )}
      </main>
    </div>
  )
}

export default Landing;