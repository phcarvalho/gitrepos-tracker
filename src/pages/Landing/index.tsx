import React, { useState, FormEvent } from 'react';
import { FaGithubAlt, FaPlus } from 'react-icons/fa'

import RepoItem, { Repo } from '../../components/RepoItem';

import api from '../../services/api';

import './styles.css';

function Landing() {
  const [repoName, setRepoName] = useState('')
  const [repos, setRepos] = useState([] as Array<Repo>)

  async function handleRepoSearch(e: FormEvent) {
    e.preventDefault();
    setRepoName('');

    const repoAlreadyExists = repos.find(
      (repo: Repo) => repo.full_name === repoName
    );

    if(repoAlreadyExists) {
      alert('This repository has been added already!')
    }
    else {
      const response = await api.get(`/repos/${repoName}`);

      setRepos([...repos, response.data])
    }

  }

  return (
    <div id="page-landing" className="container">
      <header>
        <div className="page-header-title">
          <FaGithubAlt size={64} color="#393E41" />
          <h1>
            GitRepos Tracker 
          </h1>
        </div>
        <form 
          id="search-repo"
          onSubmit={(e) => handleRepoSearch(e)}
        >
          <input 
            type="text" 
            id="repo"
            placeholder="username/reponame"
            value={repoName}
            onChange={(e) => setRepoName(e.target.value)}
          />
          <button type="submit">
            <FaPlus color="#fff" size={30} />
          </button>
        </form>
      </header>
      <main>
        {repos ? repos.map((repo) => (
          <RepoItem repo={repo} />
        )) : (
          <h1>No repos found :(</h1>
        )}
      </main>
    </div>
  )
}

export default Landing;