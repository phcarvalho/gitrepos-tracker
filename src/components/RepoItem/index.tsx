import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa'
import { MdError } from 'react-icons/md'

import './styles.css'

export interface Repo {
  id: number;
  name: string;
  full_name: string;
  owner: {
    login: string;
    avatar_url: string;
  }
  stargazers_count: number;
  open_issues: number;
}

interface RepoItemProps {
  repo: Repo
}

const RepoItem: React.FC<RepoItemProps> = ({ repo }) => {
  return (
    <article className="repo-item">
      <img src={repo.owner.avatar_url} alt={repo.full_name}/>
      <div className="repo-item-content">
        <h1>{repo.owner.login}</h1>
        <p>{repo.name} 
          <span>
            { repo.stargazers_count ? (
              <FaStar color="E94F37" size={16} />
            ) : (
              <FaRegStar size={16} />
            )} {repo.stargazers_count}
          </span>
        </p>
      </div>
      <div className="repo-item-issues">
        <MdError size={24} />
        <p>
          {repo.open_issues} issues
        </p>
      </div>
    </article>
  )
}

export default RepoItem;