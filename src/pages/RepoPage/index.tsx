import React, { useState, useEffect, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaStar, FaArrowLeft } from 'react-icons/fa'
import { MdError } from 'react-icons/md'

import api from '../../services/api';

import { RepoContext } from '../../components/RepoProvider';
import { Repo } from '../../components/RepoItem';

import IssueItem, { Issue } from '../../components/IssueItem';
import Pagination from '../../components/Pagination';
import Footer from '../../components/Footer';

import './styles.css';

const RepoPage = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(0);
  const [issues, setIssues] = useState([]);
  const [pageRepo, setPageRepo] = useState<Repo>();
  
  const { repos } = useContext(RepoContext);
  const { owner, name } = useParams();

  useEffect(() => {
    if(repos) {
      const repo = repos.find((repoItem: Repo) => repoItem.name === name)

      if(repo) {
        setPageRepo(repo);
        setLoading(false);

        return;
      }
    }

    api.get(`/repos/${owner}/${name}`)
    .then(({ data }) => {
      setPageRepo(data);
    })
    .catch(() => {
      setError(true);
    })

    setLoading(false);
  }, []);

  useEffect(() => {
    if(pageRepo) {
      api.get(`/repos/${pageRepo.full_name}/issues?page=${page}&?sort=created&?state=open`)
      .then((response) => {
        if(lastPage === 0) {
          const { link } = response.headers;

          const lastPageLink = link.split(',').pop().split(';')[0];
          const lastPageValue = lastPageLink.substr(lastPageLink.indexOf("=", lastPageLink.indexOf('page') + 6));
          const lastPageNumber = Number(lastPageValue.substring(1, lastPageValue.indexOf('>')));

          setLastPage(lastPageNumber);
        }

        const { data } = response

        setIssues(data);
      })
    }
  }, [pageRepo, page])

  function handlePageChange(pageNumber: number) {
    setPage(pageNumber);
  }

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
        { error ? (
          <div className="repo-secondary-content">
            <h1>
              We couldn't find <span>{`${owner}/${name}`}</span> repository :(
            </h1>
          </div>
        ) : (
          <>
            {loading ? (
              <div className="repo-secondary-content">
                <h1>
                  Loading...
                </h1>
              </div>
            ) : (
              <>
                <div className="repo-title">
                  <img src={pageRepo?.owner.avatar_url} alt={pageRepo?.full_name}/>
                  <h1>
                    {pageRepo?.full_name}
                  </h1>
                </div>
                <p id="repo-description">
                  {pageRepo?.description}
                </p>
                <div className="repo-details">
                  <div className="repo-issues">
                    <MdError size={20} />
                    <p>{pageRepo?.open_issues} issues</p>
                  </div>
                  <div className="repo-stars">
                    <FaStar size={20} color="#E94F37" />
                    <p>{pageRepo?.stargazers_count}</p>
                  </div>
                </div>
              </>
            )}
          </>
        )}
      </header>
      <main>
        { issues.map((issue: Issue) => (
          <IssueItem key={issue.id} issue={issue} />
        )) }
      </main>
      {lastPage !== 0 && (
        <Pagination currentPage={page} lastPage={lastPage} handlePageChange={handlePageChange} />
      )}
      <Footer />
    </div>
  )
}

export default RepoPage;