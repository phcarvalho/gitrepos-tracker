import React, { useState, useContext, FormEvent } from "react";
import { FaGithubAlt, FaPlus } from "react-icons/fa";

import { RepoContext } from "../../components/RepoProvider";
import RepoItem, { Repo } from "../../components/RepoItem";
import Footer from "../../components/Footer";

import api from "../../services/api";

import "./styles.css";

function Landing() {
  const [repoName, setRepoName] = useState("");
  const { repos, setRepos } = useContext(RepoContext);

  async function handleRepoSearch(e: FormEvent) {
    e.preventDefault();
    setRepoName("");

    const repoAlreadyExists = repos.find(
      (repo: Repo) => repo.full_name === repoName
    );

    if (repoAlreadyExists) {
      alert("This repository has been added already!");
    } else {
      const response = await api.get(`/repos/${repoName}`);

      setRepos([...repos, response.data] as never[]);
    }
  }

  return (
    <div id="page-landing" className="container">
      <header>
        <div className="page-header-title">
          <FaGithubAlt size={64} color="#393E41" />
          <h1>GitRepos Tracker</h1>
        </div>
        <form id="search-repo" onSubmit={(e) => handleRepoSearch(e)}>
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
        {repos && repos.length > 0 ? (
          repos.map((repo: Repo) => (
            <RepoItem key={repo.full_name} repo={repo} />
          ))
        ) : (
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <h1>No repositories added yet :(</h1>
            <p>Try adding a new repository like "facebook/react"</p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default Landing;
