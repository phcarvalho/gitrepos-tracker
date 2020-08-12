import React from 'react';
import { Link } from 'react-router-dom';

import { FaStar, FaArrowLeft } from 'react-icons/fa'
import { MdError } from 'react-icons/md'

import './styles.css';

const RepoPage = () => {
  return (
    <div id="page-repo" className="container">
      <header>
        <div className="repo-navigation">
          <Link to="/">
            <FaArrowLeft size={16} />
          </Link>
          <Link to="/">
            GitRepos Tracker
          </Link>
        </div>
        <div className="repo-title">
          <img src="https://avatars2.githubusercontent.com/u/69631?s=200&v=4" alt="facebook"/>
          <h1>
            facebook/react
          </h1>
        </div>
        <p id="repo-description">
          A declarative, efficient, and flexible JavaScript library for building user interfaces.
        </p>
        <div className="repo-details">
          <div className="repo-issues">
            <MdError size={20} />
            <p>222 issues</p>
          </div>
          <div className="repo-stars">
            <FaStar size={20} color="#E94F37" />
            <p>15687</p>
          </div>
        </div>
      </header>
      <main>

      </main>
    </div>
  )
}

export default RepoPage;